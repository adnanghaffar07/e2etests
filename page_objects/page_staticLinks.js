
'use strict';
var StaticLinks = function() {

    var _this = this;
    _this.signInLink = element(by.css('[ui-sref="sign_in"]'));
    _this.signUpLink = element(by.css('[ui-sref="sign_up"]'));
    _this.homeLink = element.all(by.css('[ui-sref="splash"]')).first();
    _this.whatWeDoLink = element.all(by.css('[ui-sref="what_we_do"]')).first();
    _this.howItWorksLink = element(by.className('navbar-nav')).all(by.tagName('a')).get(2);
    _this.betaJoinLink = element.all(by.css('[ui-sref="beta"]')).first();
    _this.aboutUsLink = element.all(by.css('[ui-sref="about_us"]')).first();
    _this.disclaimerLink = element.all(by.css('[ui-sref="disclaimer"]')).first();
    _this.privacyPolicyLink = element.all(by.css('[ui-sref="privacy_policy"]')).first();
    _this.termsAndConditionsLink = element.all(by.css('[ui-sref="terms_and_conditions"]')).first();

    _this.cookiesNotificationWrapper = element(by.css('#cc-notification-wrapper>h2>span'));
    _this.cookiesCloseButton = element(by.css('#cc-approve-button-thissite'));
    _this.cookiesNotification = element(by.css('#cc-notification[style="display:block"]'));

};

module.exports = new StaticLinks();
