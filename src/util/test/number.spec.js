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
});