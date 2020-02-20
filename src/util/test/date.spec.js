describe('date util', function () {
    var xueUtilDate;
    beforeEach(module('xue.util.date'));
    beforeEach(inject(function(_xueUtilDate_){
        xueUtilDate = _xueUtilDate_;
    }));
    it('格式化时间',function(){
        expect(xueUtilDate.formatDate("2020-2-20", "YYYY-MM-DD hh:mm:ss")).toBe("2020-02-20 00:00:00");
        expect(xueUtilDate.formatDate("2020-2-20", "YYYY:MM:DD")).toBe("2020:02:20");
    });
    it('获取当前时间',function(){
        expect(xueUtilDate.getCurrentFmtDate()).toEqual(xueUtilDate.formatDate(new Date()));
        expect(xueUtilDate.getCurrentFmtDate("YYYY-MM-DD")).toEqual("2020-02-20");
    });
    it('获取指日期增加(减少)天数之后的时间',function(){
        expect(xueUtilDate.dateAddNum("2020-02-20 12:12:12", "days", 7)).toBe("2020-02-27 12:12:12");
        expect(xueUtilDate.dateAddNum("2020-02-20", "days", 7, "YYYY-MM-DD")).toBe("2020-02-27");
        expect(xueUtilDate.dateAddNum("2020-02-20", "days", -7, "YYYY-MM-DD")).toBe("2020-02-13");
        expect(xueUtilDate.dateAddNum("2020-02-20", "months", 2, "YYYY-MM-DD")).toBe("2020-04-20");
    });
});