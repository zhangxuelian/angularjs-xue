describe("math util", function () {
    var xueUtilMath, x, y, arr;
    beforeEach(module("xue.util.math"));
    beforeEach(inject(function (_xueUtilMath_) {
        xueUtilMath = _xueUtilMath_;
        x = 1.21;
        y = 1.1;
        arr = [1.2, 1.4, 1.6, 1.8];
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
        expect(xueUtilMath.mean(arr)).toBe(1.5);
    });
});