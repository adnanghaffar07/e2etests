'use strict';

var url = requireProviders('url');
var passwordData = requireProviders('passwordData');
var changePasswordPage = requirePageObjects('page_changePassword');

describe('change password', function() {
    beforeEach(function() {
        browser.get(url.rootUrl + '/password');
        browser.waitForAngular();
    });

    it('should verify new password has wrong format and does not contain integers', function() {
        changePasswordPage.newPasswordInput.
            sendKeys(passwordData.data.invalidPasswordWithoutIntegers);
        expect(changePasswordPage.newPasswordInput.getAttribute('class')).
            toMatch('ng-invalid-numbers');
    });

    it('should verify new password has wrong format and does not contain upper case characters',
        function() {
            changePasswordPage.newPasswordInput.
                sendKeys(passwordData.data.invalidPasswordWithoutUpperCaseCharacters);
            expect(changePasswordPage.newPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-uppercase');
        });

    it('should verify new password has wrong format and does not contain lower case characters',
        function() {
            changePasswordPage.newPasswordInput.
                sendKeys(passwordData.data.invalidPasswordWithoutLowerCaseCharacters);
            expect(changePasswordPage.newPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-lowercase');
        });

    it('should verify new password has wrong format and contains only integers', function() {
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.invalidPasswordOnlyIntegers);
        expect(changePasswordPage.newPasswordInput.getAttribute('class')).
            toMatch('ng-invalid-lowercase ng-invalid-uppercase ng-invalid-specialchars');
    });

    it('should verify new password has wrong format and does not contain special character',
        function() {
            changePasswordPage.newPasswordInput.sendKeys(passwordData.data.
                invalidPasswordWithoutSpecialCharacter);
            expect(changePasswordPage.newPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-specialchars');
        });

    it('should verify new repeat password has wrong format and does not contain integers',
        function() {
            changePasswordPage.newRepeatPasswordInput.
                sendKeys(passwordData.data.invalidPasswordWithoutIntegers);
            expect(changePasswordPage.newRepeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-numbers');
        });

    it('should verify new repeat password has wrong format and does not ' +
        'contain upper case characters', function() {
        changePasswordPage.newRepeatPasswordInput.
            sendKeys(passwordData.data.invalidPasswordWithoutUpperCaseCharacters);
        expect(changePasswordPage.newRepeatPasswordInput.getAttribute('class')).
            toMatch('ng-invalid-uppercase');
    });

    it('should verify new repeat password has wrong format and does not contain' +
        ' lower case characters', function() {
        changePasswordPage.newRepeatPasswordInput.
            sendKeys(passwordData.data.invalidPasswordWithoutLowerCaseCharacters);
        expect(changePasswordPage.newRepeatPasswordInput.getAttribute('class')).
            toMatch('ng-invalid-lowercase');
    });

    it('should verify new repeat password has wrong format and contains only integers',
        function() {
            changePasswordPage.newRepeatPasswordInput.
                sendKeys(passwordData.data.invalidPasswordOnlyIntegers);
            expect(changePasswordPage.newRepeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-lowercase ng-invalid-uppercase ng-invalid-specialchars');
        });

    it('should verify new repeat password has wrong format and does not contain special character',
        function() {
            changePasswordPage.newRepeatPasswordInput.
                sendKeys(passwordData.data.invalidPasswordWithoutSpecialCharacter);
            expect(changePasswordPage.newRepeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-specialchars');
        });

    it('should verify new password for html input', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.currentPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.htmlInput);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify new repeat password for html input', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.currentPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.htmlInput);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify new password for script', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.currentPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.script);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify new repeat password for script', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.currentPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.script);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify password and repeat password does not match', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.currentPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.wrongPassword);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify current password is wrong', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.wrongPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.confirmPassword);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify new password is different from the old password', function() {
        changePasswordPage.currentPasswordInput.sendKeys(passwordData.data.currentPassword);
        changePasswordPage.newPasswordInput.sendKeys(passwordData.data.newPassword);
        changePasswordPage.newRepeatPasswordInput.sendKeys(passwordData.data.confirmPassword);
        changePasswordPage.saveChangesButton.click();
        expect(changePasswordPage.errorNotification.isPresent()).toBe(true);
    });

});
