angular.module('xue.util.methods', [])
    .service('xueUtilMethods', [function () {
        var self = this;
        /**
         * 校验正则
         */
        this.getPattern = function () {
            return {
                digits: /^\d+$/, // 验证非负整数（正整数 + 0）
                letters: /^[a-z]+$/i, //"请填写字母"
                date: /^\d{4}-\d{2}-\d{2}$/, //"请填写有效的日期，格式:yyyy-mm-dd"
                time: /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, //"请填写有效的时间，00:00到23:59之间"
                email: /^[\w]+(\.[\w]+)*@[a-z\d]+(\.[a-z\d]+)*\.([a-z]{2,4})$/i,// "请填写有效的邮箱"
                url: /^(https?|s?ftp):\/\/\S+$/i, //"请填写有效的网址"
                qq: /^[1-9]\d{4,}$/, //"请填写有效的QQ号"
                IDcard: /^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/, //"请填写正确的身份证号码"
                tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,// "请填写有效的电话号码"
                mobile: /^1[3-9]\d{9}$/,// "请填写有效的手机号"
                zipcode: /^\d{6}$/,// "请检查邮政编码格式"
                chinese: /^[\u0391-\uFFE5]+$/, //"请填写中文字符"
                username: /^\w{3,12}$/,// "请填写3-12位数字、字母、下划线"
                password: /^[\S]{6,16}$/, //请填写6-16位字符，不能包含空格
                ip: /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]{0,1}|0)(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]{0,1}|0)){3}$/, //请填写有效的IP地址
                mac: /^([A-Fa-f0-9]{2}[-,:]){5}[A-Fa-f0-9]{2}$/, // 请填写有效的mac地址
                TaiWan: /^[0-9]{8}([0-9]{2})?$/, // 台湾通行证、台湾居民来往大陆通行证
                HKMacao: /^[HMhm]{1}[0-9]{8}([0-9]{2})?$/, // 港澳通行证、港澳居民来往内地通行证
                passport: /^[a-zA-Z0-9]{5,17}$/, // 护照
                port: /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,//端口
                phoneNum: /^1[0-9]\d{9}$/, // 手机号
                "0~100": /^(\d|[1-9]\d|100)$/,
                "1~100": /^([1-9]|[1-9]\d|100)$/,
                "1~10": /^([1-9]|10)$/
            }
        };
        /**
         * 校验身份证格式
         * 
         * @param {string | number} idCard 身份证号码
         * @return {obj}
         */
        this.checkIdCard = function(idCard){
            var _this = this;
            var iSum = 0;
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(!reg.test(idCard))
                return {
                    status:false,
                    message:'你输入的身份证长度或格式错误!'
                };
            idCard = idCard.replace(/x$/i,"a");
            if(_this.areaID[parseInt(idCard.substr(0,2), 10)] === null)
                return {
                    status:false,
                    message:'你的身份证地区非法!'
                };
            if(idCard.length == 18){
                var sBirthday = idCard.substr(6,4) + "-" + Number(idCard.substr(10,2)) + "-" + Number(idCard.substr(12,2));
                var d = new Date(sBirthday.replace(/-/g,"/"));
                if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))
                    return {
                        status:false,
                        message:'身份证上的出生日期非法!'
                    };
                for(var i = 17;i>=0;i --) 
                    iSum += (Math.pow(2,i) % 11) * parseInt(idCard.charAt(17 - i),11);
                if(iSum%11!=1) 
                    return {
                        status:false,
                        message:'你输入的身份证号非法!'
                    };
            }
            if(idCard.length == 15){
                var year = idCard.substring(6,8);     
                var month = idCard.substring(8,10);     
                var day = idCard.substring(10,12);     
                var temp_date = new Date(year,parseInt(month, 10)-1,parseInt(day, 10));     
                // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法     
                if(temp_date.getYear()!=parseInt(year, 10)||temp_date.getMonth()!=parseInt(month, 10)-1||temp_date.getDate()!=parseInt(day, 10)){     
                    return {
                        status:false,
                        message:'身份证上的出生日期非法!'
                    };    
                }
            }
            //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
            return {
                status:true,
                message:'校验成功！'
            };
        };
        /**
         * 生成全局的唯一标识UUID
         */
        this.guid = function () {
            return (self.S4() + self.S4() + self.S4() + self.S4() + self.S4() + self.S4() + self.S4() + self.S4());
        }
        this.S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        /**
         * 提交时检测，所需要验证的控件是否合法，不合法就不能通过，且支持使用弹窗的形式进行消息的提示
         * 
         * @param data         数据
         * @param validConfig  校验配置
         * @returns callback : bool（是否通过校验） 
         */
        this.xueValidate = function (data, validConfig) {
            var flag = true,  
                firstErrorItem = null,
                isFirstModal = true; // 弹窗只弹一次就可以了
            //将数据融入到校验配置中去
            angular.forEach(data, function (value, key) {
                if (validConfig[key]) {
                    validConfig[key].value = value;
                }
            });
            //循环遍历执行校验
            for (var key in validConfig) {
                var item = validConfig[key],
                    newVal = $.trim(item.value);//转成字符串，防止出现数字0，这种误判的情况
                if (item.hasOwnProperty("execBlur")) {
                    if (!item.execBlur(newVal)) {
                        if (!firstErrorItem) {
                            firstErrorItem = item;
                        }
                        flag = false;
                    }
                } else {// 对于非输入框类型的必填校验
                    // 默认必填
                    if (!item.hasOwnProperty("required")) {
                        item.required = true;
                    }
                    //校验必填
                    if (item.required) { 
                        if (!newVal) {
                            isFirstModal && item.hasModalTip && modalExt.modalTip({
                                content: item.requiredTip,
                                type: 'error'
                            });
                            flag = false;
                            isFirstModal = false;
                        }
                    }
                }
            }
            //让第一个错误的元素触发事件
            if (firstErrorItem) {
                if (firstErrorItem.validType == "select" || firstErrorItem.validType == "datepicker") {
                    firstErrorItem.execShowPanel();
                }
                firstErrorItem.validType == "input" && firstErrorItem.execFocus();
            }
            return flag;
        };
    }]);