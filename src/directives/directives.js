angular.module('xue.directives', ['xue.util.lang'])
    //锁定
    .directive("lockedMask", function () {
        return {
            restrict: 'A',
            scope: {
                lockedMask: '='
            },
            link: function (scope, ele, attrs) {
                function setMask() {
                    $(ele).attr("title", scope.lockedMask.tipText);
                    $(ele).css({
                        "cursor": "help",
                        "position": "relative"
                    });
                    $(ele).find("#lockedMask").remove();
                    $(ele).append("<div id='lockedMask' style='width:100%;height:100%;position:absolute;z-index:20; border:solid 1px #F9FAFA;background:url(images/mask.png);top:0;left:0'></div>");
                    ele.bind("click", function (e) {
                        // modalExt.modalTip({
                        //     content: scope.lockedMask.tipText,
                        //     type: "warning",
                        //     height: 150
                        // });
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    /* ele.find("*").off("click").off("dblclick"); */
                }

                function removeMask() {
                    $(ele).removeAttr("title");
                    $(ele).css({
                        "cursor": "auto",
                        "position": "static"
                    });
                    $(ele).unbind('click');
                    $(ele).find("#lockedMask").remove();
                }
                if (scope.lockedMask.isLock) {
                    setMask();
                }
                scope.$watch('lockedMask', function (newVal, oldVal) {
                    if (newVal && newVal.isLock) {
                        setMask();
                    } else if (newVal && !newVal.isLock) {
                        removeMask();
                    }
                }, true)


            }
        }
    })
    //等待repeat轮询完成
    .directive("repeatFinish", function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                if (scope.$last == true) {
                    scope.$eval(attr.repeatFinish);
                }
            }
        }
    })
    //等待图片加载完成
    .directive("loadImage", function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('load', function () {
                    scope.$apply(attrs.loadImage);
                });
            }
        }
    })
    //keyup监听删除非数字字符
    .directive("filterNumber", function () {
        return {
            link: function (scope, element) {
                var regex = /\D/g;
                element.bind('keyup', function () {
                    this.value = this.value.replace(regex, '');
                });
            }
        }
    })
    //error处理
    .directive("errSrc", function () {
        return {
            link: function (scope, element, attrs) {
                element.bind("error", function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set("src", attrs.errSrc);
                    }
                });
            }
        }
    })
    //鼠标移入显示，移出隐藏
    .directive('mouseOverLeave', function () {
        return {
            restrict: 'A',
            scope: {
                hover: "="
            },
            link: function (scope, elem, attr) {
                elem.bind('mouseover', function () {
                    elem.css("cursor", "pointer");
                    scope.$apply(function () {
                        scope.hover = true;
                    });
                });
                elem.bind('mouseleave', function () {
                    scope.$apply(function () {
                        scope.hover = false;
                    });
                });
            }
        }
    })
    // radio base on angularjs
    .directive('xueRadio', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "="
            },
            template: '<div class="xui-radio-wrap" ng-class="{true:\'gx-checked\'}[!!ngChecked]"></div>'
        }
    })
    // checkbox base on angularjs
    .directive('xueCheckbox', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "="
            },
            template: '<div class="xui-checkbox-wrap" ng-class="{true:\'gx-checked\'}[!!ngChecked]"><i class="xui-icon xui-icon-md-checkmark"></i></div>'
        }
    })
    // toggle switch base on angularjs
    .directive('xueMultiCheckbox', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                multiType: "=",
                ngDisabled: "="
            },
            template: '<label class="xui-multi-checkbox-wrap">' +
                '<span class="multi-checkbox" ng-class="{1:\'multi-checkbox-checked\',2:\'multi-checkbox-indeterminate\'}[multiType]"></span>' +
                '<input type="checkbox" class="multi-checkbox-input" ng-disabled="ngDisabled"></label>'
        }
    })
    //switch开关
    .directive("xueToggle", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngDisabled: '=',
                toggleConfig: '='
            },
            template: "<div class='xui-toggle-wrap' ng-class=\"{true:'active'}[toggleConfig.disabled]\"><div ng-click='switchToggle()'><div class='toggle-bar'></div><div class='toggle-button'></div></div></div>",
            link: function (scope, ele, attrs) {
                var toggleConfig = {
                    disabled: false,
                    onSelect: function () {}
                };
                scope.toggleConfig = angular.extend(toggleConfig, scope.toggleConfig);
                if (scope.ngDisabled) {
                    scope.toggleConfig.disabled = scope.ngDisabled;
                }
                scope.switchToggle = function () {
                    /* scope.toggleConfig.disabled = !scope.toggleConfig.disabled;
                    scope.ngDisabled = scope.toggleConfig.disabled; */
                    scope.toggleConfig.onSelect(scope.toggleConfig.disabled);
                }
                scope.$watch("ngDisabled", function (newVal, oldVal) {
                    scope.toggleConfig.disabled = newVal;
                });
            }
        }
    })
    // toggle switch base on angularjs
    .directive('xueToggleSwitch', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "=",
                toggleClick: "=",
                clickParam: "="
            },
            template: '<label class="xui-toggle-switch-wrap">' +
                '<input class="swith-checkbox" type="checkbox" ng-model="ngChecked" ng-click="clickEvent()"/>' +
                '<div class="switch-bg"></div><div class="toggle-btn"></div></label>',
            link: function (scope, element, attr) {
                scope.clickEvent = function () {
                    if (xueUtilLang.isFunction(scope.toggleClick)) {
                        scope.toggleClick(scope.clickParam || "");
                    }
                }
            }
        }
    }])
    // 单选指令组
    .directive('xueRadioGroup', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                value: '=', // Radio 的 value
                label: '=',
                disabled: '=',
                radioClick: "&", // 绑定父元素事件
                name: '=' // 选项值
            },
            template: '<div class="xui-radio-group-wrap">' +
                '<label ng-class="{\'active\':value==label,\'disabled\':disabled}" class="radio-item">' +
                '<input  class="checkbox-input" type="radio" name="common-radio" ng-disabled="disabled"  value="{{value}}" ng-model="value" ng-click="onChecked(value)"/>' +
                '</label>' +
                '<span class="radio-name" ng-click="onChecked(value)" ng-class={\'disabled\':disabled}>{{name}}</span>' +
                '</div>',
            link: function (scope, elem, attr) {
                scope.onChecked = function (value) {
                    if (scope.label != value && !scope.disabled) {
                        scope.label = value;
                    }
                    if (xueUtilLang.isFunction(scope.radioClick)) {
                        scope.radioClick();
                    }
                }
            }
        }
    }])
    /**
     * 无菜单权限页面显示
     */
    .directive('menuService', function () {
        return {
            restrict: 'A',
            scope: {
                menuService: "="
            },
            template: '<div class="menu-service-container">' +
                '<p>{{menuService.text}}</p>' +
                '</div>'
        }
    })
    //鼠标右键事件指令
    .directive('ngRightClick', ['$parse', function ($parse) {
        return function (scope, element, attrs) {
            var fn = $parse(attrs.ngRightClick);
            element.bind('contextmenu', function (event) {
                scope.$apply(function () {
                    event.preventDefault();
                    fn(scope, {
                        $event: event
                    });
                });
            });
        };
    }])
    //插入HTML片段
    .directive('dyCompile', ['$compile', function ($compile) {
        return {
            replace: true,
            restrict: 'EA',
            link: function (scope, elm, iAttrs) {
                var DUMMY_SCOPE = {
                        $destroy: angular.noop
                    },
                    root = elm,
                    childScope,
                    destroyChildScope = function () {
                        (childScope || DUMMY_SCOPE).$destroy();
                    };

                iAttrs.$observe("html", function (html) {
                    if (html) {
                        destroyChildScope();
                        childScope = scope.$new(false);
                        var content = $compile(html)(childScope);
                        root.replaceWith(content);
                        root = content;
                    }

                    scope.$on("$destroy", destroyChildScope);
                });
            }
        };
    }])
    // ng-model for contenteditable
    .directive('contenteditable', function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                element.bind('keyup', function () {
                    scope.$apply(function () {
                        var html = element.html();
                        ctrl.$setViewValue(html);
                    });
                });
            }
        }
    })
    //鼠标滚动事件（当滚动到底部时触发）
    .directive('scrollBottom', function () {
        return function (scope, element, attrs) {
            // 内层DIV的滚动加载
            var raw = element[0];
            element.bind('scroll', function () {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                    scope.$apply(attrs.scrollBottom);
                }
            });
        };
    })
    //图片懒加载
    .directive('lazyLoadImg', ['$timeout', function ($timeout) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var imgPrefix = attrs.imgPrefix ? attrs.imgPrefix : 'constant_imagestore_url';
                if (scope.$last == true) {
                    //获取滚动父元素
                    var container = element.parent();
                    //获取父元素下的图片容器（用来计算位置）
                    var cardList = Array.prototype.slice.call(container.children(".card"));
                    //获取父元素下需要懒加载的图片
                    var imgsList = Array.prototype.slice.call(container.find(".lazyImg"));
                    //下一次开始检查图片的位置
                    var lastIndex = 0;
                    //页面首屏渲染，动态数据渲染有延时，这里使用timeout
                    $timeout(function () {
                        imageLoad(imgsList, cardList, container, lastIndex);
                    });
                    //监听父元素滚动事件
                    container.bind('scroll', function () {
                        //节流函数
                        var canRun = true;
                        return function () {
                            if (!canRun) {
                                return;
                            }
                            canRun = false;
                            //500毫秒加载一次
                            $timeout(function () {
                                imageLoad(imgsList, cardList, container, lastIndex);
                                canRun = true;
                            }, 500);
                        };
                    });
                }

                function imageLoad(imgs, cards, container, lastIndex) {
                    if (imgs.length < 1) {
                        return;
                    }
                    for (var i = lastIndex; i < imgs.length; i++) {
                        if (cards[i].offsetTop < container[0].clientHeight + container[0].scrollTop) {
                            if (imgs[i].getAttribute("lazy-src")) {
                                imgs[i].src = imgPrefix + imgs[i].getAttribute("lazy-src");
                            }
                            lastIndex = i + 1;
                        }
                    }
                }
            }
        }
    }])
    //$watch删除非数字字符
    .directive("xueFilterNumber", function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, ele, attrs, ngModelCtrl) {
                //监听值变化
                ngModelCtrl.$viewChangeListeners.push(function () {
                    //获取对象中的某个属性path
                    var path = attrs.xueFilterNumber;
                    var value = ngModelCtrl.$viewValue.replace(/[^\d]/g, '');
                    // new Function('scope', 'path', 'value', 'scope.' + path + '=value')(scope, path, value);
                });
            }
        }
    })
    // 重写title指令
    .directive('title', ['$timeout', function ($timeout) {
        return {
            restrict: "A",
            link: function (scope, ele, attrs) {
                scope.oldTitle = null;
                ele.bind("mouseenter mouseleave click mousewheel", function (e) {
                    var type = e.type,
                        self = this;
                    if (type == 'mouseenter') {
                        $('body').find("#common-title-tip").remove();
                        var title = scope.oldTitle = self.title;
                        self.title = '';
                        if (title && title.length > 0) {
                            // 校验table data-ng-bind-html生成的title
                            if (self.children.length && self.children[0].title && self.parentNode.nodeName == 'TR') {
                                title = scope.oldTitle = self.children[0].title;
                                self.children[0].title = '';
                            }
                            var showEle = $('<div></div>', {
                                text: title,
                                id: 'common-title-tip'
                            });
                            showEle.hide();
                            showEle.appendTo('body');
                            $timeout(function () {
                                showEle.show();
                                chekPosition(e);
                            }, 500)
                        }
                    }
                    if (type == 'mouseleave') {
                        $('body').find("#common-title-tip").remove();
                        if (scope.oldTitle) {
                            self.title = scope.oldTitle;
                            scope.oldTitle = null;
                        }
                    }
                    if (type == 'click' || type == 'mousewheel') {
                        $('body').find("#common-title-tip").remove();
                    }
                })

                // 判断title位置
                function chekPosition(e) {
                    var panelEle = $('#common-title-tip');
                    var panelWidth = panelEle.outerWidth(), //提示内容宽度
                        panelHeight = panelEle.outerHeight(), //提示内容高度
                        targetHeight = $(ele).outerHeight(), //  hover元素高度
                        // targetWidth = $(ele).width(),// hover元素宽度
                        finalLeft = $(ele).offset().left + e.offsetX,
                        finalTop = $(ele).offset().top + targetHeight;
                    // 超出右边界
                    if (finalLeft + panelWidth > document.body.scrollWidth) {
                        finalLeft = document.body.scrollWidth - panelWidth;
                    }
                    // 超出下边界
                    if (finalTop + panelHeight > document.body.scrollHeight) {
                        finalTop = document.body.scrollHeight - panelHeight;
                    }
                    panelEle.css({
                        'top': finalTop,
                        'left': finalLeft
                    })
                }
            }
        }
    }]);