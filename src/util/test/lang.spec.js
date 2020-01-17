describe("lang util", function() {
    var xueUtilLang, json, obj, jpg;
    beforeEach(module('xue.util.lang'));
    beforeEach(inject(function (_xueUtilLang_) {
        xueUtilLang = _xueUtilLang_;
        json = {"x": 3, "y": 4};
        obj = {x: [1, 2], y: {z: 3}};
        jpg = "a.jpg";
    }));
    it("检查是否为对象", function() {
        expect(xueUtilLang.isObject(new Object())).toBe(true);
    });
    it("检查是否为函数", function() {
        expect(xueUtilLang.isFunction(function(){})).toBe(true);
    });
    it("检查是否为Json对象", function() {
        expect(xueUtilLang.isJson(json)).toBe(true);
    });
    it("检查是否为Date对象", function() {
        expect(xueUtilLang.isDate(new Date())).toBe(true);
    });
    it("检查是否为图片", function() {
        expect(xueUtilLang.isPicture(jpg)).toBe(true);
    });
    it("判断是否为空对象（空数组）", function() {
        expect(xueUtilLang.isEmpty({})).toBe(true);
        expect(xueUtilLang.isEmpty([])).toBe(true);
    });
    it("复制对象", function() {
        expect(xueUtilLang.copyObj(obj)).toEqual(obj);
    });
    it("匹配对象", function() {
        expect(xueUtilLang.isMatch(obj, {x: [1]})).toBe(true);
    });
    it("检查是否是IE8", function() {
      expect(xueUtilLang.isIE8()).toBe(false);
  });
});
