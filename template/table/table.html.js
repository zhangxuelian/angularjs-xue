angular.module("xue/template/table/table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/table/table.html",
    "<div class=\"xui-table-wrap\" ng-class=\"{0:'',1:'show-pagination',2:'show-toolbar',3:'show-toolbar-pagination'}[layout]\">\n" +
    "    <div class=\"xui-table-header\" ng-if=\"tableConfig.toolbar.show\">\n" +
    "        <span class=\"table-title\">\n" +
    "            {{tableConfig.toolbar.title}}\n" +
    "        </span>\n" +
    "        <div class=\"btn-group toolbar-btn\">\n" +
    "            <button class=\"btn\" type=\"button\" has-permission=\"tool.permissionCode\" ng-click=\"tool.callback()\"\n" +
    "                ng-repeat=\"tool in tableConfig.toolbar.tools\">\n" +
    "                <i class=\"{{tool.icon}}\"></i>{{tool.text}}\n" +
    "            </button>\n" +
    "            <button class=\"btn\" type=\"button\" ng-if=\"tool.noPermission\" ng-click=\"tool.callback()\"\n" +
    "                ng-repeat=\"tool in tableConfig.toolbar.tools\">\n" +
    "                <i class=\"{{tool.icon}}\"></i>{{tool.text}}\n" +
    "            </button>\n" +
    "            <div class=\"tooltip-container\">\n" +
    "                <button class=\"btn\" type=\"button\" ng-if=\"tableConfig.showTableCol\" id=\"showTableCol1\"\n" +
    "                    ng-class=\"{'tooltip-btn':tableConfig.toolbar.tools.length}\">\n" +
    "                    <i class=\"xui-icon xui-icon-ios-eye-outline\"></i>显示选项\n" +
    "                </button>\n" +
    "                <div class=\"option-dialog\" ng-if=\"tableConfig.toolbar.show\" id=\"showTableCol2\">\n" +
    "                    <i class=\"arrow\"></i>\n" +
    "                    <div class=\"option-top\">\n" +
    "                        <span class=\"select-all\" ng-click=\"popup.selectAll()\">\n" +
    "                            <xue-checkbox ng-checked=\"tableConfig.selectAllColumn\"></xue-checkbox>\n" +
    "                            <label>全选</label>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"option-content\">\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"colunm in tableConfig.colunms\" ng-click=\"popup.singleSelect(colunm)\">\n" +
    "                                <xue-checkbox ng-checked=\"colunm.show\"></xue-checkbox>\n" +
    "                                <label>{{colunm.label}}</label>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"xui-table-content\" ng-class=\"{'th-border':tableConfig.drag}\">\n" +
    "        <table class=\"xui-table\" ng-class=\"{'xui-table-hover':tableConfig.tableHover}\">\n" +
    "            <tr>\n" +
    "                <th ng-if=\"tableConfig.checkbox\" class=\"table-checkbox\">\n" +
    "                    <xue-checkbox ng-checked=\"tableConfig.selectAll\" ng-click=\"tableCtrl.ev.selectAll()\"></xue-checkbox>\n" +
    "                </th>\n" +
    "                <th ng-if=\"!tableConfig.checkbox && tableConfig.radio\" class=\"table-checkbox\">\n" +
    "                </th>\n" +
    "                <th ng-if=\"tableConfig.showIndex\" style=\"min-width:30px\">{{tableConfig.indexTitle}}</th>\n" +
    "                <th ng-repeat=\"item in tableConfig.colunms\" ng-style=\"item.style\" ng-if=\"item.show\"\n" +
    "                    data-ng-bind-html=\"item.label | trusthtml:tableConfig.defaultNull\"\n" +
    "                    ng-click=\"tableCtrl.ev.order(item)\"\n" +
    "                    ng-class=\"{isActive : item.name == tableConfig.orderColumn, down : tableConfig.desc}\">\n" +
    "                </th>\n" +
    "                <th ng-repeat=\"optConfig in tableConfig.optConfig\" ng-style=\"optConfig.optStyle\">{{optConfig.optName}}\n" +
    "                </th>\n" +
    "                <th ng-repeat=\"optConfig in tableConfig.optConfigExt\" ng-style=\"optConfig.optStyle\">\n" +
    "                    {{optConfig.optName}}</th>\n" +
    "            </tr>\n" +
    "            <tr ng-repeat=\"row in tableConfig.rows | orderBy:tableConfig.orderColumn:tableConfig.desc track by $index\"\n" +
    "                ng-class-even=\"'even'\" ng-class-odd=\"'odd'\" ng-click=\"tableCtrl.ev.rowClick(row,$event)\"\n" +
    "                ng-dblclick=\"tableCtrl.ev.rowDbclick(row,$event)\" ng-class=\"{true:'selected'}[!!row.$checked]\">\n" +
    "                <td ng-if=\"tableConfig.checkbox\" class=\"table-checkbox\">\n" +
    "                    <xue-checkbox ng-checked=\"row.$checked\"></xue-checkbox>\n" +
    "                </td>\n" +
    "                <td ng-if=\"!tableConfig.checkbox && tableConfig.radio\" class=\"table-checkbox\">\n" +
    "                    <xue-radio ng-checked=\"row.$checked\"></xue-radio>\n" +
    "                </td>\n" +
    "                <td ng-if=\"tableConfig.showIndex\">{{(tableConfig.page-1)*tableConfig.size+$index+1}}</td>\n" +
    "                <td ng-repeat=\"colunm in tableConfig.colunms\" ng-if=\"colunm.show\"\n" +
    "                    data-ng-bind-html=\"row[colunm.name] | trusthtml:tableConfig.defaultNull\"\n" +
    "                    ng-click=\"tableCtrl.ev.colClick(row,$event,colunm.click)\" title=\"{{row[colunm.name]}}\">\n" +
    "                </td>\n" +
    "                <td ng-repeat=\"optConfig in tableConfig.optConfig\" class=\"table-checkbox\" data-event=\"notChecked\">\n" +
    "                    <a has-permission=\"item.permissionCode\" ng-repeat=\"item in optConfig.optContent\"\n" +
    "                        ng-click=\"item.callback(row)\" class=\"{{item.className}}\" title=\"{{item.name}}\"><span\n" +
    "                            ng-if=\"item.showText\">{{item.name}}</span></a>\n" +
    "                    <a ng-if=\"!!item.noPermission\" ng-repeat=\"item in optConfig.optContent\"\n" +
    "                        ng-click=\"item.callback(row)\" class=\"{{item.className}}\" title=\"{{item.name}}\"><span\n" +
    "                            ng-if=\"item.showText\">{{item.name}}</span></a>\n" +
    "                </td>\n" +
    "                <td ng-repeat=\"optConfig in tableConfig.optConfigExt\" class=\"table-checkbox\" data-event=\"notChecked\">\n" +
    "                    <a ng-class=\"{false:'ope-hidden'}[!!row[item.id]]\" ng-repeat=\"item in optConfig.optContent\"\n" +
    "                        ng-click=\"!!row[item.id] ? item.callback(row):tableCtrl.ev.noPermission()\"\n" +
    "                        class=\"{{item.className ? item.className : row[item.id]}}\" title=\"{{item.name}}\"><span\n" +
    "                            ng-if=\"item.showText\">{{item.name}}</span></a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr ng-if=\"!tableConfig.rows || tableConfig.rows.length == 0\">\n" +
    "                <td colspan=\"{{tableCtrl.nodataColspan\n" +
    "                    + (tableConfig.optConfig.length || 0) \n" +
    "                    + (tableConfig.checkbox ? 1 : 0) \n" +
    "                    + (tableConfig.radio ? 1 : 0) \n" +
    "                    + (tableConfig.showIndex ? 1 : 0) \n" +
    "                    + (tableConfig.optConfigExt.length || 0) }}\">\n" +
    "                    {{tableConfig.noDataText}}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"xui-table-footer\" ng-if=\"tableConfig.pagination\">\n" +
    "        <div class=\"total-size\" ng-if=\"tableConfig.pagesize\">\n" +
    "            <div class=\"total\">总共<span>{{tableConfig.total}}</span>条记录</div>\n" +
    "            <div class=\"size\">每页显示\n" +
    "                <select ng-model=\"tableConfig.size\" ng-options=\"pageSize for pageSize in tableConfig.pageList\"></select>\n" +
    "                条\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <xue-pagination class=\"xui-pagination-mini\" total-items=\"tableConfig.total\" max-size=\"mv.maxSize\"\n" +
    "            ng-model=\"tableConfig.page\" items-per-page=\"tableConfig.size\" boundary-links=\"true\">\n" +
    "        </xue-pagination>\n" +
    "    </div>\n" +
    "</div>");
}]);
