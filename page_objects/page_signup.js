/**
 * Created by adnanghaffar on 08.
 */
'use strict';
var SignUp = function() {

    var _this = this;
    _this.signInLink = element(by.css('[ui-sref="sign_in"]'));
    _this.signUpLink = element(by.css('[ui-sref="sign_up"]'));
    _this.homeLink = element(by.css('[ui-sref="splash"]'));
    _this.whatWeDoLink = element.all(by.css('[ui-sref="what_we_do"]')).first();
    _this.howItWorksLink = element.all(by.css('[ui-sref="how_it_works"]')).first();
    _this.betaJoinLink = element.all(by.css('[ui-sref="beta"]')).first();
    _this.aboutUsLink = element.all(by.css('[ui-sref="about_us"]')).first();
    _this.disclaimerLink = element.all(by.css('[ui-sref="disclaimer"]')).first();
    _this.privacyPolicyLink = element.all(by.css('[ui-sref="privacy_policy"]')).first();
    _this.termsAndConditionsLink = element.all(by.css('[ui-sref="terms_and_conditions"]')).first();
    _this.alreadyHaveAnAccountLink = element(by.css('.f-padding a'));

    _this.emailInput = element(by.model('vm.credentials.email'));
    _this.passwordInput = element(by.model('vm.credentials.password'));
    _this.repeatPasswordInput = element(by.model('vm.credentials.repeat_password'));
    _this.signUpButton = element(by.id('signup-bttn'));
    _this.signUpForm = element(by.className('login_form'));

    _this.clickHereToJoinLink = element.all(by.css('[ui-sref="sign_up"]')).get(1);
    _this.validationCodeInput = element(by.model('vm.credentials.code'));
    _this.forgotPasswordLink = element(by.css('[ui-sref="request_password"]'));
    _this.sendVerificationCodeAgainLink = element(by.css('[ng-click="vm.showResendValidation()"]'));
    _this.sendVerificationCodeAgainButton = element(by.css
    ('[ng-click="vm.resendValidationCode(form.$valid)"]'));
    _this.returnToHomePageLink = element(by.css('[ng-click="vm.hideResendValidation()"]'));
    _this.signInButtonForValidation = element(by.css
    ('[ng-click="vm.activateAccount(form.$valid)"]'));

    _this.cookiesNotificationWrapper = element(by.css('#cc-notification-wrapper>h2>span'));
    _this.cookiesCloseButton = element(by.css('#cc-approve-button-thissite'));
    _this.cookiesNotification = element(by.css('#cc-notification[style="display:block"]'));
    _this.errorNotification = element(by.css('.toast-message'));

    _this.getRandomNum = function() {
        return parseInt(Math.floor(499 * Math.random() + 11));
    };
};

module.exports = new SignUp();
