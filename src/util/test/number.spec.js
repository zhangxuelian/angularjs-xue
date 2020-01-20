describe('number util', function () {
    var xueUtilNumber;
    beforeEach(module('xue.util.number'));
    beforeEach(inject(function (_xueUtilNumber_) {
        xueUtilNumber = _xueUtilNumber_;
    }));
    it('检查 n 是否在 start 与 end 之间', function () {
        expect(xueUtilNumber.inRange(3, 2, 4)).toBeTruthy();
        expect(xueUtilNumber.inRange(4, 8)).toBeTruthy();
        expect(xueUtilNumber.inRange(4, 2)).not.toBeTruthy();
        expect(xueUtilNumber.inRange(2, 2)).not.toBeTruthy();
        expect(xueUtilNumber.inRange(1.2, 2)).toBeTruthy();
        expect(xueUtilNumber.inRange(5.2, 4)).not.toBeTruthy();
        expect(xueUtilNumber.inRange(-3, -2, -6)).toBeTruthy();
    });
    it('检查产生一个包括 lower 与 upper 之间的数', function () {
        expect(xueUtilNumber.inRange(xueUtilNumber.random(0, 5), -1, 6)).toBeTruthy();
        expect(xueUtilNumber.inRange(xueUtilNumber.random(5), -1, 6)).toBeTruthy();
        expect(xueUtilNumber.inRange(xueUtilNumber.random(5, true), 0, 5)).toBeTruthy();
        expect(xueUtilNumber.inRange(xueUtilNumber.random(1.2, 5.2), 1, 6)).toBeTruthy();
    });
});