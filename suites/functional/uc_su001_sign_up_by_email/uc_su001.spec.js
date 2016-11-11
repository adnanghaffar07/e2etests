'use strict';

var url = requireProviders('url');
var signUpData = requireProviders('signUpData');
var signUpPage = requirePageObjects('page_signup');

describe('sign up', function() {
    beforeEach(function() {
        browser.get(url.rootUrl);
        browser.waitForAngular();
    });

    it('should verify cookies notification', function() {
        signUpPage.cookiesCloseButton.isDisplayed().then(function(isVisible) {
            if (isVisible) {
                var notification = signUpPage.cookiesNotificationWrapper.getText();
                expect(notification.getAttribute('value'));
                signUpPage.cookiesCloseButton.click();
                expect(signUpPage.cookiesNotification.isPresent()).toBe(false);
            }
        });
    });
    it('should open sign up page', function() {
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after sign in page', function() {
        signUpPage.signInLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page and then already have an account (sign in) page', function() {
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
        signUpPage.alreadyHaveAnAccountLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_in');
    });

    it('should open sign up page after what we do page', function() {
        signUpPage.whatWeDoLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/what_we_do');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after how it works page', function() {
        signUpPage.howItWorksLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/how_it_works');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after beta join page', function() {
        signUpPage.betaJoinLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/beta');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after about us page', function() {
        signUpPage.aboutUsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/about_us');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after disclaimer page', function() {
        signUpPage.disclaimerLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/disclaimer');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after privacy policy page', function() {
        signUpPage.privacyPolicyLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/privacy_policy');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should open sign up page after terms and conditions page', function() {
        signUpPage.termsAndConditionsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/terms_and_conditions');
        signUpPage.signUpLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/sign_up');
    });

    it('should verify email has wrong format', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpData.data.invalidFormatEmail);
        expect(signUpPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password has wrong format and does not contain integers', function() {
        signUpPage.signUpLink.click();
        signUpPage.passwordInput.sendKeys(signUpData.data.invalidPasswordWithoutIntegers);
        expect(signUpPage.passwordInput.getAttribute('class')).toMatch('ng-invalid-numbers');
    });

    it('should verify password has wrong format and does not contain upper case characters',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.passwordInput.
                sendKeys(signUpData.data.invalidPasswordWithoutUpperCaseCharacters);
            expect(signUpPage.passwordInput.getAttribute('class')).toMatch('ng-invalid-uppercase');
        });

    it('should verify password has wrong format and does not contain lower case characters',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.passwordInput.
                sendKeys(signUpData.data.invalidPasswordWithoutLowerCaseCharacters);
            expect(signUpPage.passwordInput.getAttribute('class')).toMatch('ng-invalid-lowercase');
        });

    it('should verify password has wrong format and contains only integers', function() {
        signUpPage.signUpLink.click();
        signUpPage.passwordInput.sendKeys(signUpData.data.invalidPasswordOnlyIntegers);
        expect(signUpPage.passwordInput.getAttribute('class')).
            toMatch('ng-invalid-lowercase ng-invalid-uppercase ng-invalid-specialchars');
    });

    it('should verify password has wrong format and does not contain special character',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.passwordInput.sendKeys(signUpData.data.
                invalidPasswordWithoutSpecialCharacter);
            expect(signUpPage.passwordInput.getAttribute('class')).
                toMatch('ng-invalid-specialchars');
        });

    it('should verify repeat password has wrong format and does not contain integers',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.repeatPasswordInput.
                sendKeys(signUpData.data.invalidPasswordWithoutIntegers);
            expect(signUpPage.repeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-numbers');
        });

    it('should verify repeat password has wrong format and does not contain upper case characters',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.repeatPasswordInput.
                sendKeys(signUpData.data.invalidPasswordWithoutUpperCaseCharacters);
            expect(signUpPage.repeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-uppercase');
        });

    it('should verify repeat password has wrong format and does not contain lower case characters',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.repeatPasswordInput.
                sendKeys(signUpData.data.invalidPasswordWithoutLowerCaseCharacters);
            expect(signUpPage.repeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-lowercase');
        });

    it('should verify repeat password has wrong format and contains only integers', function() {
        signUpPage.signUpLink.click();
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.invalidPasswordOnlyIntegers);
        expect(signUpPage.repeatPasswordInput.getAttribute('class')).
            toMatch('ng-invalid-lowercase ng-invalid-uppercase ng-invalid-specialchars');
    });

    it('should verify repeat password has wrong format and does not contain special character',
        function() {
            signUpPage.signUpLink.click();
            signUpPage.repeatPasswordInput.
                sendKeys(signUpData.data.invalidPasswordWithoutSpecialCharacter);
            expect(signUpPage.repeatPasswordInput.getAttribute('class')).
                toMatch('ng-invalid-specialchars');
        });

    it('should verify password and repeat password does not match', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.password);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.passwordTwo);
        signUpPage.signUpButton.click();
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email already exist', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpData.data.existingEmail);
        signUpPage.passwordInput.sendKeys(signUpData.data.password);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.password);
        signUpPage.signUpButton.click();
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email for html input', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpData.data.htmlInput);
        expect(signUpPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password for html input', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpPage.getRandomNum() + signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.htmlInput);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.password);
        signUpPage.signUpButton.click();
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify repeat password for html input', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpPage.getRandomNum() + signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.password);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.htmlInput);
        signUpPage.signUpButton.click();
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify email for script', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpData.data.script);
        expect(signUpPage.emailInput.getAttribute('value')).toEqual(signUpData.data.script);
        expect(signUpPage.emailInput.getAttribute('class')).toMatch('ng-invalid-email');
    });

    it('should verify password for script', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpPage.getRandomNum() + signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.script);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.password);
        signUpPage.signUpButton.click();
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify repeat password for script', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpPage.getRandomNum() + signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.password);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.script);
        signUpPage.signUpButton.click();
        expect(signUpPage.errorNotification.isPresent()).toBe(true);
    });

    it('should verify sign up for empty email', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpData.data.emptyInput);
        signUpPage.signUpButton.click();
        expect(signUpPage.emailInput.getAttribute('class')).toMatch('ng-invalid-required');
    });

    it('should verify sign up for empty password', function() {
        signUpPage.signUpLink.click();
        signUpPage.passwordInput.sendKeys(signUpData.data.emptyInput);
        signUpPage.signUpButton.click();
        expect(signUpPage.passwordInput.getAttribute('class')).toMatch('ng-invalid-short_password');
    });

    it('should verify sign up for empty repeat password', function() {
        signUpPage.signUpLink.click();
        signUpPage.passwordInput.sendKeys(signUpData.data.emptyInput);
        signUpPage.signUpButton.click();
        expect(signUpPage.passwordInput.getAttribute('class')).toMatch('ng-invalid-short_password');
    });

    it('should sign up', function() {
        signUpPage.signUpLink.click();
        signUpPage.emailInput.sendKeys(signUpPage.getRandomNum() + signUpData.data.email);
        signUpPage.passwordInput.sendKeys(signUpData.data.password);
        signUpPage.repeatPasswordInput.sendKeys(signUpData.data.password);
        signUpPage.signUpButton.click();
        expect(browser.getLocationAbsUrl()).toMatch('/activate');
    });
});
