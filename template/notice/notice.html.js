angular.module("xue/template/notice/notice.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/notice/notice.html",
    "<div class=\"xui-notice-container\" ng-mouseenter=\"gxNoticeCtrl.mouseenter()\" ng-mouseleave=\"gxNoticeCtrl.mouseleave()\"> \n" +
    "    <div class=\"xui-notice-icon\" title=\"{{noticeConfig.title || '消息提醒'}}\">\n" +
    "        <i class=\"xui-icon xui-icon-md-notifications-outline notice-icon\"></i>\n" +
    "        <!-- <img class=\"notice-icon\" src=\"\" alt=\"\" onerror=\"javascript:this.src='common/directives/images/gx_notice/warn.png'\"> -->\n" +
    "        <span class=\"notice-count\" title=\"{{noticeConfig.count}}\" ng-show=\"noticeConfig.count>0\">{{noticeConfig.count>99?'99+':noticeConfig.count}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"xui-notice-content-wrap\" id=\"{{noticeConfig.modalId}}\" ng-mouseenter=\"gxNoticeCtrl.mouseenter()\" ng-mouseleave=\"gxNoticeCtrl.mouseleave()\">\n" +
    "        <div class=\"xui-notice-content\" >\n" +
    "            <div class=\"notice-tab\">\n" +
    "                <div class=\"tab-item\" ng-repeat=\"item in noticeConfig.tabItem\" ng-class=\"{true:'active'}[noticeConfig.selectTabId == item.id]\" \n" +
    "                ng-click=\"gxNoticeCtrl.tabItemClick(item)\">\n" +
    "                    <span class=\"item-name\">{{item.name}}\n" +
    "                        <span class=\"item-count\" ng-class=\"{'circle':'circle','number':''}[noticeConfig.tabMark]\" ng-show=\"item.count>0\" title=\"{{item.count}}\">\n" +
    "                            {{noticeConfig.tabMark == 'number' ? (item.count>99?'99+':item.count) : ''}}\n" +
    "                        </span>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"notice-content\" scroll-bottom=\"noticeConfig.loadNextPage()\">\n" +
    "                <ul>\n" +
    "                    <li class=\"content-wrap\" ng-if=\"noticeConfig.noticeList.length\" ng-click=\"noticeConfig.itemClick(item)\"\n" +
    "                        ng-repeat=\"item in noticeConfig.noticeList | limitTo : noticeConfig.listMaxLen\">\n" +
    "                        <span class=\"content\" title=\"{{item[noticeConfig.formatField.completeContent] || item.completeContent || item[noticeConfig.formatField.content] || item.content}}\">\n" +
    "                            【<b ng-if=\"noticeConfig.formatField.contentTitle\" class=\"content-title\" title=\"{{item[noticeConfig.formatField.contentTitle] || item.formatField.contentTitle}}\">\n" +
    "                                {{item[noticeConfig.formatField.contentTitle] || item.formatField.contentTitle}}</b>】\n" +
    "                            {{item[noticeConfig.formatField.content] || item.content}}\n" +
    "                        </span>\n" +
    "                        <span class=\"time\">{{item[noticeConfig.formatField.time] || item.time}}</span>\n" +
    "                    </li>\n" +
    "                    <li class=\"content-type-wrap\" ng-if=\"noticeConfig.noticeTypeList.length\" ng-click=\"noticeConfig.itemClick(item)\"\n" +
    "                        ng-repeat=\"item in noticeConfig.noticeTypeList | limitTo : noticeConfig.listMaxLen\">\n" +
    "                        <span class=\"content-type\" title=\"{{item[noticeConfig.formatField.contentType] || item.contentType}}\">\n" +
    "                            <!-- <b ng-if=\"noticeConfig.formatField.contentTitle\">【{{item[noticeConfig.formatField.contentTitle] || item.formatField.contentTitle}}】</b> -->\n" +
    "                            {{item[noticeConfig.formatField.contentType] || item.contentType}}\n" +
    "                        </span>\n" +
    "                        <span class=\"count\">\n" +
    "                            <i>{{(item[noticeConfig.formatField.count] || item.count)>99?'99+':(item[noticeConfig.formatField.count] || item.count)}}</i>\n" +
    "                        </span>\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"!noticeConfig.noticeList.length && !noticeConfig.noticeTypeList.length\" class=\"no-data-tip\">\n" +
    "                        {{noticeConfig.emptyNoticeTip}}\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"noticeConfig.noticeList.length\">\n" +
    "                        <p class=\"baseline\" ng-if=\"noticeConfig.tabItem[noticeConfig.selectTabId].count <= 99\">没有更多数据了</p>   \n" +
    "                        <P class=\"baseline\" ng-if=\"noticeConfig.tabItem[noticeConfig.selectTabId].count > 99\">更多数据请点击右下角查看全部</P> \n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"notice-footer\" ng-if=\"noticeConfig.showFooter\">\n" +
    "                <div class=\"footer-item\" ng-repeat=\"item in noticeConfig.footerContent\" ng-show=\"!!item.show\" ng-click=\"item.click()\">{{item.name}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"triangle\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);
