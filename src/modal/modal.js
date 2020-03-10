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
    .factory('$modalStack', ['$document', '$$stackedMap', '$$multiMap', '$animate', '$rootScope', '$compile',
        function ($document, $$stackedMap, $$multiMap, $animate, $rootScope, $compile) {
            var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';
            var innerUtil = {
                attribute: ['deferred', 'renderDeferred', 'closedDeferred', 'modalScope', 'backdrop', 'keyboard', 'openedClass', 'windowTopClass', 'animation', 'appendTo'],
                openedWindows: $$stackedMap.createNew(),
                openedClasses: $$multiMap.createNew(),
                previousTopOpenedModal: null,
                topModalIndex: 0,
                backdropDomEl: null,
                backdropScope: null,
                toggleTopWindowClass: function (toggleSwitch) {
                    var modalWindow, self = this;
                    if (self.openedWindows.length() > 0) {
                        modalWindow = self.openedWindows.top().value;
                        modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
                    }
                },
                backdropIndex: function () {
                    var topBackdropIndex = -1, self = this;
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
                }
            };
            var $modalStack = {
                open: function (modalInstance, modal) {
                    var modalOpener = $document[0].activeElement,
                        modalBodyClass = modal.openedClass;
                    innerUtil.toggleTopWindowClass(false);
                    innerUtil.previousTopOpenedModal = innerUtil.openedWindows.top();
                    var winObj = {};
                    angular.forEach(innerUtil.attribute, function (item, i) {
                        winObj[item] = modal[item];
                    });
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
                            'uib-modal-animation-class': 'fade',
                            'modal-in-class': 'in'
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
                        //     scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
                        //     if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
                        //         appendToElement.css({ paddingRight: scrollbarPadding.right + 'px' });
                        //     }
                        // }
                    }
                    var content;
                    if (modal.component) {
                        // content = document.createElement(snake_case(modal.component.name));
                        // content = angular.element(content);
                        // content.attr({
                        //     resolve: '$resolve',
                        //     'modal-instance': '$modalInstance',
                        //     close: '$close($value)',
                        //     dismiss: '$dismiss($value)'
                        // });
                    } else {
                        content = modal.content;
                    }

                    // Set the top modal index based on the index of the previous top modal
                    innerUtil.topModalIndex = innerUtil.previousTopOpenedModal ? parseInt(innerUtil.previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
                    var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
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
                        'uib-modal-animation-class': 'fade',
                        'modal-in-class': 'in'
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
                close: function () {

                },
                dismiss: function () {

                },
                dismissAll: function () {

                },
                getTop: function () {

                },
                modalRendered: function () {

                },
                focusFirstFocusableElement: function () {

                },
                focusLastFocusableElement: function () {

                },
                isModalFocused: function () {

                },
                isFocusInFirstItem: function () {

                },
                isFocusInLastItem: function () {

                },
                loadFocusElementList: function () {

                }
            };
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
                                //return $modalStack.close(modalInstance, result);
                            },
                            dismiss: function (reason) {
                                //return $modalStack.dismiss(modalInstance, reason);
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
    }]);