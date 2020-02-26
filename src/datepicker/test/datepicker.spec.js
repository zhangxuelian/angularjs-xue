/* describe('datepicker directive', function () {
    var $compile, $rootScope, element;
    beforeEach(module('xue.datepicker'));
    beforeEach(module('xue/template/datepicker/datepicker.html'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.config = {
            format: "YYYY-MM-DD hh:mm:ss"
        };
        $rootScope.value = "2020-02-25 14:00:00";
        element = $compile('<xue-datepicker date-config="config" ng-val="value"></xue-datepicker>')($rootScope);
        $rootScope.$digest();
    }));
 
    it('has a "xui-datepicker-wrap" css class', function () {
        expect(false).toBe(false);
    });
}) */