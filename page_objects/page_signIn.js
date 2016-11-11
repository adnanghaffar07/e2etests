/**
 * Created by adnanghaffar on 08.
 */
'use strict';
var SignIn = function() {

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
    _this.dontHaveAnAccountLink = element(by.css('.f-padding a'));
    _this.alreadyHaveAnAccountLink = element(by.css('.f-padding a'));
    _this.forgotPasswordLink = element(by.className('s-forgot-password'));

    _this.emailInput = element(by.model('vm.credentials.email'));
    _this.passwordInput = element(by.model('vm.credentials.password'));
    _this.loginButton = element(by.className('btn-login-mobile'));
    _this.signInForm = element(by.className('login_form'));

    _this.cookiesNotificationWrapper = element(by.css('#cc-notification-wrapper>h2>span'));
    _this.cookiesCloseButton = element(by.css('#cc-approve-button-thissite'));
    _this.cookiesNotification = element(by.css('#cc-notification[style="display:block"]'));
    _this.errorNotification = element(by.css('.toast-message'));

};

module.exports = new SignIn();
