'use strict';

var url = requireProviders('url');
var pageStaticLinks = requirePageObjects('page_staticLinks');

describe('static link', function() {
    beforeEach(function() {
        browser.get(url.rootUrl);
        browser.waitForAngular();
    });

    it('should open home page', function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(pageStaticLinks.homeLink), 5000);
        pageStaticLinks.homeLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/splash');
    });

    it('should open what we do page', function() {
        pageStaticLinks.whatWeDoLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/what_we_do');
    });

    it('should open how it works page', function() {
        pageStaticLinks.howItWorksLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/how_it_works');
    });

    it('should open beta join page', function() {
        pageStaticLinks.betaJoinLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/beta');
    });

    it('should open about us page', function() {
        pageStaticLinks.aboutUsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/about_us');
    });

    it('should open disclaimer page', function() {
        pageStaticLinks.disclaimerLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/disclaimer');
    });

    it('should open privacy policy page', function() {
        pageStaticLinks.privacyPolicyLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/privacy_policy');
    });

    it('should open terms and conditions page', function() {
        pageStaticLinks.termsAndConditionsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/terms_and_conditions');
    });

    it('should open privacy policy page after terms and conditions page ', function() {
        pageStaticLinks.termsAndConditionsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/terms_and_conditions');
        pageStaticLinks.privacyPolicyLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/privacy_policy');
    });

    it('should open disclaimer page after terms and conditions page ', function() {
        pageStaticLinks.termsAndConditionsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/terms_and_conditions');
        pageStaticLinks.disclaimerLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/disclaimer');
    });

    it('should open what we do page after terms and conditions page ', function() {
        pageStaticLinks.termsAndConditionsLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/terms_and_conditions');
        pageStaticLinks.whatWeDoLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/what_we_do');
    });

    it('should open how it works page after what we do page ', function() {
        pageStaticLinks.whatWeDoLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/what_we_do');
        pageStaticLinks.howItWorksLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/how_it_works');
    });

});
