'use strict';
var url = requireProviders('url');
var signUpData = requireProviders('signUpData');
var signUpPage = requirePageObjects('page_signup');

describe('activate with verification', function() {
    beforeEach(function() {
        browser.get(url.rootUrl + '/activate');
        browser.waitForAngular();
    });

    it('should verify email has wrong format', function() {
        signUpPage.emailInput.sendKeys(signUpData.data.invalidFormatEmail);
        expect(signUpPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should open forgot password page', function() {
        signUpPage.forgotPasswordLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/request_password');
    });

    it('should verify wrong verification code', function() {
        signUpPage.emailInput.sendKeys(signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.password);
        signUpPage.validationCodeInput.sendKeys(signUpData.data.password);
        browser.ignoreSynchronization = true;
        signUpPage.signInButtonForValidation.click();
        browser.ignoreSynchronization = false;
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should open resend verification code page', function() {
        signUpPage.sendVerificationCodeAgainLink.click();
        expect(signUpPage.sendVerificationCodeAgainButton.isPresent()).toBe(true);
    });

    it('should open resend verification code page and then again verification activate page',
        function() {
        signUpPage.sendVerificationCodeAgainLink.click();
        signUpPage.returnToHomePageLink.click();
        expect(signUpPage.validationCodeInput.isPresent()).toBe(true);

    });

    it('should verify click here to join page', function() {
        signUpPage.clickHereToJoinLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');

    });
});
