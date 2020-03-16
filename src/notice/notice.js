angular.module('xue.notice', ['xue.util.lang'])
    .directive('xueNotice', ["xueUtilLang", "$timeout", function (xueUtilLang, $timeout) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                noticeConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/notice/notice.html";
            },
            link: function (scope, ele, attrs) {

                var gxNoticeCtrl = scope.gxNoticeCtrl = {
                    defaultConfig: {
                        modalId: null,
                        title: '', // 滑过显示标题
                        iconClassName: 'xui-icon-md-notifications-outline',// 图标
                        width: '366px', // 提示容器宽
                        height: '266px', // 提示容器高
                        count: 0, // 总提示记录数，为0时不显示
                        selectTabId: 0,
                        tabItem: [{
                            id: 0,
                            name: '消息提醒',
                            count: 2
                        }, {
                            id: 1,
                            name: '系统通知',
                            count: 3
                        }],
                        tabMark: 'number', //number 数字 circle 圆点
                        // showNotice: true, // 显示提示内容
                        formatField: { // 字段名格式化
                            contentTitle: '',
                            content: 'content',
                            time: 'time',
                            completeContent: '',
                            contentType: 'contentType',
                            count: 'count'
                        },
                        listMaxLen: 10, // 消息列表最多显示数
                        noticeList: [], // 提示内容列表，对象：{content: '提示内容',time: '2019-08-20 17:13:55'}
                        showNoticeType: false, // 显示提示分类（与提示内容应互斥）
                        noticeTypeList: [], // 提示分类列表，对象：{contentType: '提示分类内容', count: 0}
                        emptyNoticeTip: '暂没有新消息', // 无消息提示语
                        showFooter: true, // 是否显示提示尾部操作
                        footerContent: [{ // 消息提醒尾部操作
                            name: '当前标记已读',
                            click: function () {}
                        }, {
                            name: '查看全部',
                            click: function () {}
                        }],
                        tabItemClick: function () {},
                        itemClick: function () {}, //列表项点击回调
                        loadNextPage: function () {}, //列表滚动到底部加载下一页回调函数
                        listHide: function () {}, //列表消失回调函数
                        listShow: function () {} //列表显示回调函数
                    },
                    tabItemClick: function (item) {
                        $('#' + scope.noticeConfig.modalId + ' .notice-content').scrollTop(0);
                        scope.noticeConfig.selectTabId = item.id;
                        if (xueUtilLang.isFunction(scope.noticeConfig.tabItemClick)) {
                            scope.noticeConfig.tabItemClick(item);
                        }
                    },
                    showPanel: false,
                    mouseenter: function () {
                        gxNoticeCtrl.showPanel = true;
                        var $target = $('#' + scope.noticeConfig.modalId);
                        var top = $(ele).offset().top,
                            left = $(ele).offset().left,
                            width = $(ele).width(),
                            height = $(ele).height(),
                            targetWidth = $target.outerWidth();
                        $target.css({
                            'top': top + height + 15 + 'px',
                            'left': left + width / 2 - targetWidth / 2 + 'px'
                        });
                        $('body').append($target);
                        if ($target.is(':hidden')) {
                            $target.fadeIn();
                            scope.noticeConfig.listShow();
                        }
                    },
                    mouseleave: function () {
                        gxNoticeCtrl.showPanel = false;
                        var $target = $('#' + scope.noticeConfig.modalId);
                        $timeout(function () {
                            if (!$target.is(':hidden') && !gxNoticeCtrl.showPanel) {
                                $target.fadeOut();
                                scope.noticeConfig.listHide();
                            }
                        }, 500);
                    },
                    init: function () {
                        var self = this;
                        scope.noticeConfig = angular.extend(self.defaultConfig, scope.noticeConfig);
                        scope.noticeConfig.modalId = 'gxNotice_' + new Date().getTime();
                        self.destroy();
                    },
                    destroy: function () {
                        scope.$on('$destroy', function () {
                            $("#" + scope.noticeConfig.modalId).remove();
                        });
                    }
                }

                gxNoticeCtrl.init();
            }
        }
    }])