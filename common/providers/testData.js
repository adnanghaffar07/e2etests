'use strict';
var UserData = function() {

    var _this = this;
    _this.data = {
        email: 'u2metest3@gmail.com',
        password: '$Abcd1234',
        invalidEmail: 'u2metes3@gmail.com',
        invalidPassword: 'tests$12',
        invalidFormatPassword: 'tests',
        invalidFormatEmail: 'testco',
        changePassword: '$Abc1234',
        invalidlongString: '1234 5678 910a bcde fghi.jklm nopq rstu vwxy.z123 4567' +
        ' 8910.abcd efgh ijkl mnop qrst uvwx yz.',
        specialCharacters: '\.[{(*+?^$|',
        htmlInput: '<p><span>this is test html</span></p>',
        script: '<script> var result = {};var elements = document.forms.foo.getElements' +
        'ByTagName("input");for(var i = 0; i < elements.length; i++){}</script>',
        minimumInteger: '0',
        maximumInteger: '1234567891011121314151617181920',
        positiveInteger: '123456789',
        negativeInteger: '-123456789',
        emptyInput: '  ',
        longInput: 'this is very long input.this is very long input.this is very' +
        ' long input.this is very long input.this is very long input.this is very long input.' +
        'this is very long input.this is very long input.this is very long input.this is very long input.',
    };
};

module.exports = new UserData();
