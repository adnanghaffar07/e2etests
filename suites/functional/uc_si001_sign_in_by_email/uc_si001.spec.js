'use strict';

var url = requireProviders('url');
var userData = requireProviders('testData');
var signInPage = requirePageObjects('page_signIn');

describe('sign in', function() {
    beforeEach(function() {
        browser.get(url.rootUrl);
        browser.waitForAngular();
    });

    it('should open sign in page', function() {
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after sign up page', function() {
        signInPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page, enter data, open signup page' +
        ' and then open sign in page', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.invalidFormatEmail);
        signInPage.passwordInput.sendKeys(userData.data.password);
        signInPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
        expect(signInPage.emailInput.getText()).toEqual('');
        expect(signInPage.passwordInput.getText()).toEqual('');
    });

    it('should verify sign in page after redirecting to sign in page from “Sign Up to U-2-Me”' +
        ' by clicking on already have an account link ', function() {
        signInPage.signInLink.click();
        signInPage.dontHaveAnAccountLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
        signInPage.alreadyHaveAnAccountLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should verify sign in page after redirecting to sign in page from forgot password page',
        function() {
        signInPage.signInLink.click();
        signInPage.forgotPasswordLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/request_password');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after dont have account page', function() {
        signInPage.signInLink.click();
        signInPage.dontHaveAnAccountLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after what we do page', function() {
        signInPage.whatWeDoLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/what_we_do');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after how it works page', function() {
        signInPage.howItWorksLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/how_it_works');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after beta join page', function() {
        signInPage.betaJoinLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/beta');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after about us page', function() {
        signInPage.aboutUsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/about_us');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after disclaimer page', function() {
        signInPage.disclaimerLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/disclaimer');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after privacy policy page', function() {
        signInPage.privacyPolicyLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/privacy_policy');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign in page after terms and conditions page', function() {
        signInPage.termsAndConditionsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/terms_and_conditions');
        signInPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should verify email has wrong format', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.invalidFormatEmail);
        signInPage.passwordInput.sendKeys(userData.data.password);
        expect(signInPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password has wrong format', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.invalidFormatPassword);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify with valid email and wrong password', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.invalidPassword);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify with wrong email and valid password', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.invalidEmail);
        signInPage.passwordInput.sendKeys(userData.data.password);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email for invalid long string', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.invalidlongString);
        signInPage.passwordInput.sendKeys(userData.data.password);
        expect(signInPage.emailInput.getAttribute('value')).
            toEqual(userData.data.invalidlongString);
        expect(signInPage.passwordInput.getAttribute('value')).
            toEqual(userData.data.password);
        signInPage.loginButton.click();
        expect(signInPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password for invalid long string', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.invalidlongString);
        expect(signInPage.emailInput.getAttribute('value')).
            toEqual(userData.data.email);
        expect(signInPage.passwordInput.getAttribute('value')).
            toEqual(userData.data.invalidlongString);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email for html input', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.htmlInput);
        signInPage.passwordInput.sendKeys(userData.data.password);
        expect(signInPage.emailInput.getAttribute('value')).toEqual(userData.data.htmlInput);
        expect(signInPage.passwordInput.getAttribute('value')).toEqual(userData.data.password);
        signInPage.loginButton.click();
        expect(signInPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password for html input', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.htmlInput);
        expect(signInPage.emailInput.getAttribute('value')).toEqual(userData.data.email);
        expect(signInPage.passwordInput.getAttribute('value')).toEqual(userData.data.htmlInput);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email for script', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.script);
        signInPage.passwordInput.sendKeys(userData.data.password);
        expect(signInPage.emailInput.getAttribute('value')).toEqual(userData.data.script);
        expect(signInPage.passwordInput.getAttribute('value')).toEqual(userData.data.password);
        signInPage.loginButton.click();
        expect(signInPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password for script', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.script);
        expect(signInPage.emailInput.getAttribute('value')).toEqual(userData.data.email);
        expect(signInPage.passwordInput.getAttribute('value')).toEqual(userData.data.script);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify sign in for empty email', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.emptyInput);
        signInPage.passwordInput.sendKeys(userData.data.password);
        signInPage.loginButton.click();
        expect(signInPage.signInForm.getAttribute('class')).toMatch('ng-submitted');
    });

    it('should verify sign in for empty password', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.emptyInput);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email for wrong long input', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.longInput);
        signInPage.passwordInput.sendKeys(userData.data.password);
        expect(signInPage.emailInput.getAttribute('value')).toEqual(userData.data.longInput);
        expect(signInPage.passwordInput.getAttribute('value')).toEqual(userData.data.password);
        signInPage.loginButton.click();
        expect(signInPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password for wrong long input', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.longInput);
        expect(signInPage.emailInput.getAttribute('value')).toEqual(userData.data.email);
        expect(signInPage.passwordInput.getAttribute('value')).toEqual(userData.data.longInput);
        signInPage.loginButton.click();
        expect(signInPage.errorNotification.isPresent()).toBe(true);
    });

    it('should sign in', function() {
        signInPage.signInLink.click();
        signInPage.emailInput.sendKeys(userData.data.email);
        signInPage.passwordInput.sendKeys(userData.data.password);
        signInPage.loginButton.click();
        expect(browser.getLocationAbsUrl()).toMatch('/dashboard');
    });

});
