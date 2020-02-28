angular.module('xue.scroller', ['xue.util.lang', 'xue.util.array'])
    .directive("xueScroller", ['xueUtilLang', '$interval', function(xueUtilLang, $interval) {
        return {
            restrict: 'E',
            replace : true,
            scope : {
                scrollConfig : '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/scroller/scroller.html';
            },
            link:function(scope,ele,attrs){
                var defaultConfig = {
                    //1:一维数组 2：二维数组 3：一维数组（对象：{text:'词条信息',class:'该词条样式'}）
                    dataType: 1,
                    //滚动的数组,可接受一维数组和二维数组和数组对象
                    //二维数组对应的词条样式是一维数组：[['aaa','bbb']]=>[{/*第一个对象的样式*/},{/*第二个对象的样式*/}]
                    data: [],
                    //背景样式
                    backgroundStyle: {},
                    //高亮样式
                    highlightStyle: {},
                    //词条样式
                    itemStyle: {},
                    //词条高度
                    itemHeight: 35,
                    //滚动至第n个词条
                    goIndex: -1,
                    //滚动进度 0-1的小数
                    goProcess: 0,
                    //滚动至第n个词条回调
                    goIndexCallBack: function(){
                        
                    },
                    //滚动至某个进度回调
                    goProcessCallBack: function(){
                        
                    },
                    //是否循环播放
                    isLoop: false,
                    //是否自动播放
                    isAutoPlay: false,
                    //自动播放时间间隔（s）
                    playInterval: 1
                };
                
                scope.scrollConfig = angular.extend(defaultConfig,scope.scrollConfig);
                var timer = null;
                if(scope.scrollConfig.isAutoPlay){
                    timer = $interval(function(){
                        if(scope.scrollConfig.goIndex < scope.scrollConfig.data.length-1){
                            scope.scrollConfig.goIndex++;
                        }else if(scope.scrollConfig.isLoop){
                            scope.scrollConfig.goIndex = 0;
                        } else {
                            $interval.cancel(timer);
                        }
                    },(scope.scrollConfig.playInterval || 1)*1000);
                }

                var dataWatcher = scope.$watch('scrollConfig.data',function(){
                    
                },true);

                var indexWatcher = scope.$watch('scrollConfig.goIndex',function(){
                    if(scope.scrollConfig.goIndex != -1 && xueUtilLang.isFunction(scope.scrollConfig.goIndexCallBack)){
                        scope.scrollConfig.goIndexCallBack(scope.scrollConfig.goIndex,scope.scrollConfig.data[scope.scrollConfig.goIndex]);
                    }
                });

                var processWatcher = scope.$watch('scrollConfig.goProcess',function(newVal,oldVal){
                    if(scope.scrollConfig.goIndex != -1 && ((newVal && !isNaN(newVal) && newVal > 0 && newVal <= 1 ) || newVal == 0)){
                        scope.scrollConfig.goIndex = parseInt(scope.scrollConfig.data.length * newVal, 10);
                        if(xueUtilLang.isFunction(scope.scrollConfig.goProcessCallBack)){
                            scope.scrollConfig.goProcessCallBack(scope.scrollConfig.goProcess,scope.scrollConfig.data[scope.scrollConfig.goIndex]);
                        }
                    }
                });

                scope.$on("$destroy", function() {
                    if(timer){
                        $interval.cancel(timer);
                    }
                    dataWatcher();
                    indexWatcher();
                    processWatcher();
                    $(ele).remove();    
                });
            }
        };
    }])