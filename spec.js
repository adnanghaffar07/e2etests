// spec.js
var util = require('util');
describe('Verify Register at Heartbet page', function() {
var pageObject = require('./page.js');
var EC = protractor.ExpectedConditions
  beforeEach(function() {
    //browser.ignoreSynchronization = false;
    browser.driver.manage().window().maximize();
    browser.get('https://www.heartbet.com/home/start/');
  });
    
  it('Verify and input phone, passcode', function() {
    browser.wait(EC.presenceOf(pageObject.register), 1000);
    pageObject.register.click();
    expect(pageObject.register_header.getText()).toEqual('Register at Heartbet');
    pageObject.ph.sendKeys('456467322');
    pageObject.passcode.sendKeys('8797');
    expect(pageObject.ph_error.getText()).toEqual('Invalid phone number');
    pageObject.ph.sendKeys(protractor.Key.TAB);
    browser.wait(EC.presenceOf(pageObject.pass_error), 1000);
    //browser.pause();
    expect(pageObject.pass_error.getText()).toContain('Passcode must be at least 6 characters.');
  });
    
});