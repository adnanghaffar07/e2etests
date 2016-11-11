/**
 * Created by adnanghaffar on 08.
 */
'use strict';
var path = require('path');
var ProfileSettings = function() {

    var _this = this;
    _this.element = {
        homeLink: element(by.css('[ui-sref="splash"]')),
        whatWeDoLink: element.all(by.css('[ui-sref="what_we_do"]')).first(),
        howItWorksLink: element.all(by.css('[ui-sref="how_it_works"]')).first(),
        betaJoinLink: element.all(by.css('[ui-sref="beta"]')).first(),
        aboutUsLink: element.all(by.css('[ui-sref="about_us"]')).first(),
        disclaimerLink: element.all(by.css('[ui-sref="disclaimer"]')).first(),
        privacyPolicyLink: element.all(by.css('[ui-sref="privacy_policy"]')).first(),
        termsAndConditionsLink: element.all(by.css('[ui-sref="terms_and_conditions"]')).first(),
        alreadyHaveAnAccountLink: element(by.css('.f-padding a')),

        firstNameInput: element(by.css('#first_name')),
        lastNameInput: element(by.model('vm.profile.name.last_name')),
        websiteInput: element(by.model('vm.profile.bio.website')),
        statementInput: element(by.model('vm.profile.bio.statement')),
        descriptionInput: element(by.model('vm.profile.bio.description')),
        profileNameInput: element(by.model('vm.profile.username')),
        birthdateInput: element(by.model('inputModel')),
        countryChoices: element(by.model('vm.profile.country')),
        languageChoices: element(by.model('vm.profile.language')),
        currencyChoices: element(by.model('vm.profile.currency')),
        maleGenderInput: element(by.id('ups-1')),
        femaleGenderInput: element(by.css('.no-top-margin.radio-lbl')),
        imageSaveButton: element(by.css('[ng-click="editImage()"]')),
        imageUpload: element.all(by.css('input[type="file"]')).first(),
        saveButton: element(by.css('.btn-white-bg')),

        errorNotification: element(by.css('.toast-message')),
        addNotification: element(by.css('.toast-info')),

        returnImageAbsolutePath: function() {
            var fileToUpload = './../assets/sampleImage.jpg',
                imageAbsolutePath = path.resolve(__dirname, fileToUpload);
            return imageAbsolutePath;
        },

    };
};

module.exports = new ProfileSettings();
