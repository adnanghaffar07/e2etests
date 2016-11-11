'use strict';
var SignUpData = function() {

    var _this = this;
    _this.data = {
        email: 'test@mailinator.com',
        existingEmail: 'u2metest3@gmail.com',
        password: '$Abcd1234',
        passwordTwo: '$Abcd12345',
        invalidPasswordWithoutLowerCaseCharacters: 'TESTS$123',
        invalidPasswordWithoutUpperCaseCharacters: 'tests$123',
        invalidPasswordOnlyIntegers: '12345678',
        invalidPasswordWithoutIntegers: 'TestsHere$',
        invalidPasswordWithoutSpecialCharacter: 'TestsHere1234',
        invalidFormatEmail: 'testco',
        changePassword: '$Abc1234',
        specialCharacters: '\.[{(*+?^$|',
        htmlInput: '<p><span>This is test html&1</span></p>',
        script: '<script> var result = {};var elements = document.forms.foo.getElements&$' +
        'ByTagName("INPUT1");for(var i = 0; i < elements.length; i++){}</script>',
        minimumInteger: '0',
        maximumInteger: '1234567891011121314151617181920',
        positiveInteger: '123456789',
        negativeInteger: '-123456789',
        emptyInput: '  ',
    };
};

module.exports = new SignUpData();
