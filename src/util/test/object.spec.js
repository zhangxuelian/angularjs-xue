describe('object util', function () {
    var xueUtilObject;
    beforeEach(module('xue.util.object'));
    beforeEach(inject(function (_xueUtilObject_) {
        xueUtilObject = _xueUtilObject_;
    }));
    it('检查json中把空对象移除', function () {
        expect(xueUtilObject.removeEmptyField({
            name: 'Gosuncn',
            age: 23,
            address: ''
        })).toEqual({
            name: 'Gosuncn',
            age: 23
        });
    });
    it('检查json中把数组的对象中的空属性移除', function () {
        expect(xueUtilObject.removeEmptyParams([{
            name: 'Gosuncn',
            age: 23,
            address: ''
        }, {
            phone: '',
            tel: '13144566987'
        }])).toEqual([{
            name: 'Gosuncn',
            age: 23
        }, {
            tel: '13144566987'
        }]);
    });
    it('检查两个对象值是否相等', function () {
        var objA = {
            id: 1,
            name: 'Gosuncn',
            children: {
                age: 33
            }
        };
        var objB = {
            id: 1,
            name: 'Gosuncn',
            children: {
                age: 33
            }
        };
        expect(xueUtilObject.isObjectValueEqual(objA, objB)).toBeTruthy();
    });
    it('检查根据value找到对象的key路径值', function () {
        var obj = {
            id: 1,
            name: 'Gosuncn',
            children: {
                age: 33,
                address: {
                    pick: {
                        dog: '111',
                        cat: {
                            time: "78"
                        }
                    }
                }
            }
        };
        var value = "78";
        expect(xueUtilObject.searchKeys(obj, value)).toEqual(['children', 'address', 'pick', 'cat', 'time']);
    });
    it('检查根据key路径找到对象的value值', function () {
        var obj = {
            id: 1,
            name: 'Gosuncn',
            children: {
                age: 33,
                address: {
                    pick: {
                        dog: '111',
                        cat: {
                            time: "78"
                        }
                    }
                }
            }
        };
        var pathArr = ['children', 'address', 'pick', 'cat', 'time'];
        expect(xueUtilObject.findValByPath(obj, pathArr)).toEqual("78");
    });
    it('object键值对换', function () {
        var obj = {
            name: 'Gosuncn',
            age: '18',
            borth: 'jiangxi'
        };
        expect(xueUtilObject.reverseObject(obj)).toEqual({
            Gosuncn: 'name',
            18: 'age',
            jiangxi: 'borth'
        });
    });
});