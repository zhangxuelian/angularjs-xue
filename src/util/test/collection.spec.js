describe('collection util', function () {
    var xueUtilCollect;
    beforeEach(module('xue.util.collection'));
    beforeEach(inject(function (_xueUtilCollect_) {
        xueUtilCollect = _xueUtilCollect_;
    }));
    it("从数组中查找对象值，返回数组", function () {
        expect(xueUtilCollect.findWithArray([{
                name: "tom"
            },
            {
                name: "jerry"
            },
            {
                name: "lisa"
            }
        ], "name", ["jerry", "lisa"])).toEqual([{
                name: "jerry"
            },
            {
                name: "lisa"
            }
        ]);
    });
    it("从数组中查找对象值，返回对象", function () {
        expect(xueUtilCollect.findWithVal([{
                name: "lilei",
                age: 17
            },
            {
                name: "hanmeimei",
                age: 16
            }
        ], "name", "lilei")).toEqual({
            name: "lilei",
            age: 17
        });
    });
    it("移除对象中值为空的项", function () {
        expect(xueUtilCollect.removeEmptyField({
            name: "lilei",
            age: 17,
            sex: "",
            height: null
        })).toEqual({
            name: "lilei",
            age: 17
        });
    });
    it("移除数组中对象某属性值为空的项", function () {
        expect(xueUtilCollect.removeEmptyItem([{
                name: "lilei",
                age: 17,
                sex: "",
                height: null
            },
            {
                name: "hanmeimei",
                age: "",
                sex: "women"
            }
        ])).toEqual([{
                name: "lilei",
                age: 17
            },
            {
                name: "hanmeimei",
                sex: "women"
            }
        ]);
    });
    it("根据数组中对象的某个属性进行排序", function () {
        expect(xueUtilCollect.sortByfield([{
                id: "bob",
                name: "a"
            },
            {
                id: "alice",
                name: "b"
            },
            {
                id: "coco",
                name: "c"
            }
        ], "id", true, 1)).toEqual([{
                id: "alice",
                name: "b"
            },
            {
                id: "bob",
                name: "a"
            },
            {
                id: "coco",
                name: "c"
            }
        ]);
    });
    it("判断是几维数组,返回数组中最大的维度", function () {
        expect(xueUtilCollect.arrDimension([
            "a",
            ["b"],
            [
                ["c"]
            ]
        ])).toEqual(3);
    });
    it("获取字节长度", function () {
        expect(xueUtilCollect.getByteLen("abc中国")).toEqual(7);
    });
    it("按长度切割数组/字符串", function () {
        expect(xueUtilCollect.sliceByLen("高新兴科技股份有限公司", 3, true)).toEqual(["高新兴", "科技股", "份有限", "公司"]);
    });
});