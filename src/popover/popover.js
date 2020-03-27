angular.module('xue.popover', [])
    .directive('xuePopover', ['$timeout', function ($timeout) {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            controller: 'xuePopoverCtrl',
            scope: {
                trigger: '='
            },
            template: "<div class=\"xui-popover-wrap\">\n" +
                "    <div ng-transclude class=\"popover-trigger-ele {{popoverId}}\"></div>\n" +
                "</div>\n",
            link: function (scope, ele, attrs, ctrl) {
                var popoverCtrl = scope.popoverCtrl = {
                    init: function () {
                        scope.popoverId = ctrl.id;
                        $timeout(function () {
                            var trigger = scope.trigger || 'hover';
                            var triggerEle = $(ele).find('.' + scope.popoverId);
                            switch (trigger) {
                                case 'hover':
                                    triggerEle.bind('mouseenter', popoverCtrl.ev.mouseenter);
                                    triggerEle.bind('mouseleave', popoverCtrl.ev.mouseleave);
                                    var popEle = $('#' + scope.popoverId);
                                    popEle.bind('mouseenter', popoverCtrl.ev.mouseenter1);
                                    popEle.bind('mouseleave', popoverCtrl.ev.mouseleave1);
                                    break;
                                case 'click':
                                    triggerEle.bind('click', popoverCtrl.ev.click);
                                    break;
                                case 'focus':
                                    triggerEle.bind('mousedown', popoverCtrl.ev.mousedown);
                                    triggerEle.bind('mouseup', popoverCtrl.ev.mouseup);
                                    break;
                            }
                        }, 300)
                    },
                    showPanel: false,
                    ev: {
                        mouseenter: function (e) {
                            popoverCtrl.show(e);
                        },
                        mouseenter1: function () {
                            popoverCtrl.showPanel = true;
                            var popEle = $('#' + scope.popoverId);
                            popEle.show();
                        },
                        mouseleave1: function () {
                            popoverCtrl.showPanel = false;
                            popoverCtrl.ev.mouseleave();

                        },
                        mouseleave: function () {
                            var popEle = $('#' + scope.popoverId);
                            if (!popEle.is(':hidden') && !popEle.showPanel) {
                                // $timeout(function(){
                                    popEle.hide();
                                // },200)
                            }
                        },
                        click: function (e) {
                            var popEle = $('#' + scope.popoverId);
                            if (popEle.is(':hidden')) {
                                popoverCtrl.show(e);
                            } else {
                                popEle.fadeOut(300);
                            }
                        },
                        mousedown: function (e) {
                            var popEle = $('#' + scope.popoverId);
                            if (popEle.is(':hidden')) {
                                popoverCtrl.show(e);
                            }
                        },
                        mouseup: function (e) {
                            var popEle = $('#' + scope.popoverId);
                            popEle.hide();
                        }
                    },
                    show: function (e) {
                        var popEle = $('#' + scope.popoverId);
                        var top = $(e.target).offset().top,
                            left = $(e.target).offset().left,
                            height = $(e.target).outerHeight();
                        var eleHeight = popEle.height(),
                            screenHeight = $('body').height();
                        var offsetTop = top + height;
                        if ((screenHeight - offsetTop) < eleHeight && offsetTop > eleHeight) {
                            popEle.css({
                                'top': top - eleHeight - 2 + 'px',
                                'left': left + 'px'
                            });
                        } else {
                            popEle.css({
                                'top': offsetTop + 'px',
                                'left': left + 'px'
                            });
                        }
                        $('body').append(popEle);
                        popEle.fadeIn();
                    }
                }
                popoverCtrl.init();
                scope.$on('$destroy', function () {
                    $("#" + scope.popoverId).remove();
                });
            }
        }

    }])
    .controller('xuePopoverCtrl', ['$scope', function ($scope) {
        var ctrl = this;
        ctrl.id = 'xuePopover_' + new Date().getTime() + Math.round(Math.random() * 10000);

    }])
    .directive('xuePopoverContent', ['$timeout', function ($timeout) {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            require: '^xuePopover',
            scope: {
                header: '=',
                content:'=',
                notriangle:'='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/popover/popover.html";
            },
            link: function (scope, ele, attrs, ctrl) {
                scope.popoverId = ctrl.id;
            }
        }
    }])