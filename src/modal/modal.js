angular.module('xue.modal', [])
    .factory('$$multiMap', function () {
        return {
            createNew: function () {
                var map = {};

                return {
                    entries: function () {
                        return Object.keys(map).map(function (key) {
                            return {
                                key: key,
                                value: map[key]
                            };
                        });
                    },
                    get: function (key) {
                        return map[key];
                    },
                    hasKey: function (key) {
                        return !!map[key];
                    },
                    keys: function () {
                        return Object.keys(map);
                    },
                    put: function (key, value) {
                        if (!map[key]) {
                            map[key] = [];
                        }

                        map[key].push(value);
                    },
                    remove: function (key, value) {
                        var values = map[key];

                        if (!values) {
                            return;
                        }

                        var idx = values.indexOf(value);

                        if (idx !== -1) {
                            values.splice(idx, 1);
                        }

                        if (!values.length) {
                            delete map[key];
                        }
                    }
                };
            }
        };
    })
    .factory('$$stackedMap', function () {
        return {
            createNew: function () {
                var stack = [];

                return {
                    add: function (key, value) {
                        stack.push({
                            key: key,
                            value: value
                        });
                    },
                    get: function (key) {
                        for (var i = 0; i < stack.length; i++) {
                            if (key === stack[i].key) {
                                return stack[i];
                            }
                        }
                    },
                    keys: function () {
                        var keys = [];
                        for (var i = 0; i < stack.length; i++) {
                            keys.push(stack[i].key);
                        }
                        return keys;
                    },
                    top: function () {
                        return stack[stack.length - 1];
                    },
                    remove: function (key) {
                        var idx = -1;
                        for (var i = 0; i < stack.length; i++) {
                            if (key === stack[i].key) {
                                idx = i;
                                break;
                            }
                        }
                        return stack.splice(idx, 1)[0];
                    },
                    removeTop: function () {
                        return stack.pop();
                    },
                    length: function () {
                        return stack.length;
                    }
                };
            }
        };
    })
    .factory('$modalStack', ['$document', '$q', '$$stackedMap', '$$multiMap', '$animate', '$rootScope', '$compile',
        function ($document, $q, $$stackedMap, $$multiMap, $animate, $rootScope, $compile) {
            var ARIA_HIDDEN_ATTRIBUTE_NAME = 'xue-modal-aria-hidden-count';
            var OPENED_MODAL_CLASS = 'modal-open';
            var SNAKE_CASE_REGEXP = /[A-Z]/g;
            var innerUtil = {
                attribute: ['deferred', 'renderDeferred', 'closedDeferred', 'backdrop', 'keyboard', 'openedClass', 'windowTopClass', 'animation', 'appendTo'],
                openedWindows: $$stackedMap.createNew(),
                openedClasses: $$multiMap.createNew(),
                previousTopOpenedModal: null,
                topModalIndex: 0,
                backdropDomEl: null,
                backdropScope: null,
                scrollbarPadding: null,
                toggleTopWindowClass: function (toggleSwitch) {
                    var modalWindow, self = this;
                    if (self.openedWindows.length() > 0) {
                        modalWindow = self.openedWindows.top().value;
                        modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
                    }
                },
                backdropIndex: function () {
                    var topBackdropIndex = -1, self = innerUtil;
                    var opened = self.openedWindows.keys();
                    for (var i = 0; i < opened.length; i++) {
                        if (self.openedWindows.get(opened[i]).value.backdrop) {
                            topBackdropIndex = i;
                        }
                    }

                    // If any backdrop exist, ensure that it's index is always
                    // right below the top modal
                    if (topBackdropIndex > -1 && topBackdropIndex < innerUtil.topModalIndex) {
                        topBackdropIndex = innerUtil.topModalIndex;
                    }
                    return topBackdropIndex;
                },
                getSiblings: function (el) {
                    var children = el.parent() ? el.parent().children() : [];

                    return Array.prototype.filter.call(children, function (child) {
                        return child !== el[0];
                    });
                },
                applyAriaHidden: function (el) {
                    var self = this;
                    if (!el || el[0].tagName === 'BODY') {
                        return;
                    }

                    self.getSiblings(el).forEach(function (sibling) {
                        var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
                            ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

                        if (!ariaHiddenCount) {
                            ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
                        }

                        sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
                        sibling.setAttribute('aria-hidden', 'true');
                    });

                    return self.applyAriaHidden(el.parent());
                },
                unhideBackgroundElements: function () {
                    Array.prototype.forEach.call(
                        document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'),
                        function (hiddenEl) {
                            var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
                                newHiddenCount = ariaHiddenCount - 1;
                            hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

                            if (!newHiddenCount) {
                                hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
                                hiddenEl.removeAttribute('aria-hidden');
                            }
                        }
                    );
                },
                removeAfterAnimate: function (domEl, scope, done, closedDeferred) {
                    var asyncDeferred;
                    var asyncPromise = null;
                    scope.$broadcast($modalStack.NOW_CLOSING_EVENT, function () {
                        if (!asyncDeferred) {
                            asyncDeferred = $q.defer();
                            asyncPromise = asyncDeferred.promise;
                        }

                        return function asyncDone() {
                            asyncDeferred.resolve();
                        };
                    });

                    // Note that it's intentional that asyncPromise might be null.
                    // That's when setIsAsync has not been called during the
                    // NOW_CLOSING_EVENT broadcast.
                    return $q.when(asyncPromise).then(afterAnimating);

                    function afterAnimating() {
                        if (afterAnimating.done) {
                            return;
                        }
                        afterAnimating.done = true;

                        $animate.leave(domEl,function(){
                            if (done) {
                                done();
                            }

                            domEl.remove();
                            if (closedDeferred) {
                                closedDeferred.resolve();
                            }
                        });

                        scope.$destroy();
                    }
                },
                checkRemoveBackdrop: function () {
                    //remove backdrop if no longer needed
                    if (innerUtil.backdropDomEl && innerUtil.backdropIndex() === -1) {
                        var backdropScopeRef = innerUtil.backdropScope;
                        innerUtil.removeAfterAnimate(innerUtil.backdropDomEl, innerUtil.backdropScope, function () {
                            backdropScopeRef = null;
                        });
                        innerUtil.backdropDomEl = undefined;
                        innerUtil.backdropScope = undefined;
                    }
                },
                removeModalWindow: function (modalInstance, elementToReceiveFocus) {
                    var modalWindow = innerUtil.openedWindows.get(modalInstance).value;
                    var appendToElement = modalWindow.appendTo;

                    //clean up the stack
                    innerUtil.openedWindows.remove(modalInstance);
                    innerUtil.previousTopOpenedModal = innerUtil.openedWindows.top();
                    if (innerUtil.previousTopOpenedModal) {
                        innerUtil.topModalIndex = parseInt(innerUtil.previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
                    }

                    innerUtil.removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function () {
                        var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
                        innerUtil.openedClasses.remove(modalBodyClass, modalInstance);
                        var areAnyOpen = innerUtil.openedClasses.hasKey(modalBodyClass);
                        appendToElement.toggleClass(modalBodyClass, areAnyOpen);
                        if (!areAnyOpen && innerUtil.scrollbarPadding && innerUtil.scrollbarPadding.heightOverflow && innerUtil.scrollbarPadding.scrollbarWidth) {
                            if (innerUtil.scrollbarPadding.originalRight) {
                                appendToElement.css({ paddingRight: innerUtil.scrollbarPadding.originalRight + 'px' });
                            } else {
                                appendToElement.css({ paddingRight: '' });
                            }
                            innerUtil.scrollbarPadding = null;
                        }
                        innerUtil.toggleTopWindowClass(true);
                    }, modalWindow.closedDeferred);
                    innerUtil.checkRemoveBackdrop();

                    //move focus to specified element if available, or else to body
                    if (elementToReceiveFocus && elementToReceiveFocus.focus) {
                        elementToReceiveFocus.focus();
                    } else if (appendToElement.focus) {
                        appendToElement.focus();
                    }
                },
                broadcastClosing: function (modalWindow, resultOrReason, closing) {
                    return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
                },
                keydownListener: function (evt) {
                    if (evt.isDefaultPrevented()) {
                        return evt;
                    }

                    var modal = innerUtil.openedWindows.top();
                    if (modal) {
                        switch (evt.which) {
                            case 27: {
                                if (modal.value.keyboard) {
                                    evt.preventDefault();
                                    $rootScope.$apply(function () {
                                        $modalStack.dismiss(modal.key, 'escape key press');
                                    });
                                }
                                break;
                            }
                            case 9: {
                                var list = $modalStack.loadFocusElementList(modal);
                                var focusChanged = false;
                                if (evt.shiftKey) {
                                    if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                                        focusChanged = $modalStack.focusLastFocusableElement(list);
                                    }
                                } else {
                                    if ($modalStack.isFocusInLastItem(evt, list)) {
                                        focusChanged = $modalStack.focusFirstFocusableElement(list);
                                    }
                                }

                                if (focusChanged) {
                                    evt.preventDefault();
                                    evt.stopPropagation();
                                }

                                break;
                            }
                        }
                    }
                },
                isVisible: function (element) {
                    return !!(element.offsetWidth ||
                        element.offsetHeight ||
                        element.getClientRects().length);
                },
                snake_case: function (name) {
                    var separator = '-';
                    return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
                        return (pos ? separator : '') + letter.toLowerCase();
                    });
                }
            };
            var $modalStack = {
                NOW_CLOSING_EVENT: 'modal.stack.now-closing',
                open: function (modalInstance, modal) {
                    var modalOpener = $document[0].activeElement,
                        modalBodyClass = modal.openedClass;
                    innerUtil.toggleTopWindowClass(false);
                    innerUtil.previousTopOpenedModal = innerUtil.openedWindows.top();
                    var winObj = {};
                    angular.forEach(innerUtil.attribute, function (item, i) {
                        winObj[item] = modal[item];
                    });
                    winObj.modalScope = modal.scope;
                    innerUtil.openedWindows.add(modalInstance, winObj);
                    innerUtil.openedClasses.put(modalBodyClass, modalInstance);
                    var appendToElement = modal.appendTo,
                        currBackdropIndex = innerUtil.backdropIndex();
                    if (currBackdropIndex >= 0 && !innerUtil.backdropDomEl) {
                        // key code
                        innerUtil.backdropScope = $rootScope.$new(true);
                        innerUtil.backdropScope.modalOptions = modal;
                        innerUtil.backdropScope.index = currBackdropIndex;
                        innerUtil.backdropDomEl = angular.element('<div xue-modal-backdrop="xui-modal-backdrop"></div>');
                        innerUtil.backdropDomEl.attr({
                            'class': 'xui-modal-backdrop-wrap',
                            'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
                            'xue-modal-animation-class': 'fade'
                        });
                        if (modal.backdropClass) {
                            innerUtil.backdropDomEl.addClass(modal.backdropClass);
                        }

                        if (modal.animation) {
                            innerUtil.backdropDomEl.attr('modal-animation', 'true');
                        }
                        // key code
                        $compile(innerUtil.backdropDomEl)(innerUtil.backdropScope);
                        $animate.enter(innerUtil.backdropDomEl, appendToElement);
                        // if ($uibPosition.isScrollable(appendToElement)) {
                        //     innerUtil.scrollbarPadding = $uibPosition.innerUtil.scrollbarPadding(appendToElement);
                        //     if (innerUtil.scrollbarPadding.heightOverflow && innerUtil.scrollbarPadding.scrollbarWidth) {
                        //         appendToElement.css({ paddingRight: innerUtil.scrollbarPadding.right + 'px' });
                        //     }
                        // }
                    }
                    var content;
                    if (modal.component) {
                        content = document.createElement(innerUtil.snake_case(modal.component.name));
                        content = angular.element(content);
                        content.attr({
                            resolve: '$resolve',
                            'modal-instance': '$modalInstance',
                            close: '$close($value)',
                            dismiss: '$dismiss($value)'
                        });
                    } else {
                        content = modal.content;
                    }

                    // Set the top modal index based on the index of the previous top modal
                    innerUtil.topModalIndex = innerUtil.previousTopOpenedModal ? parseInt(innerUtil.previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
                    var angularDomEl = angular.element('<div xue-modal-window="modal-window"></div>');
                    angularDomEl.attr({
                        'class': 'modal',
                        'template-url': modal.windowTemplateUrl,
                        'window-top-class': modal.windowTopClass,
                        'role': 'dialog',
                        'aria-labelledby': modal.ariaLabelledBy,
                        'aria-describedby': modal.ariaDescribedBy,
                        'size': modal.size,
                        'index': innerUtil.topModalIndex,
                        'animate': 'animate',
                        'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
                        'tabindex': -1,
                        'xue-modal-animation-class': 'fade'
                    }).append(content);
                    if (modal.windowClass) {
                        angularDomEl.addClass(modal.windowClass);
                    }

                    if (modal.animation) {
                        angularDomEl.attr('modal-animation', 'true');
                    }

                    appendToElement.addClass(modalBodyClass);
                    if (modal.scope) {
                        // we need to explicitly add the modal index to the modal scope
                        // because it is needed by ngStyle to compute the zIndex property.
                        modal.scope.$$topModalIndex = innerUtil.topModalIndex;
                    }
                    $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

                    innerUtil.openedWindows.top().value.modalDomEl = angularDomEl;
                    innerUtil.openedWindows.top().value.modalOpener = modalOpener;

                    innerUtil.applyAriaHidden(angularDomEl);

                },
                close: function (modalInstance, result) {
                    var modalWindow = innerUtil.openedWindows.get(modalInstance);
                    innerUtil.unhideBackgroundElements();
                    if (modalWindow && innerUtil.broadcastClosing(modalWindow, result, true)) {
                        modalWindow.value.modalScope.$$destructionScheduled = true;
                        modalWindow.value.deferred.resolve(result);
                        innerUtil.removeModalWindow(modalInstance, modalWindow.value.modalOpener);
                        return true;
                    }
                    return !modalWindow;
                },
                dismiss: function (modalInstance, reason) {
                    var modalWindow = innerUtil.openedWindows.get(modalInstance);
                    innerUtil.unhideBackgroundElements();
                    if (modalWindow && innerUtil.broadcastClosing(modalWindow, reason, false)) {
                        modalWindow.value.modalScope.$$destructionScheduled = true;
                        modalWindow.value.deferred.reject(reason);
                        innerUtil.removeModalWindow(modalInstance, modalWindow.value.modalOpener);
                        return true;
                    }
                    return !modalWindow;
                },
                dismissAll: function (reason) {
                    var topModal = $modalStack.getTop();
                    while (topModal && $modalStack.dismiss(topModal.key, reason)) {
                        topModal = $modalStack.getTop();
                    }
                },
                getTop: function () {
                    return innerUtil.openedWindows.top();
                },
                modalRendered: function (modalInstance) {
                    var modalWindow = innerUtil.openedWindows.get(modalInstance);
                    if (modalWindow) {
                        modalWindow.value.renderDeferred.resolve();
                    }
                },
                focusFirstFocusableElement: function (list) {
                    if (list.length > 0) {
                        list[0].focus();
                        return true;
                    }
                    return false;
                },
                focusLastFocusableElement: function (list) {
                    if (list.length > 0) {
                        list[list.length - 1].focus();
                        return true;
                    }
                    return false;
                },
                isModalFocused: function (evt, modalWindow) {
                    if (evt && modalWindow) {
                        var modalDomEl = modalWindow.value.modalDomEl;
                        if (modalDomEl && modalDomEl.length) {
                            return (evt.target || evt.srcElement) === modalDomEl[0];
                        }
                    }
                    return false;
                },
                isFocusInFirstItem: function (evt, list) {
                    if (list.length > 0) {
                        return (evt.target || evt.srcElement) === list[0];
                    }
                    return false;
                },
                isFocusInLastItem: function (evt, list) {
                    if (list.length > 0) {
                        return (evt.target || evt.srcElement) === list[list.length - 1];
                    }
                    return false;
                },
                loadFocusElementList: function (modalWindow) {
                    if (modalWindow) {
                        var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' +
                            'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' +
                            'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
                        var modalDomE1 = modalWindow.value.modalDomEl;
                        if (modalDomE1 && modalDomE1.length) {
                            var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
                            return elements ?
                                Array.prototype.filter.call(elements, function (element) {
                                    return innerUtil.isVisible(element);
                                }) : elements;
                        }
                    }
                }
            };

            $rootScope.$watch(innerUtil.backdropIndex, function (newBackdropIndex) {
                if (innerUtil.backdropScope) {
                    innerUtil.backdropScope.index = newBackdropIndex;
                }
            });

            $document.on('keydown', innerUtil.keydownListener);

            $rootScope.$on('$destroy', function () {
                $document.off('keydown', innerUtil.keydownListener);
            });

            return $modalStack;
        }])
    .provider('$xueResolve', [function () {
        var resolve = this;
        this.resolver = null;

        this.setResolver = function (resolver) {
            this.resolver = resolver;
        };

        this.$get = ['$injector', '$q', function ($injector, $q) {
            var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
            return {
                resolve: function (invocables, locals, parent, self) {
                    if (resolver) {
                        return resolver.resolve(invocables, locals, parent, self);
                    }

                    var promises = [];

                    angular.forEach(invocables, function (value) {
                        if (angular.isFunction(value) || angular.isArray(value)) {
                            promises.push($q.resolve($injector.invoke(value)));
                        } else if (angular.isString(value)) {
                            promises.push($q.resolve($injector.get(value)));
                        } else {
                            promises.push($q.resolve(value));
                        }
                    });

                    return $q.all(promises).then(function (resolves) {
                        var resolveObj = {};
                        var resolveIter = 0;
                        angular.forEach(invocables, function (value, key) {
                            resolveObj[key] = resolves[resolveIter++];
                        });

                        return resolveObj;
                    });
                }
            };
        }];
    }])
    .provider('$xModal', [function () {
        this.$get = ['$document', '$modalStack', '$xueResolve', '$rootScope', '$q', '$controller', '$http', '$templateCache',
            function ($document, $modalStack, $xueResolve, $rootScope, $q, $controller, $http, $templateCache) {
                var modalUtil = {
                    options: {
                        openedClass: '',
                        backdropClass: '',
                        windowTopClass: '',
                        windowClass: '',
                        animation: true,
                        backdrop: true, //can also be false or 'static'
                        keyboard: true,
                        resolve: {},
                        appendTo: $document.find('body').eq(0),
                        component: '',
                        template: '',
                        templateUrl: '',
                        windowTemplateUrl: '',
                        ariaLabelledBy: '',
                        ariaDescribedBy: '',
                        size: '',
                        controller: null
                    },
                    promiseChain: null,
                    resolveWithTemplate: function () {
                        if (modalUtil.modalOptions.component) {
                            return $q.when($xueResolve.resolve(modalUtil.modalOptions.resolve, {}, null, null));
                        } else {
                            return $q.all([modalUtil.getTemplatePromise(modalUtil.modalOptions), $xueResolve.resolve(modalUtil.modalOptions.resolve, {}, null, null)]);
                        }
                    },
                    getTemplatePromise: function (options) {
                        return options.template ? $q.when(options.template) :
                            $http.get(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl,
                                { cache: $templateCache }).then(function (result) {
                                    return result.data;
                                });
                    },
                    constructLocals: function (obj, modalScope, tplAndVars, modalInstance, template, instanceOnScope, injectable) {
                        obj.$scope = modalScope;
                        obj.$scope.$resolve = {};
                        if (instanceOnScope) {
                            obj.$scope.$modalInstance = modalInstance;
                        } else {
                            obj.$modalInstance = modalInstance;
                        }

                        var resolves = template ? tplAndVars[1] : tplAndVars;
                        angular.forEach(resolves, function (value, key) {
                            if (injectable) {
                                obj[key] = value;
                            }

                            obj.$scope.$resolve[key] = value;
                        });
                    }
                };
                var $modal = {
                    getPromiseChain: function () {
                        return modalUtil.promiseChain;
                    },
                    open: function (modalOptions) {
                        modalUtil.modalOptions = modalOptions;
                        var modalResultDeferred = $q.defer();
                        var modalOpenedDeferred = $q.defer();
                        var modalClosedDeferred = $q.defer();
                        var modalRenderDeferred = $q.defer();

                        var modalInstance = {
                            result: modalResultDeferred.promise,
                            opened: modalOpenedDeferred.promise,
                            closed: modalClosedDeferred.promise,
                            rendered: modalRenderDeferred.promise,
                            close: function (result) {
                                return $modalStack.close(modalInstance, result);
                            },
                            dismiss: function (reason) {
                                return $modalStack.dismiss(modalInstance, reason);
                            }
                        };
                        modalOptions = angular.extend({}, modalUtil.options, modalOptions);

                        if (!modalOptions.appendTo.length) {
                            throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
                        }

                        //verify options
                        if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
                            throw new Error('One of component or template or templateUrl options is required.');
                        }
                        var samePromise;
                        samePromise = modalUtil.promiseChain = $q.all([modalUtil.promiseChain])
                            .then(modalUtil.resolveWithTemplate, modalUtil.resolveWithTemplate)
                            .then(function resolveSuccess(tplAndVars) {
                                var providedScope = modalOptions.scope || $rootScope;

                                var modalScope = providedScope.$new();
                                modalScope.$close = modalInstance.close;
                                modalScope.$dismiss = modalInstance.dismiss;

                                modalScope.$on('$destroy', function () {
                                    if (!modalScope.$$destructionScheduled) {
                                        modalScope.$dismiss('$unscheduledDestruction');
                                    }
                                });

                                var modal = {
                                    scope: modalScope,
                                    deferred: modalResultDeferred,
                                    renderDeferred: modalRenderDeferred,
                                    closedDeferred: modalClosedDeferred
                                };
                                var modalExtKey = ['animation', 'backdrop', 'keyboard', 'backdropClass',
                                    'windowTopClass', 'windowClass', 'windowTemplateUrl', 'ariaLabelledBy',
                                    'ariaDescribedBy', 'size', 'openedClass', 'appendTo'];
                                angular.forEach(modalExtKey, function (item) {
                                    modal[item] = modalOptions[item];
                                });

                                var component = {};
                                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

                                if (modalOptions.component) {
                                    modalUtil.constructLocals(component, modalScope, tplAndVars, modalInstance, false, true, false);
                                    component.name = modalOptions.component;
                                    modal.component = component;
                                } else if (modalOptions.controller) {
                                    modalUtil.constructLocals(ctrlLocals, modalScope, tplAndVars, modalInstance, true, false, true);

                                    // key code
                                    // the third param will make the controller instantiate later,private api
                                    // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
                                    ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals);

                                    if (modalOptions.controllerAs) {
                                        modalScope[modalOptions.controllerAs] = ctrlInstance;
                                    }
                                }

                                if (!modalOptions.component) {
                                    modal.content = tplAndVars[0];
                                }

                                $modalStack.open(modalInstance, modal);
                                modalOpenedDeferred.resolve(true);


                            }, function resolveError(reason) {
                                modalOpenedDeferred.reject(reason);
                                modalResultDeferred.reject(reason);
                            })['finally'](function () {
                                if (modalUtil.promiseChain === samePromise) {
                                    modalUtil.promiseChain = null;
                                }
                            });

                        return modalInstance;

                    }
                }
                return $modal;
            }]
    }])
    .directive('xueModalBackdrop', function () {
        return {
            restrict: 'A',
            compile: function (tElement, tAttrs) {
                tElement.addClass(tAttrs.backdropClass);
            }
        };
    })
    .directive('xueModalWindow', ['$q', '$document', '$modalStack',
        function ($q, $document, $modalStack) {
            return {
                scope: {
                    index: '@'
                },
                restrict: 'A',
                transclude: true,
                templateUrl: function (tElement, tAttrs) {
                    return tAttrs.templateUrl || 'xue/template/modal/modal.html';
                },
                link: function (scope, element, attrs) {
                    element.addClass(attrs.windowTopClass || '');
                    scope.size = attrs.size;

                    scope.close = function (evt) {
                        var modal = $modalStack.getTop();
                        if (modal && modal.value.backdrop &&
                            modal.value.backdrop !== 'static' &&
                            evt.target === evt.currentTarget) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            $modalStack.dismiss(modal.key, 'backdrop click');
                        }
                    };

                    // moved from template to fix issue #2280
                    element.on('click', scope.close);

                    // This property is only added to the scope for the purpose of detecting when this directive is rendered.
                    // We can detect that by using this property in the template associated with this directive and then use
                    // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
                    scope.$isRendered = true;

                    // Deferred object that will be resolved when this modal is rendered.
                    var modalRenderDeferObj = $q.defer();
                    // Resolve render promise post-digest
                    scope.$$postDigest(function () {
                        modalRenderDeferObj.resolve();
                    });

                    modalRenderDeferObj.promise.then(function () {
                        var animationPromise = null;

                        $q.when(animationPromise).then(function () {
                            // Notify {@link $modalStack} that modal is rendered.
                            var modal = $modalStack.getTop();
                            if (modal) {
                                $modalStack.modalRendered(modal.key);
                            }

                            /**
                             * If something within the freshly-opened modal already has focus (perhaps via a
                             * directive that causes focus) then there's no need to try to focus anything.
                             */
                            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
                                var inputWithAutofocus = element[0].querySelector('[autofocus]');
                                /**
                                 * Auto-focusing of a freshly-opened modal element causes any child elements
                                 * with the autofocus attribute to lose focus. This is an issue on touch
                                 * based devices which will show and then hide the onscreen keyboard.
                                 * Attempts to refocus the autofocus element via JavaScript will not reopen
                                 * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
                                 * the modal element if the modal does not contain an autofocus element.
                                 */
                                if (inputWithAutofocus) {
                                    inputWithAutofocus.focus();
                                } else {
                                    element[0].focus();
                                }
                            }
                        });
                    });
                }
            };
        }])
    .directive('xueModalAnimationClass', function () {
        return {
            compile: function (tElement, tAttrs) {
                if (tAttrs.modalAnimation) {
                    tElement.addClass(tAttrs.xueModalAnimationClass);
                }
            }
        };
    })
    .directive('xueModalTransclude', ['$animate', function ($animate) {
        return {
            link: function (scope, element, attrs, controller, transclude) {
                transclude(scope.$parent, function (clone) {
                    element.empty();
                    $animate.enter(clone, element);
                });
            }
        };
    }])
    ;