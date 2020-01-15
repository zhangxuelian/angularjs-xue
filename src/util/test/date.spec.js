describe('date util', function () {
    var xueUtilDate;
    beforeEach(module('xue.util.date'));
    beforeEach(inject(function(_xueUtilDate_){
        xueUtilDate = _xueUtilDate_;
    }));
    it('test',function(){
        expect(xueUtilDate.test()).toEqual('test');
    });
});