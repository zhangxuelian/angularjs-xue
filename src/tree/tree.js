angular.module('xue.tree', ['xue.util.lang', 'xue.util.array'])
    .directive('xueTree',['xueUtilLang', 'xueUtilArray', '$timeout', '$templateCache', function (xueUtilLang, xueUtilArray, $timeout, $templateCache){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                treeConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tree/tree.html'
            },
            link: function(scope,ele,attrs) {
                /**
                 * 树节点属性
                 * @param {Object} node 树节点对象
                 * @param {String} node[scope.treeConfig.nodeName] 名称
                 * @param {Boolean} node.expanded 是否展开节点 false
                 * @param {Boolean} node.disabled 禁止选中 false
                 * @param {Boolean} node.selected 节点是否选中 false
                 * @param {Boolean} node.checked 节点是否勾选 false
                 * @param {Boolean} node.chkDisabled 节点复选框是否禁用 false
                 * @param {String} node.iconClass 节点图标
                 * @param {Array} node[scope.treeConfig.childName] 子节点列表
                 */
                var treeCtrl = scope.treeCtrl = {
                    defaultConfig: {
                        data: [], // 树列表数据
                        dataMap: {}, // 树列表索引
                        uniqueId: 'id', // 唯一标识字段名
                        nodeName: 'name', // 节点标题字段名
                        childName: 'children', // 子节点列表字段名
                        showIcon: false, // 是否展示图标 false
                        icon: {
                            // 当showIcon为true
                            // 1.如果子节点设置了iconClass,则优先展示iconClass的样式,如果没有：
                            // 2.如果设置了commonIconClass,则优先展示commonIconClass, 如果没有：
                            // 3.按是否有子节点来划分节点图标
                            commonIconClass: '', // 所有节点统一图标
                            parentIconClass: '', // 有子节点的节点图标 className
                            leafIconClass: '' // 无节点的节点图标 className
                        },
                        search: false, // 是否支持搜索 false
                        showCheckbox: false, // 是否展示复选框 false
                        checkOnClick: true, // 在点击时同时勾选/取消勾选节点 showCheckbox为true生效
                        checkNodes: [], // 勾选的节点数组
                        lazy: false, // 是否懒加载子节点数据 fasle
                        expandAll: false, // 是否展开所有节点 false
                        expandOnClick: false, // 是否在选中树节点时展开子列表 true
                        accordion: false, // 是否手风琴模式 false
                        currentNode: '', // 定位选中指定节点
                        showLine: true, // 是否展示连接线
                        clickNode: function(){}, // 单击树节点时回调
                        checkNode: function(){}, // 勾选/取消勾选的事件回调
                        beforeClick: function(){}, // 单击树节点之前的事件回调
                        beforeCheck: function(){}, // 勾选、取消勾选树节点之前的事件回调
                        loadData: function(){}, // 加载子节点数据的方法，仅当 lazy 属性为true 时生效
                        completeTree: function(){} // 树节点构建完成时回调
                    },
                    // 初始化
                    init: function() {
                        var self = this;
                        scope.treeConfig = angular.extend(self.defaultConfig, scope.treeConfig || {});
                    },
                    // 初始化树
                    initTreeData: function (data, depth, parentId) {
                        var self = this;
                        angular.forEach(data, function(item, index) {
                            // 树深度
                            item.depth = depth;
                            // 父节点索引
                            if (parentId != undefined) {
                                item.parent = parentId;
                            } else {
                                // 根节点默认展开
                                if (index == 0) {
                                    item.expanded = true; 
                                }
                            }
                            // 复选框初始化
                            if (self.defaultConfig.showCheckbox) {
                                if (item.checked) {
                                    item.checked = 1;
                                    scope.treeConfig.checkNodes.push(item);
                                    if (item[scope.treeConfig.childName] && item[scope.treeConfig.childName].length) {
                                        self.judgeHalfCheck(item, item);
                                    }
                                } else {
                                    item.checked = 0;
                                }
                            }
                            // 全部展开
                            if (scope.treeConfig.expandAll) {
                                item.expanded = true;
                            }
                            // 树节点索引
                            scope.treeConfig.dataMap[item[scope.treeConfig.uniqueId]] = item;
                            // 子节点递归
                            if (item[scope.treeConfig.childName] && item[scope.treeConfig.childName].length) {
                                self.initTreeData(item[scope.treeConfig.childName], depth + 1, item[scope.treeConfig.uniqueId]);
                            } else {
                                // 非懒加载时定义叶子节点
                                if (!scope.treeConfig.lazy) {
                                    item.isLeaf = true;
                                }
                            }
                        });
                        // 树构建完成回调
                        if (parentId == undefined) {
                            if (xueUtilLang.isFunction(scope.treeConfig.completeTree)) {
                                scope.treeConfig.completeTree();
                            }
                        }
                    },
                    // 搜索关键字
                    searchText: '',
                    // 搜索功能
                    filterNode: function(data) {
                        var self = this;
                        var hideLen = 0;
                        angular.forEach(data, function(item) {
                            if (!item.isLeaf) {
                                self.filterNode(item[scope.treeConfig.childName]);
                            } else {
                                // 节点未包含搜索关键字，当其兄弟节点全都未包含搜索关键字时，父节点才隐藏
                                if (item[scope.treeConfig.nodeName].indexOf(self.searchText) == -1) {
                                    item.hideNode = true;
                                    if (item.parent) {
                                        hideLen++;
                                        if (scope.treeConfig.dataMap[item.parent][scope.treeConfig.childName].length == hideLen) {
                                            scope.treeConfig.dataMap[item.parent].hideNode = true;
                                        }
                                    }
                                } else {
                                // 节点包含搜索关键字，其父节点也取消隐藏
                                    item.hideNode = false;
                                    if (item.parent) {
                                        scope.treeConfig.dataMap[item.parent].hideNode = false; 
                                    }
                                }
                            }
                        })
                    },
                    // 当前选中节点
                    currentSelectedNode: '',
                    // 单击延时
                    clickTimer: null,
                    // 单击行
                    clickNode: function (node, event, ifSearch) {
                        var self = this;
                        // 取消上次延时未执行的方法
                        $timeout.cancel(self.clickTimer);
                        //执行延时
                        self.clickTimer = $timeout(function() {
                            if (node.disabled) {
                                return;
                            }
                            // 搜索框点击节点定位
                            if (ifSearch) {
                                self.positionNode(node);
                                if (scope.treeConfig.showCheckbox) {
                                    self.changeNode(node);
                                }
                            }
                            // 点击节点前回调
                            if (xueUtilLang.isFunction(scope.treeConfig.beforeClick)) {
                                var clickFlag = scope.treeConfig.beforeClick(node);
                                if (clickFlag === false) {
                                    return;
                                }
                            }
                            // 勾选节点
                            if (scope.treeConfig.showCheckbox && scope.treeConfig.checkOnClick && !node.chkDisabled) {
                                self.changeNode(node, event);
                            }
                            // 展开节点
                            if (scope.treeConfig.expandOnClick) {
                                self.expandNode(node);
                            }
                            // 当前节点赋值
                            self.currentSelectedNode = node[scope.treeConfig.uniqueId];
                            // 点击节点完成回调
                            if (xueUtilLang.isFunction(scope.treeConfig.clickNode)) {
                                scope.treeConfig.clickNode(node);
                            }
                            if (event) {
                                event.stopPropagation();
                            }
                        }, 300);
                    },
                    // 双击行
                    dblClickNode: function(node, event) {
                        var self = this;
                        $timeout.cancel(self.clickTimer);
                        self.expandNode(node, event);
                    },
                    // 展开节点
                    expandNode: function (node, event) {
                        var self = this;
                        if (node.isLeaf) {
                            return;
                        }
                        node.expanded = !node.expanded;
                        // 手风琴模式
                        if (node.expanded && scope.treeConfig.accordion) {
                            self.collapseNode(node);
                        }
                        // 懒加载子节点数据
                        if (scope.treeConfig.lazy && xueUtilLang.isFunction(scope.treeConfig.loadData) 
                            && !node[scope.treeConfig.childName]) {
                            self.loadData(node);
                        }
                        if (event) {
                            event.stopPropagation();
                        }
                    },
                    // 勾选/取消勾选节点
                    changeNode: function (node, event, parentCheck) {
                        var self = this;
                        // 勾选节点前回调
                        if (xueUtilLang.isFunction(scope.treeConfig.beforeCheck)) {
                            var checkFlag = scope.treeConfig.beforeCheck(node);
                            if (checkFlag === false) {
                                return;
                            }
                        }
                        // 父节点取消选中 子节点也取消
                        if (parentCheck == 0) {
                        node.checked = 0; 
                        } else {
                            if (node.checked == 0) {
                                node.checked = 1;
                            } else {
                                node.checked = 0;
                            }
                        }
                        // 勾选列表赋值
                        var checkIndex = xueUtilArray.findObjIndex(scope.treeConfig.checkNodes, scope.treeConfig.uniqueId, node[scope.treeConfig.uniqueId]);
                        if (node.checked == 1 && checkIndex == -1) {
                            scope.treeConfig.checkNodes.push(node);
                        } else if (node.checked == 0 && checkIndex != -1) {
                            scope.treeConfig.checkNodes.splice(checkIndex, 1);
                        }
                        // 更改子节点状态
                        if (node[scope.treeConfig.childName]) {
                            self.checkChildren(node[scope.treeConfig.childName], node.checked);
                        }
                        // 更改父节点状态
                        if (node.parent && parentCheck == undefined) {
                            self.checkParent(node.parent);
                        }
                        // 勾选完成回调
                        if (xueUtilLang.isFunction(scope.treeConfig.checkNode)) {
                            scope.treeConfig.checkNode(node);
                        }
                        if (event) {
                            event.stopPropagation();
                        }
                    },
                    // 勾选/取消勾选父节点时 全选/取消全选子节点
                    checkChildren: function(nodes, parentCheck) {
                        var self = this;
                        angular.forEach(nodes, function(item) {
                            self.changeNode(item, '', parentCheck);
                        })
                    },
                    // 勾选/取消勾选子节点 判断是否勾选/取消勾选父节点
                    checkParent: function(parentId) {
                        var self = this;
                        var parentNode = scope.treeConfig.dataMap[parentId];
                        // 子节点全勾选数量
                        var totalCheck = 0;
                        // 子节点半勾选数量
                        var haveCheck = 0;
                        angular.forEach(parentNode[scope.treeConfig.childName], function(item) {
                            if (item.checked == 1) {
                                totalCheck++;
                            } else if (item.checked == 2) {
                                haveCheck++;
                            }
                        })
                        // 全勾选的子节点数量等于全部子节点 父节点也全勾选
                        if (totalCheck == parentNode[scope.treeConfig.childName].length) {
                            parentNode.checked = 1;
                            scope.treeConfig.checkNodes.push(parentNode);
                        } else if (totalCheck > 0) {
                            // 存在勾选的子节点  则父节点半勾选
                            parentNode.checked = 2;
                            scope.treeConfig.checkNodes.push(parentNode);
                        } else if (totalCheck == 0) {
                            if (haveCheck > 0) {
                                parentNode.checked = 2;
                                scope.treeConfig.checkNodes.push(parentNode);
                            } else {
                                // 不存在勾选的子节点 父节点不勾选
                                parentNode.checked = 0;
                            }
                        }
                        // 递归父节点
                        if (parentNode.parent) {
                            self.checkParent(parentNode.parent);
                        }
                    },
                    offsetTop: 0,
                    // 搜索时定位选中指定节点
                    positionNode: function(node, ifParent) {
                        var self = this;
                        // 展开父节点
                        if (node.parent) {
                            var parant = scope.treeConfig.dataMap[node.parent];
                            parant.expanded = true;
                            // 手风琴模式
                            if (scope.treeConfig.accordion) {
                                self.collapseNode(node);
                            }
                            self.positionNode(parant, 'parent');
                            $timeout(function() {
                                self.offsetTop += document.getElementById('node_' + parant[scope.treeConfig.uniqueId]).offsetTop;
                            })
                        }
                        // 定位选中 选中节点滚动到列表中间
                        if (!ifParent) {
                            self.currentSelectedNode = node[scope.treeConfig.uniqueId];
                            $timeout(function() {
                                var needScroll = document.getElementById('node_' + self.currentSelectedNode).offsetTop + self.offsetTop - (ele[0].offsetHeight / 2);
                                if (needScroll > 0) {
                                    ele[0].scrollTop = needScroll;
                                } else {
                                    ele[0].scrollTop = 0;
                                }
                                self.offsetTop = 0;
                            })
                        }
                    },
                    // 手风琴模式收起其兄弟节点
                    collapseNode: function (node) {
                        var nodeList;
                        if (node.parent) {
                            nodeList = scope.treeConfig.dataMap[node.parent][scope.treeConfig.childName];
                        } else {
                            // 根节点
                            nodeList = scope.treeConfig.data;
                        }
                        if (nodeList.length > 1) {
                            angular.forEach(nodeList, function(item) {
                                if (item[scope.treeConfig.uniqueId] != node[scope.treeConfig.uniqueId]) {
                                    item.expanded = false;
                                }
                            })
                        }
                    },
                    // 懒加载子节点数据
                    loadData: function(node) {
                        node.loading = true;
                        scope.treeConfig.loadData(node, function(data) {
                            // 业务数据回调
                            if (data && data.length) {
                                self.initTreeData(data, node.depth + 1, node[scope.treeConfig.uniqueId]);
                                node[scope.treeConfig.childName] = data;
                            } else {
                                node.isLeaf = true;
                            }
                            node.loading = false;
                        })
                    },
                    // 判断当前勾选节点是选中还是半选中
                    judgeHalfCheck: function(nodes, parentNode) {
                        var self = this;
                        angular.forEach(nodes[scope.treeConfig.childName], function(item) {
                            if (!item.checked) {
                                parentNode.checked = 2;
                            } else if (item[scope.treeConfig.childName] && item[scope.treeConfig.childName].length) { 
                                self.judgeHalfCheck(item, parentNode);
                            }
                        })
                    }
                }
                treeCtrl.init();

                //格式化
                var unbindWatch = scope.$watch('treeConfig.data',function(newValue,oldValue){
                    if (newValue.length) {
                        treeCtrl.initTreeData(newValue, 1);
                    }
                });
                var unbindWatch1 = scope.$watch('treeConfig.currentNode',function(newValue,oldValue){
                    if (newValue) {
                        treeCtrl.positionNode(scope.treeConfig.dataMap[newValue]);
                    } else {
                        treeCtrl.currentSelectedNode = '';
                    }
                });
                scope.$on("$destroy", function() {
                    unbindWatch();
                    unbindWatch1();
                    // $templateCache.remove('xue/template/tree/tree.html');
                })
            }
        }
    }])