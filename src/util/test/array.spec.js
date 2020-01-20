describe('array util', function () {
    var xueUtilArray;
    beforeEach(module('xue.util.array'));
    beforeEach(inject(function (_xueUtilArray_) {
        xueUtilArray = _xueUtilArray_;
    }));
    it("数组去重", function() {
        expect(xueUtilArray.uniq([1,2,2,3,3,4])).toEqual([1,2,3,4]);
    });
    it("数组中相同对象属性值去重", function() {
        expect(xueUtilArray.uniqJson([
            {
                a:18,
                b:17,
                c:16
            },
            {
                a:18,
                b:19,
                c:20
            },
            {
                a:21,
                b:22,
                c:23
            }
        ],"a")).toEqual([
            {
                a:18,
                b:17,
                c:16
            },
            {
                a:21,
                b:22,
                c:23
            }
        ]);
    });
    it("数组快速排序", function() {
        expect(xueUtilArray.quickSort([5,2,4,6,3,8])).toEqual([2,3,4,5,6,8]);
    });
    it("从数组中查找对象属性值，返回下标", function() {
        expect(xueUtilArray.findObjIndex([
            {
                name:"lilei",
                age:17
            },
            {
                name:"hanmeimei",
                age:16
            }
        ],"age",16)).toEqual(1);
    });
    it("从数组中查找值，返回下标", function() {
        expect(xueUtilArray.findStrIndex([1,2,3,4,5,6],6)).toEqual(5);
    });
});