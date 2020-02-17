describe('function util', function () {
    var xueUtilFunc;
    var beforeNum = 0;
    var onceNum = 0;
    function testBefore(){
        return ++beforeNum;
    }
    function testAfter(){
        return "限定函数被调用"
    }
    function testOnce(){
        onceNum++;
        return "第"+onceNum+"次调用，只能被调用一次"
    }
    function testSpread(a, b, c){
        return a*b*c;
    }
    function testBind(name){
        return "我的名字叫" + name + ",我的年龄是" + this.age;
    }
    var bindObj = {
        age: 18
    }
    beforeEach(module('xue.util.function'));
    beforeEach(inject(function (_xueUtilFunc_) {
        xueUtilFunc = _xueUtilFunc_;
    }));
    it("创建一个调用func的函数,调用次数不超过n次，之后将返回最后一次调用结果", function () {
        var func = xueUtilFunc.before(2,testBefore);
        expect(func()).toEqual(1);
        expect(func()).toEqual(2);
        expect(func()).toEqual(2);
    });
    it("before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func", function () {
        var func = xueUtilFunc.after(2,testAfter);
        expect(func()).toEqual(undefined);
        expect(func()).toEqual("限定函数被调用");
    });
    it("创建一个只能调用 func 一次的函数,重复调用返回第一次调用的结果", function () {
        var func = xueUtilFunc.once(testOnce);
        expect(func()).toEqual("第1次调用，只能被调用一次");
        expect(func()).toEqual("第1次调用，只能被调用一次");
    });
    it("创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入", function () {
        var func = xueUtilFunc.spread(testSpread);
        expect(func([1,2,3])).toEqual(6);
    });
    it("创建一个调用func的函数，thisArg绑定func函数中的 this", function () {
        var func = xueUtilFunc.bind(testBind, bindObj, "大宝");
        expect(func()).toEqual("我的名字叫大宝,我的年龄是18");
    });
});