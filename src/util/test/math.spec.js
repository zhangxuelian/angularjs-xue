describe("math util", function () {
    var xueUtilMath, x, y, arr, noNumberArr, fixedArr;
    beforeEach(module("xue.util.math"));
    beforeEach(inject(function (_xueUtilMath_) {
        xueUtilMath = _xueUtilMath_;
        x = 1.21;
        y = 1.1;
        arr = [1.2, 1.4, 1.6, 2, 1.8];
        noNumberArr = ["as", "sd", "sds"];
        fixedArr = ["23", 233, 43, "sdsd"];
    }));
    it("加法", function () {
        expect(xueUtilMath.addition(x, y)).toBe(2.31);
        expect(xueUtilMath.addition(undefined, x)).toEqual(NaN);
    });
    it("减法", function () {
        expect(xueUtilMath.subtraction(x, y)).toBe(0.11);
    });
    it("乘法", function () {
        expect(xueUtilMath.multiplication(x, y)).toBe(1.331);
    });
    it("除法", function () {
        expect(xueUtilMath.division(x, y)).toBe(1.1);
    });
    it("平均值", function () {
        expect(xueUtilMath.mean(arr)).toBe(1.6);
    });
    it("获取数组最大值", function () {
        expect(xueUtilMath.max(arr)).toBe(2);
        expect(xueUtilMath.max(noNumberArr)).toBe(undefined);
        expect(xueUtilMath.max(fixedArr)).toBe(233);
    });
    it("获取数组最小值", function () {
        expect(xueUtilMath.min(arr)).toBe(1.2);
        expect(xueUtilMath.min(noNumberArr)).toBe(undefined);
        expect(xueUtilMath.min(fixedArr)).toBe(43);
    });
    it("数字根据精度四舍五入", function () {
        expect(xueUtilMath.round(1.23456)).toBe(1);
        expect(xueUtilMath.round(1.23456, 2)).toBe(1.23);
        expect(xueUtilMath.round(1.23456e+5, -2)).toBe(123500);
        expect(xueUtilMath.round("asd")).toEqual(NaN);
    });
});