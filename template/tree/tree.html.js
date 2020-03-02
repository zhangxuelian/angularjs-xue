angular.module("xue/template/tree/tree.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tree/tree.html",
    "<div class=\"xui-tree-wrap\" ng-class=\"{'support-search':treeConfig.search}\">\n" +
    "    <div class=\"tree-search\" ng-if=\"treeConfig.search\">\n" +
    "        <input class=\"tree-ipt\"\n" +
    "            type=\"text\"\n" +
    "            ng-model=\"treeCtrl.searchText\"\n" +
    "            ng-change=\"treeCtrl.filterNode(treeConfig.data)\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <ul class=\"tree-list\">\n" +
    "        <li id=\"{{ 'node_' + item[treeConfig.uniqueId] }}\"\n" +
    "            class=\"tree-item {{ 'level' + item.depth }}\"\n" +
    "            ng-include=\"'treeTemp'\"\n" +
    "            ng-if=\"!item.hideNode\"\n" +
    "            ng-class=\"{'leaf': item.isLeaf, 'show-line': treeConfig.showLine}\"\n" +
    "            ng-repeat=\"item in treeConfig.data\">\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <script id=\"treeTemp\" type=\"text/ng-template\">\n" +
    "        <div class=\"tree-row\"\n" +
    "            ng-click=\"treeCtrl.clickNode(item, $event)\"\n" +
    "            ng-dblclick=\"treeCtrl.dblClickNode(item, $event)\">\n" +
    "                <span class=\"expand-icon node-align xui-icon\"\n" +
    "                    ng-click=\"treeCtrl.expandNode(item, $event)\"\n" +
    "                    ng-class=\"{'expanded': item.expanded, 'xui-icon-md-arrow-dropright': !item.isLeaf}\">\n" +
    "                </span>\n" +
    "                <span class=\"check-icon node-align\"\n" +
    "                    ng-if=\"treeConfig.showCheckbox && !item.chkDisabled\"\n" +
    "                    ng-click=\"treeCtrl.changeNode(item, $event)\">\n" +
    "                        <xue-multi-checkbox multi-type=\"item.checked\" ng-disabled=\"item.disabled\"></xue-multi-checkbox>\n" +
    "                </span>\n" +
    "                <span class=\"node-icon node-align\" ng-show=\"treeConfig.showIcon\">\n" +
    "                    <i ng-if=\"item.iconClass\" class=\"{{ item.iconClass }}\"></i>\n" +
    "                    <i ng-if=\"!item.iconClass && treeConfig.icon.commonIconClass\" class=\"{{ treeConfig.icon.commonIconClass }}\"></i>\n" +
    "                    <i ng-if=\"!item.iconClass && !treeConfig.icon.commonIconClass\" ng-class=\"{true: treeConfig.icon.parentIconClass, false: treeConfig.icon.leafIconClass}[!item.isLeaf]\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"node-title node-align\"\n" +
    "                    title=\"{{ item[treeConfig.nodeName] }}\"\n" +
    "                    ng-class=\"{'active': treeCtrl.currentSelectedNode === item[treeConfig.uniqueId]}\">\n" +
    "                        {{ item[treeConfig.nodeName] }}\n" +
    "                </span>\n" +
    "                <span class=\"loading-icon node-align xui-icon xui-icon-ios-loading\" ng-show=\"item.loading\"></span>\n" +
    "        </div>\n" +
    "        <ul class=\"tree-list\" ng-if=\"item.expanded\" ng-if=\"!item.isLeaf\">\n" +
    "            <li id=\"{{ 'node_' + item[treeConfig.uniqueId] }}\"\n" +
    "                class=\"tree-item {{ 'level' + item.depth }}\" \n" +
    "                ng-include=\"'treeTemp'\"\n" +
    "                ng-if=\"!item.hideNode\"\n" +
    "                ng-class=\"{'leaf': item.isLeaf, 'show-line': treeConfig.showLine}\"\n" +
    "                ng-repeat=\"item in item[treeConfig.childName]\">\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </script>\n" +
    "</div>");
}]);
