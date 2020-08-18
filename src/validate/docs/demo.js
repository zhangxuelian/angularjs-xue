angular.module('ui.xue.demo').controller('xueValidateDemoCtrl', ['$scope', 'xueUtilMethods',  function ($scope, xueUtilMethods) {
    var data = $scope.data = [{
        label: "身份证",
        value: "1"
    }, {
        label: "护照",
        value: "2"
    }, {
        label: "居住证",
        value: "3"
    }, {
        label: "驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证",
        value: "4"
    }]
    /**
     * 数据模型
     */
    var vm = $scope.vm = {
        params: {
            pcIp: '',
            port: '',
            idCard: '',
            dateValue: '', // 2020-02-25 14:00:00
            isApproval: ''
        },
        xueValidConfig: {
            pcIp: {
                requiredTip: "IP地址不能为空",
                regex: "ip",
                errorTip: "请填写正确的IP格式！",
                msgStyle: {
                    "margin-left": "66px"
                }
            },
            port: {
                requiredTip: "端口不能为空",
                regex: "port",
                errorTip: "端口不合法！",
                errorTipPos: 'right'
            },
            idCard: {
                requiredTip: "证件类型不能为空",
                validType: "select",
                msgStyle: {
                    "margin-left": "84px"
                }
            },
            dateValue: {
                requiredTip: "开始时间不能为空",
                validType: "datepicker",
                errorTipPos: 'right'
            },
            isApproval: {
                requiredTip: "请先选择是否通过！",
                errorTipPos: "right",
                validType: "radio"
            }
        },
        // 单选可过滤分离
        selectConfig: {
            data: data,
            filter: true,
            separate: true,
            onSelect: function (item) {
            }
        },
        datepickerConfig: {
            format: "YYYY-MM-DD hh:mm:ss"
        }
    }
    /**
     * 事件
     */
    var ev = $scope.ev = {
        submit: function () {
            if (!xueUtilMethods.xueValidate(vm.params, vm.xueValidConfig)) {
                return;
            }
            alert('校验成功');
        }
    }
}]);
