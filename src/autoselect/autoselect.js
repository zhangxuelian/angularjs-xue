/**
 * 可更改内容的下拉选择框（仅限取明词，不适用取词选对象）
 */
angular.module('xue.autoselect', ['xue.util.lang'])
    .directive('xueAutoselect', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                selectConfig: '=',
                ngDisabled: '=',
                ngVal: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/autoselect/autoselect.html";
            },
            link: function (scope, ele, attrs) {
                var selectCtrl = scope.selectCtrl = {
                    selectClass: "",
                    iptStyle: {},
                    contentStyle: {},
                    defaultConfig: {
                        data: [],
                        height: '28px', //输入框高度
                        panelHeight: 'auto', //面板高度
                        panelWidth: '180px', //面板以及输入框宽度
                        showLimit: 50, //匹配前n条记录
                        selectCallback: function () {}
                    },
                    watch: {
                        init: function () {
                            var self = this;
                            $("body")[0].addEventListener("click", self.clickOtherArea);
                        },
                        clickOtherArea: function (e) {
                            if ($(e.target).attr("class") != "xui-autoselect-wrap" && $(e.target).parents(".xui-autoselect-wrap").length == 0 &&
                                $(e.target).attr("id") != scope.selectConfig.id && $(e.target).parents("#" + scope.selectConfig.id).length == 0) {
                                selectCtrl.hidePanel();
                            }
                        },
                        focus: function (e) {
                            var parent = selectCtrl;
                            $(".auto-select-content").hide();
                            parent.showPanel(e);
                        },
                        destroy: function () {
                            var self = this;
                            $("body")[0].removeEventListener("click", self.clickOtherArea);
                        }
                    },
                    selectItem: function (item) {
                        var flag = true;
                        if (xueUtilLang.isFunction(scope.selectConfig.selectCallback)) {
                            var ret = scope.selectConfig.selectCallback(item);
                            if (typeof (ret) != "undefined" && !ret) {
                                flag = false;
                            }
                        }
                        if (flag) {
                            scope.ngVal = item;
                            selectCtrl.hidePanel();
                        }
                    },
                    showPanel: function (e) {
                        var panelEle = $('#' + scope.selectConfig.id);
                        $('body').append(panelEle);
                        var top = $(e.target).offset().top,
                            left = $(e.target).offset().left,
                            height = $(e.target).height();
                        var eleHeight = panelEle.height(),
                            screenHeight = $('body').height();
                        var offsetTop = top + height + 2;
                        if ((screenHeight - offsetTop) < eleHeight && offsetTop > eleHeight) {
                            panelEle.css({
                                'top': top - eleHeight - 2 + 'px',
                                'left': left + 'px'
                            });
                        } else {
                            panelEle.css({
                                'top': offsetTop + 'px',
                                'left': left + 'px'
                            });
                        }
                        panelEle.show();
                    },
                    hidePanel: function () {
                        var panelEle = $('#' + scope.selectConfig.id);
                        if (panelEle.is(":hidden")) {
                            return;
                        }
                        panelEle.hide();
                    },
                    init: function () {
                        var self = this;
                        scope.selectConfig = angular.extend(self.defaultConfig, scope.selectConfig);

                        scope.selectConfig.id = new Date().getTime();

                        self.selectClass = attrs.selectClass;
                        self.contentStyle = {
                            width: scope.selectConfig.panelWidth,
                            height: scope.selectConfig.panelHeight
                        };
                        self.iptStyle = {
                            width: scope.selectConfig.panelWidth,
                            height: scope.selectConfig.height
                        }
                        self.watch.init();
                    }
                }
                selectCtrl.init();

                scope.$on("$destroy", function () {
                    selectCtrl.watch.destroy();
                    $('#' + scope.selectConfig.id).remove();
                });
            }
        }
    }])