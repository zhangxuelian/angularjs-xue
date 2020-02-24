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
        expect(xueUtilDate.getCurrentFmtDate()).toEqual(xueUtilDate.formatDate(Date()));
    });
    it('获取指日期增加(减少)年/月/日/时/分/秒数之后的时间',function(){
        expect(xueUtilDate.dateAddNum("2020-02-20 12:12:12", "days", 7)).toBe("2020-02-27 12:12:12");
        expect(xueUtilDate.dateAddNum("2020-02-20", "days", 7, "YYYY-MM-DD")).toBe("2020-02-27");
        expect(xueUtilDate.dateAddNum("2020-02-20", "days", -7, "YYYY-MM-DD")).toBe("2020-02-13");
        expect(xueUtilDate.dateAddNum("2020-02-20", "months", 2, "YYYY-MM-DD")).toBe("2020-04-20");
    });
    it('获取日期最大值',function(){
        expect(xueUtilDate.maxDate(["2020-02-20 10:06:00", Date()])).toEqual(Date());
    })
    it('获取日期最小值',function(){
        expect(xueUtilDate.minDate(["2020-02-20 10:06:00", Date()])).toBe("2020-02-20 10:06:00");
    })
    it('获取日期间隔对象',function(){
        expect(xueUtilDate.timeInterval("2020-02-20 10:06:00", "2015-05-03 12:02:32")).toEqual({ days: 1753, hours: 22, minutes: 3, seconds: 28, usedTime: 151538608000, flag: '-' });
    })
});