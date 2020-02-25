angular.module('xue.datepicker', ['xue.util.date', 'xue.util.lang', 'jquery'])
    .directive('xueDatepicker', ['xueUtilDate', 'xueUtilLang', 'jquery', function (xueUtilDate, xueUtilLang, $) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                dateConfig: '=',
                ngVal: '=',
                minDate: '=',
                maxDate: '=',
                ngDisabled: '='
            },
            templateUrl: 'xue/template/datepicker/datepicker.html',
            link: function(scope,ele,attrs){

                var xlDatepickerCtrl = scope.xlDatepickerCtrl = {
                    // 默认配置
                    defaultConfig: {
                        id: '',
                        theme: 'deep-blue',
                        element: {
                            type: 'input',
                            targetWrapClassName: "",
                            targetWrapStyle: {},
                            contentWrapClassName: "",
                            contentWrapStyle: {}
                        },
                        format: 'YYYY-MM-DD', // 支持：1、YYYY-MM-DD 2、YYYY-MM-DD hh:mm:ss 3、hh:mm:ss 4、hh:mm
                        timeSelectMode: 0, // 0：自由选择 1：快速选择（hh:mm格式）
                        minDate: '',
                        maxDate: '',
                        fixedMinDate: "",
                        fixedMaxDate: "",
                        language: {
                            month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                            weeks : [ "日", "一", "二", "三", "四", "五", "六" ],
                            times : ["时","分","秒"],
                            titText: "请选择日期时间",
                            clear : "清空",
                            today : "今天",
                            yes   : "确定",
                            close : "关闭"
                        },
                        fixed: false,
                        multiPanel: false,
                        autoClose: false,
                        range: null,
                        showTime: true,
                        showClear: true,
                        showNow: true,
                        showFestival: false,
                        marks: null,
                        nowCallback: function(){},
                        confirmCallback: function(){},
                        clearCallback: function(){},
                        closeCallback: function(){}
                    },

                    //0（默认）：日期 1：时间和日期 2：时间 3：时分
                    type: 0, 
                    id: "",

                    // 日期面板操作
                    showTimePicker: false,
                    optPanel: function(e){
                        var self = this;
                        $(".xl-datepicker-content").hide();
                        $(".xl-timepicker-content").hide();
                        var top = $(e.target).offset().top,
                            left = $(e.target).offset().left,
                            height = $(e.target).height(),
                            width = $(e.target).parent().outerWidth();
                        self.showPanel(top,left,height,width);
                    },
                    showPanel: function(top,left,height,width){
                        var self = this;
                        var panelEle = $('#'+xlDatepickerCtrl.id);
                        $('body').append(panelEle);
                        var eleHeight = panelEle.height(),screenHeight = $('body').height();
                        var offsetTop = top + height + 15;
                        var finalLeft = left - 19;
                        if(finalLeft + panelEle.width() > $('body').width()){
                            finalLeft = finalLeft - (panelEle.width() - width);
                            panelEle.find(".xl-popper-arrow").addClass("arrow-right");
                        }else{
                            panelEle.find(".xl-popper-arrow").removeClass("arrow-right");
                        }
                        if((screenHeight-offsetTop) < eleHeight && offsetTop > eleHeight){
                            panelEle.css({
                                'top': top - eleHeight - 10 + 'px',
                                'left': finalLeft + 'px'
                            });
                            panelEle.find(".xl-popper-arrow").addClass("arrow-bottom");
                        }else{
                            panelEle.css({
                                'top': offsetTop + 'px',
                                'left': finalLeft + 'px'
                            });
                            panelEle.find(".xl-popper-arrow").removeClass("arrow-bottom");
                        }
                        panelEle.show();
                        self.isShowPanel = true;
                    },
                    hidePanel: function(){
                        var self = this;
                        var panelEle = $('#'+xlDatepickerCtrl.id);
                        if(panelEle.is(":hidden")){
                            return;
                        }
                        panelEle.hide();
                        self.isShowPanel = false;
                        self.timeOpt.showPanel = false;
                        switch(self.type){
                            case 2: 
                                if(!xueUtilDate.checkTimeFormat(scope.ngVal)){
                                    scope.ngVal = "00:00:00";
                                }
                                break;
                            case 3: 
                                if(!xueUtilDate.checkTimeFormat(scope.ngVal+":00")){
                                    scope.ngVal = "00:00";
                                }
                                break;
                            default: 
                                if(xueUtilDate.checkDateFormat(scope.ngVal) || xueUtilDate.checkDateTimeFormat(scope.ngVal)){
                                    xlDatepickerCtrl.selectedDate.year = parseInt(scope.ngVal.substring(0,4), 10);
                                    xlDatepickerCtrl.selectedDate.month = parseInt(scope.ngVal.substring(5,7), 10);
                                    xlDatepickerCtrl.selectedDate.day = parseInt(scope.ngVal.substring(8,10), 10);
                                }else{
                                    scope.ngVal = "";
                                }
                                break;
                        }
                        
                        if(xueUtilLang.isFunction(scope.dateConfig.closeCallback)){
                            scope.dateConfig.closeCallback(scope.ngVal);
                        }
                    },
                    getDayCountByYearMonth: function(year,month){
                        var dayCount = 0,isLeapYear = false;
                        if(year%100 == 0){
                            if(year%400 == 0){
                                isLeapYear = true;
                            }
                        }else{
                            if(year%4 == 0){
                                isLeapYear = true;
                            }
                        }
                        switch(month){
                            case 2: if(isLeapYear){dayCount = 29;}else{dayCount = 28;} break;
                            case 1: case 3: case 5: case 7: case 8: case 10: case 12: dayCount = 31; break;
                            case 4: case 6: case 9: case 11: dayCount = 30; break;
                        }
                        return dayCount;
                    },
                    
                    // 年月选择
                    currentYear: '',
                    currentMonth: '',
                    showSelectYear: false,
                    showSelectMonth: false,
                    selectYearMonth: function($event,type){
                        var self = this;
                        self.currentYear = parseInt(self.currentYear, 10);
                        self.currentMonth = parseInt(self.currentMonth, 10);
                        if(type == 'year'){
                            self.showSelectYear = true;
                        }
                        if(type == 'month'){
                            self.showSelectMonth = true;
                        }
                        window.setTimeout(function(){
                            $($event.target).next().find('input').focus();
                            $($event.target).next().find('input').on('mousewheel',function(event){
                                if(event.originalEvent.wheelDelta && event.originalEvent.wheelDelta>0){
                                    if(type == 'year'){
                                        self.currentYear++;
                                    }
                                    if(type == 'month' && self.currentMonth<12){
                                        self.currentMonth++;
                                    }
                                }
                                if(event.originalEvent.wheelDelta && event.originalEvent.wheelDelta<0){
                                    if(type == 'year' && self.currentYear>1){
                                        self.currentYear--;
                                    }
                                    if(type == 'month' && self.currentMonth>1){
                                        self.currentMonth--;
                                    }
                                }
                            });
                        });
                    },
                    selectYearMonthBlur: function($event,type){
                        var self = this;
                        if(type == 'year'){
                            self.showSelectYear = false;
                        }
                        if(type == 'month'){
                            self.showSelectMonth = false;
                        }
                        if(!(/^[+]{0,1}(\d+)$/.test(self.currentYear)) || self.currentYear < 0){
                            self.currentYear = parseInt(new Date().getFullYear(), 10);
                        }
                        if(!(/^[+]{0,1}(\d+)$/.test(self.currentMonth)) || self.currentMonth<1 || self.currentMonth>12){
                            self.currentMonth = parseInt(new Date().getMonth(), 10)+1;
                        }
                        self.composeTable(self.currentYear,self.currentMonth);
                        $($event.target).off('mousewheel');
                    },

                    // 日期选择
                    showDate: '',
                    currentDate: {
                        year: null,
                        month: null,
                        day: null
                    },
                    selectedDate: {
                        year: null,
                        month: null,
                        day: null
                    },
                    selectDate: function(list,e){
                        // 防止冒泡，冒泡后获取的parents停止在这一层级，上升不到body
                        if (window.event) {
                            window.event.cancelBubble = true;
                        } else {
                            e.stopPropagation();
                        }
                        var self = this;
                        if(self.notInRange(list)){
                            return;
                        }
                        self.selectedDate.year = list.year;
                        self.selectedDate.month = list.month;
                        self.selectedDate.day = list.day;
                        self.showDate = self.formatDateFromObj(self.selectedDate);
                        self.changeNgVal();
                        if(list.type == -1){
                            if(parseInt(self.currentMonth, 10)<2 ){
                                self.currentYear = parseInt(self.currentYear, 10)-1;
                                self.currentMonth = 12;
                            }else{
                                self.currentMonth = parseInt(self.currentMonth, 10)-1;
                            }
                            self.composeTable(self.currentYear,self.currentMonth);
                        }
                        if(list.type == 1){
                            if(parseInt(self.currentMonth, 10)>11){
                                self.currentYear = parseInt(self.currentYear, 10)+1;
                                self.currentMonth = 1;
                            }else{
                                self.currentMonth = parseInt(self.currentMonth, 10)+1;
                            }
                            self.composeTable(self.currentYear,self.currentMonth);
                        }
                        if(self.type == 0){
                            self.hidePanel();
                        }
                    },
                    formatDateFromObj: function(obj){
                        if(obj.year && obj.month && obj.day){
                            var year = obj.year,month = '',day = '';
                            month = obj.month < 10 ? '0'+obj.month : obj.month;
                            day = obj.day < 10 ? '0'+obj.day : obj.day;
                            return year+'-'+month+'-'+day;
                        }else{
                            return xueUtilDate.getCurrentFmtDate("YYYY-MM-DD");
                        }
                        
                    },
                    notInRange: function(list){
                        var self = this;
                        var theDate = self.formatDateFromObj(list);
                        var maxDate = xueUtilDate.checkDateTimeFormat(scope.dateConfig.maxDate) ? scope.dateConfig.maxDate.split(" ")[0] :
                                xueUtilDate.checkDateFormat(scope.dateConfig.maxDate) ? scope.dateConfig.maxDate : "";
                        if(scope.dateConfig.fixedMaxDate && (xueUtilDate.checkDateTimeFormat(scope.dateConfig.fixedMaxDate) || xueUtilDate.checkDateFormat(scope.dateConfig.fixedMaxDate))){
                            var fixedMaxDate = scope.dateConfig.fixedMaxDate.split(" ")[0];
                            if(!maxDate || xueUtilDate.maxDate([fixedMaxDate, maxDate]) == maxDate){
                                maxDate = fixedMaxDate;
                            }
                        }
                        if(maxDate){
                            if(xueUtilDate.maxDate([theDate, maxDate]) == theDate){
                                return true;
                            }
                        }
                        var minDate = xueUtilDate.checkDateTimeFormat(scope.dateConfig.minDate) ? scope.dateConfig.minDate.split(" ")[0] :
                        xueUtilDate.checkDateFormat(scope.dateConfig.minDate) ? scope.dateConfig.minDate : "";
                        if(scope.dateConfig.fixedMinDate && (xueUtilDate.checkDateTimeFormat(scope.dateConfig.fixedMinDate) || xueUtilDate.checkDateFormat(scope.dateConfig.fixedMinDate))){
                            var fixedMinDate = scope.dateConfig.fixedMinDate.split(" ")[0];
                            if(!minDate || xueUtilDate.maxDate([fixedMinDate, minDate]) == fixedMinDate){
                                minDate = fixedMinDate;
                            }
                        }
                        if(minDate){
                            if(xueUtilDate.maxDate([theDate, minDate]) == minDate){
                                return true;
                            }
                        }
                        return false;
                    },

                    // 时间选择
                    showTime: "",
                    timeOpt: {
                        showPanel: false,
                        hourObj: {
                            index: 0,
                            items: []
                        },
                        minuteObj: {
                            index: 0,
                            items: []
                        },
                        secondObj: {
                            index: 0,
                            items: []
                        },
                        init: function(){
                            var self = this;
                            self.hourObj.items = self.getSeriesByNumBer(23);
                            self.minuteObj.items = self.getSeriesByNumBer(59);
                            self.secondObj.items = self.getSeriesByNumBer(59);
                            window.setTimeout(function(){
                                $('#'+xlDatepickerCtrl.id).find('.time-scrollbar ul').on('mousewheel',function(e){
                                    var id = $(e.target).parents(".time-scrollbar").find("ul").attr("id");
                                    if(xlDatepickerCtrl.type == 3 && id == "secondObj"){
                                        return;
                                    }
                                    if(e.originalEvent.wheelDelta && e.originalEvent.wheelDelta>0){
                                        if(self[id].index > 0){
                                            self[id].index--;
                                            self.indexToShowTime();
                                        }
                                    }
                                    if(e.originalEvent.wheelDelta && e.originalEvent.wheelDelta<0){
                                        var maxNumber = id == "hourObj" ? 23 : 59;
                                        if(self[id].index < maxNumber){
                                            self[id].index++;
                                            self.indexToShowTime();
                                        }
                                    }
                                });
                            },500);
                        },
                        getSeriesByNumBer: function(number){
                            var array = [];
                            for(var i = 0; i <= number; i++){
                                var temp = "";
                                if(i<10){
                                    temp = "0"+i;
                                }else{
                                    temp = ""+i;
                                }
                                array.push(temp);
                            }
                            return array;
                        },
                        dealTimeNumber: function(number){
                            return number < 10 ? "0" + number : number;
                        },
                        showTimeToIndex: function(){
                            var self = this;
                            var timeArray = xlDatepickerCtrl.showTime.split(":");
                            if(xlDatepickerCtrl.type == 1 || xlDatepickerCtrl.type == 2){
                                if(!xueUtilDate.checkTimeFormat(xlDatepickerCtrl.showTime)){
                                    xlDatepickerCtrl.showTime = "00:00:00";
                                    xlDatepickerCtrl.changeNgVal();
                                }
                                self.hourObj.index = parseInt(timeArray[0], 10);
                                self.minuteObj.index = parseInt(timeArray[1], 10);
                                self.secondObj.index = parseInt(timeArray[2], 10);
                            }
                            if(xlDatepickerCtrl.type == 3){
                                if(!xueUtilDate.checkTimeFormat(xlDatepickerCtrl.showTime+":00")){
                                    xlDatepickerCtrl.showTime = "00:00";
                                    xlDatepickerCtrl.changeNgVal();
                                }
                                self.hourObj.index = parseInt(timeArray[0], 10);
                                self.minuteObj.index = parseInt(timeArray[1], 10);
                            }
                        },
                        indexToShowTime: function(){
                            var self = this;
                            if(xlDatepickerCtrl.type == 1 || xlDatepickerCtrl.type == 2){
                                xlDatepickerCtrl.showTime = self.dealTimeNumber(self.hourObj.index) + ":" 
                                + self.dealTimeNumber(self.minuteObj.index) + ":" 
                                + self.dealTimeNumber(self.secondObj.index);
                            }
                            if(xlDatepickerCtrl.type == 3){
                                xlDatepickerCtrl.showTime = self.dealTimeNumber(self.hourObj.index) + ":" 
                                + self.dealTimeNumber(self.minuteObj.index);
                            }
                            xlDatepickerCtrl.changeNgVal();
                        },
                        optTimePanel: function(){
                            var self = this;
                            self.showPanel = !self.showPanel;
                            if(self.showPanel && !xlDatepickerCtrl.showTime){
                                xlDatepickerCtrl.showTime = xueUtilDate.getCurrentFmtDate("hh:mm:ss");
                                xlDatepickerCtrl.changeNgVal();
                                self.showTimeToIndex();
                            }
                        },
                        clickNumber: function(obj,index,type){
                            var self = this;
                            if(xlDatepickerCtrl.type ==3 && type && type == "secondObj"){
                                return;
                            }
                            obj.index = index;
                            self.indexToShowTime();
                        },
                        confirm: function(){
                            var self = this;
                            self.showPanel = false;
                        },
                        destroy: function(){
                            $('#'+xlDatepickerCtrl.id).find('.time-scrollbar ul').off('mousewheel');
                        }
                    },

                    // 日期表格渲染
                    currentTable: [],
                    composeTable: function(year,month){
                        year = parseInt(year, 10);
                        month = parseInt(month, 10);
                        var self = this;
                        self.currentTable = [];
                        var tableArr = [];
                        var firstWeek = new Date(year+'/'+month+'/1').getDay();
                        var dayCount = self.getDayCountByYearMonth(year,month);
                        var finalWeek = new Date(year+'/'+month+'/'+dayCount).getDay();
                        var lastDayCount = self.getDayCountByYearMonth(month>1?year:year-1,month>1?month-1:12);
                        for(var a=1; a<=firstWeek; a++){
                            tableArr.push({
                                type: -1,
                                year: month>1?year:year-1,
                                month: month>1?month-1:12,
                                day: lastDayCount-(firstWeek-a)
                            });
                        }
                        for(var b=1; b<=dayCount; b++){
                            tableArr.push({
                                type: 0,
                                year: year,
                                month: month,
                                day: b
                            });
                        }
                        for(var c=finalWeek+1,j=1; c<=6; c++,j++){
                            tableArr.push({
                                type: 1,
                                year: month<12?year:year+1,
                                month: month<12?month+1:1,
                                day: j
                            });
                        }
                        for(var d= 0; d<tableArr.length; d+=7){
                            self.currentTable.push(tableArr.slice(d,d+7));
                        }
                    },
                    changeYearMonth: function(plusYear,plusMonth){
                        var self = this;
                        self.currentYear = parseInt(self.currentYear, 10);
                        self.currentMonth = parseInt(self.currentMonth, 10);
                        self.currentYear = self.currentYear+plusYear;
                        if(self.currentMonth+plusMonth>12){
                            self.currentMonth = 1;
                            self.currentYear++;
                        }else if(self.currentMonth+plusMonth<1){
                            self.currentMonth = 12;
                            self.currentYear--;
                        }else{
                            self.currentMonth += plusMonth;
                        }
                        self.composeTable(self.currentYear,self.currentMonth);
                    },

                    // 操作
                    changeNgVal: function(){
                        var self = this;
                        if(self.showDate && xueUtilDate.checkDateFormat(self.showDate)){
                            if(!self.judgeInRange(self.showDate)){
                                return;
                            }
                        }else{
                            self.showDate = self.formatDateFromObj(self.selectedDate);
                        }
                        if(self.type == 3){
                            if(self.showTime && !xueUtilDate.checkTimeFormat(self.showTime+":00")){
                                self.showTime = "00:00";
                            }
                        }else{
                            if(self.showTime && !xueUtilDate.checkTimeFormat(self.showTime)){
                                self.showTime = "00:00:00";
                            }
                        }
                        if(self.type == 0){
                            scope.ngVal = self.showDate;
                        }
                        if(self.type == 1){
                            if(!self.showTime){
                                self.showTime = "00:00:00";
                                self.timeOpt.showTimeToIndex();
                            }
                            scope.ngVal = self.showDate + " " + self.showTime;
                        }
                        if(self.type == 2 || self.type == 3){
                            scope.ngVal = self.showTime;
                        }
                    },
                    judgeInRange: function(date){
                        var self = this;
                        if(xueUtilDate.checkDateFormat(date) || xueUtilDate.checkDateTimeFormat(date)){
                            var list = {
                                year: date.substring(0,4),
                                month: date.substring(5,7),
                                day: date.substring(8,10)
                            };
                            if(self.notInRange(list)){
                                /* modalExt.modalTip({
                                    type: "warning",
                                    content: "不在可选日期范围内！",
                                    height: 150
                                }); */
                                return false;
                            }else{
                                return true;
                            }
                        }
                    },
                    ngValBlur: function(){
                        var self = this;
                        if(self.type == 0 && !xueUtilDate.checkDateFormat(scope.ngVal)){
                            scope.ngVal = self.showDate;
                        }
                        if(self.type == 1 && !xueUtilDate.checkDateTimeFormat(scope.ngVal)){
                            scope.ngVal = self.showDate + " "+ self.showTime;
                            if(!xueUtilDate.checkDateTimeFormat(scope.ngVal)){
                                scope.ngVal = "";
                            }
                        }
                        if(self.type == 2 && !xueUtilDate.checkTimeFormat(scope.ngVal)){
                            scope.ngVal = "00:00:00";
                            self.showTime = "00:00:00";
                            self.timeOpt.showTimeToIndex();
                        }
                        if(self.type == 3 && !xueUtilDate.checkTimeFormat(scope.ngVal+":00")){
                            scope.ngVal = "00:00";
                            self.showTime = "00:00:00";
                            self.timeOpt.showTimeToIndex();
                        }
                    },
                    getNow: function(){
                        var self = this;
                        var today = xueUtilDate.getCurrentFmtDate("YYYY-MM-DD");
                        if(!self.judgeInRange(today)){
                            return;
                        }
                        if(self.type == 0){
                            var date = today;
                            scope.ngVal = date;
                        }
                        if(self.type == 1){
                            var dateTime = xueUtilDate.getCurrentFmtDate("YYYY-MM-DD");
                            scope.ngVal = dateTime;
                        }
                        self.hidePanel();
                        if(xueUtilLang.isFunction(scope.dateConfig.nowCallback)){
                            scope.dateConfig.nowCallback(scope.ngVal);
                        }
                    },
                    confirm: function(){
                        var self = this;
                        self.hidePanel();
                        if(xueUtilLang.isFunction(scope.dateConfig.confirmCallback)){
                            scope.dateConfig.confirmCallback(scope.ngVal);
                        }
                    },
                    clear: function(){
                        if(self.type == 2){
                            scope.ngVal = "00:00:00";
                        }else{
                            scope.ngVal = "";
                            xlDatepickerCtrl.selectedDate = {
                                year: null,
                                month: null,
                                day: null
                            };
                        }
                        if(xueUtilLang.isFunction(scope.dateConfig.clearCallback)){
                            scope.dateConfig.clearCallback();
                        }
                    },
                    
                    //监听
                    watch: {
                        ngValWatcher: null,
                        minDateWatcher: null,
                        maxDateWatcher: null,
                        init: function(){
                            var self = this;
                            $("body")[0].addEventListener("click",self.clickOtherArea);
                            self.watchNgVal();
                            self.watchMinDate();
                            self.watchMaxDate();
                        },
                        watchNgVal: function(){
                            var self = this, parent = xlDatepickerCtrl;
                            self.ngValWatcher = scope.$watch("ngVal",function(newVal){
                                if(parent.type == 0){
                                    if(!newVal){
                                        parent.showDate = newVal;
                                        parent.composeTable(parent.currentYear,parent.currentMonth);
                                    }
                                    if(xueUtilDate.checkDateFormat(newVal)){
                                        if(!parent.judgeInRange(newVal)){
                                            scope.ngVal = parent.showDate;
                                            return;
                                        }
                                        parent.showDate = newVal;
                                        parent.selectedDate.year = parent.currentYear = parseInt(newVal.substring(0,4), 10);
                                        parent.selectedDate.month = parent.currentMonth = parseInt(newVal.substring(5,7), 10);
                                        parent.selectedDate.day = parseInt(newVal.substring(8,10), 10);
                                        parent.composeTable(parent.currentYear,parent.currentMonth);
                                    }
                                }
                                if(parent.type == 1){
                                    if(!newVal){
                                        parent.showDate = "";
                                        parent.showTime = "";
                                        parent.timeOpt.showPanel = false;
                                        parent.composeTable(parent.currentYear,parent.currentMonth);
                                    }
                                    if(xueUtilDate.checkDateTimeFormat(newVal)){
                                        if(!parent.judgeInRange(newVal.split(" ")[0])){
                                            scope.ngVal = parent.showDate + " " +parent.showTime;
                                            return;
                                        }
                                        parent.showDate = newVal.split(" ")[0];
                                        parent.showTime = newVal.split(" ")[1];
                                        parent.timeOpt.showTimeToIndex();
                                        parent.selectedDate.year = parent.currentYear = parseInt(newVal.substring(0,4), 10);
                                        parent.selectedDate.month = parent.currentMonth = parseInt(newVal.substring(5,7), 10);
                                        parent.selectedDate.day = parseInt(newVal.substring(8,10), 10);
                                        parent.composeTable(parent.currentYear,xlDatepickerCtrl.currentMonth);
                                    }
                                }
                                if(parent.type == 2){
                                    if(!newVal){
                                        parent.showTime = "";
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                    if(xueUtilDate.checkTimeFormat(newVal)){
                                        parent.showTime = newVal;
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                }
                                if(parent.type == 3){
                                    if(!newVal){
                                        parent.showTime = "";
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                    if(xueUtilDate.checkTimeFormat(newVal+":00")){
                                        parent.showTime = newVal;
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                }
                            });
                        },
                        watchMinDate: function(){
                            var self = this;
                            if(typeof(scope.minDate) != "undefined"){
                                self.minDateWatcher = scope.$watch("minDate",function(newVal){
                                    if(newVal){
                                        if(xlDatepickerCtrl.type == 0 && xueUtilDate.checkDateFormat(newVal)){
                                            scope.dateConfig.minDate = newVal;
                                        }
                                        if(xlDatepickerCtrl.type == 1 && xueUtilDate.checkDateTimeFormat(newVal)){
                                            scope.dateConfig.minDate = newVal.split(" ")[0];
                                        }
                                    }else{
                                        scope.dateConfig.minDate = "";
                                    }
                                });
                            }
                        },
                        watchMaxDate: function(){
                            var self = this;
                            if(typeof(scope.maxDate) != "undefined"){
                                self.maxDateWatcher = scope.$watch("maxDate",function(newVal){
                                    if(newVal){
                                        if(xlDatepickerCtrl.type == 0 && xueUtilDate.checkDateFormat(newVal)){
                                            scope.dateConfig.maxDate = newVal;
                                        }
                                        if(xlDatepickerCtrl.type == 1 && xueUtilDate.checkDateTimeFormat(newVal)){
                                            scope.dateConfig.maxDate = newVal.split(" ")[0];
                                        }
                                    }else{
                                        scope.dateConfig.maxDate = "";
                                    }
                                });
                            }
                        },
                        clickOtherArea: function(e){
                            if($(e.target).attr("class") != "xui-datepicker-wrap" && $(e.target).parents(".xui-datepicker-wrap").length == 0 && 
                                $(e.target).attr("id") != xlDatepickerCtrl.id && $(e.target).parents("#"+xlDatepickerCtrl.id).length == 0 ){
                                xlDatepickerCtrl.hidePanel();
                            }
                        },
                        destroy: function(){
                            var self = this;
                            $("body")[0].removeEventListener("click",self.clickOtherArea);
                            self.ngValWatcher();
                            if(self.minDateWatcher){
                                self.minDateWatcher();
                            }
                            if(self.maxDateWatcher){
                                self.maxDateWatcher();
                            }
                        }
                    },

                    init: function(){
                        var self = this;

                        scope.dateConfig = angular.extend(self.defaultConfig,scope.dateConfig||{});

                        scope.dateConfig.id = new Date().getTime();

                        self.currentYear = parseInt(new Date().getFullYear(), 10);
                        self.currentMonth = parseInt(new Date().getMonth(), 10)+1;

                        self.currentDate.year = self.currentYear;
                        self.currentDate.month = self.currentMonth;
                        self.currentDate.day = parseInt(new Date().getDate(), 10);

                        switch(scope.dateConfig.format){
                            case "YYYY-MM-DD hh:mm:ss" : 
                                self.type = 1; 
                                self.timeOpt.init();
                                self.id = "xlDatePicker_" + scope.dateConfig.id;
                                break;
                            case "hh:mm:ss" : 
                                self.type = 2;
                                self.timeOpt.init();
                                self.id = "xlTimePicker_" + scope.dateConfig.id;
                                break;
                            case "hh:mm":
                                self.timeOpt.init();
                                self.id = "xlTimePicker_" + scope.dateConfig.id;
                                self.type = 3;
                                break;
                            default: self.type = 0; 
                                self.id = "xlDatePicker_" + scope.dateConfig.id;
                                break;
                        }

                        self.watch.init();
                    }
                }
                
                xlDatepickerCtrl.init();

                scope.$on('$destroy',function(){
                    $('#'+xlDatepickerCtrl.id).remove();
                    xlDatepickerCtrl.watch.destroy();
                    xlDatepickerCtrl.timeOpt.destroy();
                });
                
            }
        }
    }])
