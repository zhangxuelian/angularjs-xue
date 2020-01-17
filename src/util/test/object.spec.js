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
});