'use strict';

var url = requireProviders('url');
var profileSettingsData = requireProviders('profileSettingsData');
var profileSettingsPage = requirePageObjects('page_profileSettings');
var deferred = protractor.promise.defer();

describe('profile settings', function() {
    beforeEach(function() {
        browser.get(url.rootUrl + '/account');
        browser.waitForAngular();
    });

    it('should verify first name has empty value', function() {
        profileSettingsPage.element.firstNameInput.clear();
        expect(profileSettingsPage.element.firstNameInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify last name has empty value', function() {
        profileSettingsPage.element.lastNameInput.clear();
        expect(profileSettingsPage.element.lastNameInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify profile name has empty value', function() {
        profileSettingsPage.element.profileNameInput.clear();
        expect(profileSettingsPage.element.profileNameInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify statement has empty value', function() {
        profileSettingsPage.element.statementInput.clear();
        expect(profileSettingsPage.element.statementInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify birthdate has empty value', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.webUrl);
        profileSettingsPage.element.birthdateInput.clear();
        profileSettingsPage.element.saveButton.click();
        expect(profileSettingsPage.element.errorNotification.isPresent()).toBe(true);
    });

    it('should verify gender for male', function() {
        browser.actions().mouseMove(profileSettingsPage.element.maleGenderInput)
            .click().perform();
        profileSettingsPage.element.saveButton.click();
        expect(profileSettingsPage.element.maleGenderInput.isSelected()).
            toBe(true);
    });

    it('should verify website for wrong url', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.saveButton.click();
        expect(profileSettingsPage.element.errorNotification.isPresent()).toBe(true);
    });

    it('should verify maximum length for first name', function() {
        profileSettingsPage.element.firstNameInput.clear();
        profileSettingsPage.element.firstNameInput.
            sendKeys(profileSettingsData.data.randomValueMoreThen32);
        expect(profileSettingsPage.element.firstNameInput.getAttribute('value')).not.
            toEqual(profileSettingsData.data.randomValueMoreThen32);
    });

    it('should verify maximum length for last name', function() {
        profileSettingsPage.element.lastNameInput.clear();
        profileSettingsPage.element.lastNameInput.
            sendKeys(profileSettingsData.data.randomValueMoreThen32);
        expect(profileSettingsPage.element.lastNameInput.getAttribute('value')).not.
            toEqual(profileSettingsData.data.randomValueMoreThen32);
    });

    it('should verify maximum length for profile name', function() {
        profileSettingsPage.element.profileNameInput.clear();
        profileSettingsPage.element.profileNameInput.
            sendKeys(profileSettingsData.data.randomValueMoreThen32);
        expect(profileSettingsPage.element.profileNameInput.getAttribute('value')).not.
            toEqual(profileSettingsData.data.randomValueMoreThen32);
    });

    it('should verify country dropdown value', function() {
        profileSettingsPage.element.countryChoices.$('[value="string:ad"]').click();
        expect(profileSettingsPage.element.countryChoices.getAttribute('value')).
            toEqual(profileSettingsData.data.countryChoice);
    });

    it('should verify language dropdown value', function() {
        profileSettingsPage.element.languageChoices.$('[value="Italian"]').click();
        expect(profileSettingsPage.element.languageChoices.getAttribute('value')).
            toEqual(profileSettingsData.data.languageChoice);
    });

    it('should verify currency dropdown value', function() {
        profileSettingsPage.element.currencyChoices.$('[value="GBP"]').click();
        expect(profileSettingsPage.element.currencyChoices.getAttribute('value')).
            toEqual(profileSettingsData.data.currencyChoice);
    });

    it('should verify image upload', function() {
        var imagePromise = deferred.promise;
        profileSettingsPage.element.imageUpload.sendKeys(profileSettingsPage.element
            .returnImageAbsolutePath());
        imagePromise.then(function() {
            profileSettingsPage.element.imageSaveButton.click();
            profileSettingsPage.element.saveButton.click();
        });
    });

    it('should verify description for more than 200 characters ', function() {
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.
            sendKeys(profileSettingsData.data.randomValueMoreThen200);
        expect(profileSettingsPage.element.descriptionInput.getAttribute('class')).
            toMatch('ng-invalid-text');
    });

    it('should verify first name with empty value after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.url);
        profileSettingsPage.element.saveButton.click();
        profileSettingsPage.element.firstNameInput.clear();
        expect(profileSettingsPage.element.firstNameInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify last name with empty value after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.url);
        profileSettingsPage.element.saveButton.click();
        profileSettingsPage.element.lastNameInput.clear();
        expect(profileSettingsPage.element.lastNameInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify profile name with empty value after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.url);
        profileSettingsPage.element.saveButton.click();
        profileSettingsPage.element.profileNameInput.clear();
        expect(profileSettingsPage.element.profileNameInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify statement with empty value after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.url);
        profileSettingsPage.element.saveButton.click();
        profileSettingsPage.element.statementInput.clear();
        expect(profileSettingsPage.element.statementInput.getAttribute('class')).
            toMatch('ng-invalid-required');
    });

    it('should verify description with more then 200 characters after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.url);
        profileSettingsPage.element.saveButton.click();
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.
            sendKeys(profileSettingsData.data.randomValueMoreThen200);
        profileSettingsPage.element.saveButton.click();
        expect(profileSettingsPage.element.descriptionInput.getAttribute('class')).
            toMatch('ng-invalid-text');
    });

    it('should verify wrong url after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.
            sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.websiteInput.clear();
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.saveButton.click();
        expect(profileSettingsPage.element.errorNotification.isPresent()).toBe(true);
    });

    it('should verify birthdate with empty value after saving data', function() {
        profileSettingsPage.element.firstNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.lastNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.statementInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.descriptionInput.clear();
        profileSettingsPage.element.descriptionInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.profileNameInput.sendKeys(profileSettingsData.data.randomValue);
        profileSettingsPage.element.websiteInput.sendKeys(profileSettingsData.data.webUrl);
        profileSettingsPage.element.birthdateInput.sendKeys(profileSettingsData.data.date);
        profileSettingsPage.element.saveButton.click();
        profileSettingsPage.element.birthdateInput.clear();
        profileSettingsPage.element.saveButton.click();
        expect(profileSettingsPage.element.errorNotification.isPresent()).toBe(true);
    });

});
