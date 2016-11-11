'use strict';
var PasswordData = function() {

    var _this = this;
    _this.data = {
        currentPassword: '$Abcd1234',
        newPassword: '$Abcd1234',
        confirmPassword: '$Abcd1234',
        wrongPassword: '$Abcd12345',
        invalidPasswordWithoutLowerCaseCharacters: 'TESTS$123',
        invalidPasswordWithoutUpperCaseCharacters: 'tests$123',
        invalidPasswordOnlyIntegers: '12345678',
        invalidPasswordWithoutIntegers: 'TestsHere$',
        invalidPasswordWithoutSpecialCharacter: 'TestsHere1234',
        invalidFormatPassword: 'tests',
        htmlInput: '<p><span>This is test html&1</span></p>',
        script: '<script> var result = {};var elements = document.forms.foo.getElements&$' +
        'ByTagName("INPUT1");for(var i = 0; i < elements.length; i++){}</script>',
    };
};

module.exports = new PasswordData();
