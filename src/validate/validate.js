angular.module('xue.validate', ['xue.util.lang', 'xue.util.methods'])
    .directive('xueValidate', ['xueUtilLang', 'xueUtilMethods', "$timeout", "$interval", function (xueUtilLang, xueUtilMethods, $timeout, $interval) {
        return {
            restrict: "A",
            scope: {
                xueValidate: "="
            },
            link: function (scope, ele, attrs) {
                var xueValidateCtrl = scope.xueValidateCtrl = {
                    defaultConfig: {
                        required: true, // 是否必填,true：是；false：否
                        requiredTip: "不能为空", //必填的错误信息，默认为不能为空
                        regex: "", //匹配的正则,默认为空
                        errorTipPos: "bottom", //错误提示信息位置，bottom：下边；right：右边
                        errorTip: "", //错误提示信息
                        hasErrorTip: true, //是否显示错误信息
                        validType: "input", //校验元素的类型，input：输入框；select：下拉框；datepicker：日历组件；radio：单选组件；sign：签名、捺印    
                        hasModalTip: false, //是否弹窗展示错误信息
                        iconStyle: {}, // 图标的样式
                        msgStyle: {}, // 提示消息div样式
                        lblStyle: {}, // 提示消息label样式
                        parentStyle: {}, // 提示消息div父节点样式
                        equalTo: "", // 输入值必须和 #field 相同
                        equalToTip: "",// 不相等时的提示信息
                        unequalTo: "", // 输入值必须和 #field 不相同
                        unequalToTip: "", // 相等时的提示信息
                        maxlen: null, // 字符串最大的长度
                        maxlenTip: "", // 字符串超过最大的长度时的提示信息
                        minlen: null, // 字符串最小的长度
                        minlenTip: "", // 字符串超过最小的长度时的提示信息
                        judge: "", // 特殊的判断要求，idCard：身份证号；caseCode：涉案编号；dutyRule：排班规则
                        gxMsgId: "", // 消息提示元素唯一标识
                        hasFirstValid: true, // 用于validType为sign时，是否首次校验
                        execBlur: function (val) { // 元素执行失去焦点事件
                            return xueValidateCtrl.triggerBlur(val);
                        },
                        execFocus: function () { // 元素执行获取焦点事件
                            if (xueUtilLang.isFunction(ele.focus)) {
                                ele.focus();
                            }
                        },
                        execShowPanel: function () { // 主要是用于显示下拉组件还有日历组件的列表
                            $timeout(function () {
                                switch (scope.ValidateConfig.validType) {
                                    case "select":
                                        ele[0].previousElementSibling.children[0].children[1].style.display = "block";
                                        break;
                                    case "datepicker":
                                        ele[0].previousElementSibling.children[0].children[1].click();
                                        break;
                                    default:
                                        break;
                                }
                            });
                        },
                        execSuccess: function () {// 执行校验成功函数
                            xueValidateCtrl.handleValidateSuccess();
                        },
                        execError: function (tip) {// 执行校验失败函数
                            xueValidateCtrl.handleValidateError(tip);
                        }
                    },
                        /**
                     * 观察者
                     */
                    observe: {
                        observer: null, // 观察者实例
                        options: {
                            attributes: true, // 配置监听属性的改变
                            attributeFilter: ['style', 'class', 'src'] // 只监听style、class、src属性
                        },
                        /**
                         * 构造观察者实例
                         */
                        creatObserver: function () {
                            var self = this;
                            //Firefox和Chrome早期版本中带有前缀
                            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            if (!MutationObserver) {
                                throw new Error("浏览器不支持！");
                            }
                            // 创建观察者对象
                            self.observer = new MutationObserver(function(mutations) {
                                for (var i = 0, len = mutations.length; i < len; i++) {
                                    var mutation = mutations[i];
                                    if (mutation.type == "attributes") {
                                        var target = mutation.target;
                                        // 单选组件
                                        if (target.validType == "radio") {
                                            if (target.className.indexOf("active") != -1) {
                                                scope.ValidateConfig.execSuccess();
                                            }
                                            continue;
                                        }
                                        // 签名和捺印
                                        if (target.validType == "sign") {
                                            if (target.isFirst) {
                                                target.isFirst = false;
                                                break;
                                            }
                                            if (target.src.indexOf("no_sign") != -1 || target.src.indexOf("refuse_seal") != -1) {
                                                if (scope.ValidateConfig.required) {
                                                    scope.ValidateConfig.execError(scope.ValidateConfig.requiredTip);
                                                }
                                            } else {
                                                scope.ValidateConfig.execSuccess();
                                            }
                                            break;
                                        }
                                        // 下拉组件与日历组件
                                        if (target.style.display == "none" && target.oldDisplay == "block") {
                                            var ipt = null;
                                            if (target.validType == "select") {
                                                ipt = target.previousElementSibling;
                                            } else if (target.validType == "datepicker") {
                                                ipt = target.ipt;
                                            }
                                            scope.ValidateConfig.execBlur(ipt.value);
                                        } else {
                                            target.oldDisplay = target.style.display;
                                        }
                                    }
                                }
                            });
                        },
                        /**
                         * 传入目标节点和观察选项之后开始观察
                         * 
                         * @param {element} target 目标元素
                         */
                        execObserve: function (target) {
                            var self = this;
                            self.observer.observe(target, self.options);
                        },
                        /**
                         * 停止观察
                         */
                        stopObserve: function () {
                            var self = this;
                            if (self.observer) {
                                self.observer.disconnect();
                            }
                        }
                    },
                    /**
                     * 将style对象转换成cssText字符串形式
                     * 
                     * @param {Object} style 样式
                     */
                    getCssText: function (style) {
                        var cssText = "";
                        angular.forEach(style, function (value, key) {
                            cssText += (key + ": " + value + "; "); 
                        });
                        return cssText;
                    }, 
                    /**
                     * 正则验证
                     * 
                     * @param {Object} regex 正则表达式
                     * @param {string} tip   提示信息
                     * @param {string} str   校验的值
                     */
                    getBlur: function (regex, tip, str) {
                        var self = this;
                        var obj = ele[0];
                        var className = obj.className;
                        var strReg = !!str.match(regex);
                        if (str && !strReg) {
                            self.handleValidateError(tip);
                            return false;
                        } else if (str && strReg) {
                            self.handleValidateSuccess(true);
                        }
                        if (className.indexOf('require') == -1) {
                            if (!str) {
                                self.handleValidateSuccess();
                            }
                        }
                        return true;
                    },
                    /**
                     * 校验成功时的页面样式处理
                     * 
                     * @param {string} isAddSuccess 是否要添加校验成功的样式
                     */
                    handleValidateSuccess: function (isAddSuccess) {
                        var self = this;
                        if (scope.ValidateConfig.validType == "select" || 
                            scope.ValidateConfig.validType == "datepicker") {
                            self.changeEleStyle(true);
                        }
                        isAddSuccess = isAddSuccess || false;
                        var nextNode = $("#" + scope.ValidateConfig.gxMsgId)[0];
                        var nextNodeI = nextNode.children[0];
                        nextNode.classList.add("hide");
                        ele[0].classList.remove('gx-error-tip');
                        if (isAddSuccess && scope.ValidateConfig.errorTipPos != "bottom") {
                            nextNodeI.classList.remove('xui-icon-md-alert');
                            nextNodeI.classList.add("xui-icon-ios-checkmark-circle");
                            return;
                        }
                        nextNodeI.classList.remove('xui-icon-md-alert');
                    },
                    /**
                     * 校验失败时的页面样式处理
                     * 
                     * @param {string} tip 失败的提示
                     */
                    handleValidateError: function (tip) {
                        var self = this;
                        if (scope.ValidateConfig.validType == "select" || 
                            scope.ValidateConfig.validType == "datepicker") {
                            self.changeEleStyle(false);
                        }
                        var nextNode = $("#" + scope.ValidateConfig.gxMsgId)[0];
                        var nextNodeI = nextNode.children[0];
                        var nextNodeLabel = nextNode.children[1];
                        nextNode.classList.remove("hide");
                        nextNodeLabel.innerHTML = tip;
                        nextNodeLabel.title = tip;
                        ele[0].classList.add('gx-error-tip');
                        nextNodeI.classList.remove("xui-icon-ios-checkmark-circle");
                        nextNodeI.classList.add('xui-icon-md-alert');
                    },
                    /**
                     * 元素触发blur事件
                     */
                    triggerBlur: function (val) {
                        // 如果没有传值进来，则val会是一个对象
                        var newVal = (typeof val == "string" && val && val !== "NaN") ? $.trim(val) : $.trim(ele[0].value);
                        if (scope.ValidateConfig.required) {
                            if (!newVal) {
                                xueValidateCtrl.handleValidateError(scope.ValidateConfig.requiredTip);
                                return false;
                            } else {
                                xueValidateCtrl.handleValidateSuccess();
                            }
                        }
                        if (scope.ValidateConfig.equalTo && newVal != $(scope.ValidateConfig.equalTo).val()){
                            xueValidateCtrl.handleValidateError(scope.ValidateConfig.equalToTip);
                            return false;
                        } 
                        if (scope.ValidateConfig.unequalTo && newVal == $(scope.ValidateConfig.unequalTo).val()){
                            xueValidateCtrl.handleValidateError(scope.ValidateConfig.unequalToTip);
                            return false;
                        } 
                        if (scope.ValidateConfig.maxlen && newVal.length > scope.ValidateConfig.maxlen){
                            xueValidateCtrl.handleValidateError(scope.ValidateConfig.maxlenTip);
                            return false;
                        } 
                        if (scope.ValidateConfig.minlen && newVal.length < scope.ValidateConfig.minlen){
                            xueValidateCtrl.handleValidateError(scope.ValidateConfig.minlenTip);
                            return false;
                        } 
                        var regex = scope.ValidateConfig.regex;
                        var errorTip = scope.ValidateConfig.errorTip;
                        var retFlag = false;
                        //有特殊的判断要求
                        if (scope.ValidateConfig.judge) {
                            switch (scope.ValidateConfig.judge) {
                                case 'idCard':
                                    if (!newVal && !scope.ValidateConfig.required) {
                                        xueValidateCtrl.handleValidateSuccess();
                                        return true;
                                    }
                                    var ret = xueUtilMethods.checkIdCard(newVal);
                                    if (ret.status) {
                                        xueValidateCtrl.handleValidateSuccess();
                                        retFlag = true;
                                    } else {
                                        xueValidateCtrl.handleValidateError(scope.ValidateConfig.errorTip || ret.message);
                                    }
                                    return retFlag;
                                case 'dutyRule':
                                    if (!newVal && !scope.ValidateConfig.required) {
                                        xueValidateCtrl.handleValidateSuccess();
                                        return true;
                                    }
                                    var groupCodesLen = newVal.split(",").length;
                                    if (groupCodesLen <= 10) {
                                        xueValidateCtrl.handleValidateSuccess();
                                        retFlag = true;
                                    } else {
                                        xueValidateCtrl.handleValidateError(scope.ValidateConfig.errorTip);
                                    }
                                    return retFlag;
                                default:
                                    break;
                            }
                        }
                        //不为空且为字符串类型
                        if (regex && typeof regex == "string") {
                            regex = xueUtilMethods.getPattern()[regex];
                        }
                        //regex与errorTip为空,则errorTip与requiredTip相等
                        if (!regex && !scope.ValidateConfig.errorTip) {
                            scope.ValidateConfig.errorTip = scope.ValidateConfig.requiredTip;
                        }
                        return xueValidateCtrl.getBlur(regex, errorTip, newVal);
                    },
                    /**
                     * 找到后代节点中指定类名元素
                     * 
                     * @param {Object}  parentNode 父元素节点
                     * @param {String}  className  类名
                     * @param {boolean} isAdd      是否为添加
                     */
                    findChildClassName: function (parentNode, className, isAdd) {
                        var children = parentNode.children;
                        for (var i = 0, len = children.length; i < len; i++) {           
                            if (children[i].className.indexOf(className) != -1) {
                                if (!isAdd) {
                                    return children[i];
                                }
                                if (children[i].innerText == scope.ValidateConfig.requiredTip) {
                                    return children[i];
                                } 
                            }
                        }
                        return false;
                    },
                    /**
                     * 增加错误提示信息div
                     */
                    addDivMsg: function () {
                        var self = this;
                        var parentNode = ele[0].parentNode;
                        //如果已经有gx-msg元素了，就不用加了
                        if (self.findChildClassName(parentNode, "gx-msg", true)) {
                            return;
                        }
                        var oDiv = document.createElement("div");
                        oDiv.id = xueUtilMethods.guid();
                        scope.ValidateConfig.gxMsgId = oDiv.id;
                        oDiv.classList.add("gx-msg");
                        var msgCssText = self.getCssText(scope.ValidateConfig.msgStyle),
                            iconCssText = self.getCssText(scope.ValidateConfig.iconStyle),
                            lblCssText = self.getCssText(scope.ValidateConfig.lblStyle),
                            parentCssText = self.getCssText(scope.ValidateConfig.parentStyle);
                        if (msgCssText) {
                            oDiv.style.cssText = msgCssText;
                        }
                        if (!scope.ValidateConfig.hasErrorTip) {
                            oDiv.style.display = 'none';
                        }
                        var errorMsg = "<i class='xui-icon' style='" + iconCssText + "'></i>" +
                                "<label class='gx-error' title='" + scope.ValidateConfig.requiredTip + 
                                "' style='" + lblCssText + "'>" + scope.ValidateConfig.requiredTip + 
                                "</label>";
                        oDiv.innerHTML = errorMsg;
                        if (parentCssText) {
                            parentNode.style.cssText = parentCssText;
                        }
                        switch (scope.ValidateConfig.errorTipPos) {
                            case "right":
                                oDiv.classList.add("gx-show-tip");
                                break;
                            case "bottom":
                                break;
                            default:
                                break;
                        }
                        oDiv.classList.add("hide");
                        parentNode.appendChild(oDiv);
                    },
                    /**
                     * 移除错误提示信息div
                     */
                    removeDivMsg: function () {
                        var self = this;
                        var parentNode = ele[0].parentNode;
                        var gxMsgNode = self.findChildClassName(parentNode, "gx-msg", false);
                        if (gxMsgNode) {
                            parentNode.removeChild(gxMsgNode);
                        }
                    },
                    /**
                     * 改变元素的校验样式
                     * 
                     * @param {boolean} validResult 校验结果
                     */
                    changeEleStyle: function (validResult) {
                        var element = null;
                        if (scope.ValidateConfig.validType == "select") {
                            element = ele[0].previousElementSibling.children[0].children[0];
                        } else if (scope.ValidateConfig.validType == "datepicker") {
                            element = ele[0].previousElementSibling.children[0];
                        }
                        if (!validResult) {
                            element.classList.add('directive-error');
                        } else {
                            element.classList.remove('directive-error');
                        }
                    },
                    /**
                     * 观察组件类的元素
                     * 
                     * @param {element} target 目标元素
                     */
                    observeEle: function (target) {
                        var self = this;
                        // 样式备份
                        target.oldDisplay = target.style.display;
                        if (!self.observe.observer) {
                            self.observe.creatObserver();
                        }
                        self.observe.execObserve(target);
                    },
                    /**
                     * 获取校验select元素
                     */
                    getSelectEle: function () {
                        var deferred = $.Deferred(); 
                        // 等待页面元素加载完成
                        var tempTimer = $interval(function () {
                            var preEle = ele[0].previousElementSibling;
                            var target = null;
                            if (preEle.children[0] && preEle.children[0].children[1]) {
                                target = preEle.children[0].children[1];
                            }
                            if (target) {
                                target.validType = "select";
                                $interval.cancel(tempTimer);
                                deferred.resolve(target);
                            }
                        }, 20);
                        return deferred.promise();
                    },
                        /**
                     * 获取校验datepicker元素
                     */
                    getDatepickerEle: function () {
                        var deferred = $.Deferred(); 
                        var reg = /^\{\{.*?\}\}$/gi; // 匹配以'{{'开头且以'}}'结尾的字符 
                        // 等待页面元素加载完成
                        $timeout(function () {
                            // 获取日历组件的panel元素ID
                            var pickerId = ele[0].previousElementSibling.children[1].id;
                            if (!reg.test(pickerId)) {
                                    // 获取日历组件的panel元素
                                var target = $('#' + pickerId)[0];
                                // 获取日历组件的input元素
                                target.ipt = ele[0].previousElementSibling.children[0].children[1];
                                target.validType = "datepicker";
                                // 清除按钮点击触发校验
                                ele[0].previousElementSibling.children[0].children[2].onclick = function () {
                                    scope.ValidateConfig.execBlur(target.ipt.value);
                                }
                                deferred.resolve(target);
                            }
                        });
                        return deferred.promise();
                    },
                        /**
                     * 获取校验radio元素
                     */
                    getRadioEle: function () {
                        var deferred = $.Deferred(); 
                        var targets = [];
                        // 等待页面元素加载完成
                        $timeout(function () {
                            var preEle = ele[0].previousElementSibling;
                            if (preEle.children[0]) {
                                targets.push(preEle.children[0]);
                                targets.push(preEle.previousElementSibling.children[0]);
                                angular.forEach(targets, function (target) {
                                    target.validType = "radio";
                                });
                                deferred.resolve(targets);
                            }
                        });
                        return deferred.promise();
                    },
                        /**
                     * 获取校验sign元素
                     */
                    getSignEle: function () {
                        var deferred = $.Deferred(); 
                        // 等待页面元素加载完成以及初始化代码执行完成
                        $timeout(function () {
                            var target = ele[0].previousElementSibling;
                            target.validType = "sign";
                            target.isFirst = scope.ValidateConfig.hasFirstValid;
                            deferred.resolve(target);
                        });
                        return deferred.promise();
                    },
                    /**
                     * 初始化
                     */
                    init: function () {
                        var self = this;
                        scope.ValidateConfig = angular.extend(self.defaultConfig, scope.xueValidate);
                        self.addDivMsg();
                        ele.bind('blur', self.triggerBlur);
                        self.destroy();
                        switch(scope.ValidateConfig.validType) {
                            // 下拉组件的实时校验
                            case "select":
                                self.getSelectEle().then(function (target) {
                                    self.observeEle(target);
                                });
                                break;
                            // 日历组件的实时校验
                            case "datepicker":
                                self.getDatepickerEle().then(function (target) {
                                    self.observeEle(target);
                                });
                                break;
                            // 单选组件的实时校验
                            case "radio":
                                self.getRadioEle().then(function (targets) {
                                    angular.forEach(targets, function (target) {
                                        self.observeEle(target);
                                    });
                                });
                                break;
                            // 签名、捺印的实时校验
                            case "sign":
                                self.getSignEle().then(function (target) {
                                    self.observeEle(target);
                                });
                                break;
                        }
                    },
                    /**
                     * 销毁
                     */
                    destroy: function () {
                        var self = this;
                        scope.$on('$destroy', function () {
                            self.removeDivMsg();
                            scope.ValidateConfig = null;
                            ele.unbind("blur");
                            self.observe.stopObserve();
                        });
                    }
                }

                xueValidateCtrl.init();

            }
        };
    }])