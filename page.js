var LoginPage = function() {
 this.register = element.all(by.buttonText('Register')).first();
 this.register_header = element(by.xpath('//h1[text()="Register at Heartbet"]'));
 this.EC = protractor.ExpectedConditions
 this.ph = element.all(by.xpath('//section[1]/form/fieldset[1]/div/div[2]/input'));
 this.ph_error = element(by.xpath('//section[1]/form/fieldset[1]/label'));
 this.passcode = element.all(by.model('user.password')).first();
 this.pass_error = element(by.xpath('//section[1]/form/fieldset[2]/label[2]'));
   
};
module.exports = new LoginPage();