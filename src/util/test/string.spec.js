describe('string util', function () {
    var xueUtilString;
    beforeEach(module('xue.util.string'));
    beforeEach(inject(function(_xueUtilString_){
        xueUtilString = _xueUtilString_;
    }));
    it("首字母为小写", function() {
        expect(xueUtilString.capitalize('CAPITALIZE')).toBe('Capitalize');
        expect(xueUtilString.capitalize()).toBe('');
    });
    it("字符串string是否含有target字符串", function() {
        expect(xueUtilString.endsWith('abc','b')).toBe(true);
        expect(xueUtilString.endsWith('abc','b',1)).toBe(true);
        expect(xueUtilString.endsWith('abc','b',2)).toBe(false);
    });
    it("字符串string以单词分开", function() {
        expect(xueUtilString.lowerCase('--Foo-Bar--')).toEqual(['Foo','Bar']);
        expect(xueUtilString.lowerCase('fooBar')).toEqual(['foo','Bar']);
    });
    it("字符串string头部/尾部补充", function() {
        expect(xueUtilString.padChars('abc', 6, 'start')).toBe('   abc');
        expect(xueUtilString.padChars('abc', 6, 'start', 'x')).toBe('xxxabc');
        expect(xueUtilString.padChars('abc', 3, 'start', 'x')).toBe('abc');
        expect(xueUtilString.padChars('abc', 4, 'start', 'qw')).toBe('qabc');
        expect(xueUtilString.padChars('abc', 6, 'end')).toBe('abc   ');
        expect(xueUtilString.padChars('abc', 4, 'end', 'qw')).toBe('abcq');
    });
    it("格式化文字,尾部省略", function() {
        expect(xueUtilString.formatterText('格式化文字,尾部省略',7)).toBe('格式化文字,尾...');
    });
    it("格式化文字,中间省略", function() {
        expect(xueUtilString.formatLongText('同是天涯他沦落人，相逢何必曾相识',5)).toBe('同是天涯他...何必曾相识');
    }); 
    it("获取字节长度", function() {
        expect(xueUtilString.getByteLen('同是天涯他沦落人')).toBe(16);
        expect(xueUtilString.getByteLen('getByteLen')).toBe(10);
    }); 
    it("重复 N 次给定字符串", function() {
        expect(xueUtilString.repeat('*', 3)).toBe('***');
        expect(xueUtilString.repeat('abc', 0)).toBe('');
    }); 
    it("根据cahr拆分字符串", function() {
        expect(xueUtilString.split('a-b-c', '-', 2)).toEqual(['a','b']);
        expect(xueUtilString.split('a-b-c', '-')).toEqual(['a','b','c']);
    }); 
    it("移除字符串后面的指定字符或空格", function() {
        expect(xueUtilString.replaceEnd('  abc  ')).toBe('  abc');
        expect(xueUtilString.replaceEnd('-_-abc-_-', '_-')).toBe('-_-abc');
        expect(xueUtilString.replaceEnd('a')).toBe('a');
    }); 
    it("移除字符串前面的指定字符或空格", function() {
        expect(xueUtilString.replaceStrat('  abc  ')).toBe('abc  ');
        expect(xueUtilString.replaceStrat('-_-abc-_-', '_-')).toBe('abc-_-');
        expect(xueUtilString.replaceStrat('a')).toBe('a');
    }); 
});