/**
 * Created by adnanghaffar on 08/2016.
 */
'use strict';
var ChangePassword = function() {

    var _this = this;
    _this.currentPasswordInput = element(by.model('vm.credentials.current_password'));
    _this.newPasswordInput = element(by.model('vm.credentials.new_password'));
    _this.newRepeatPasswordInput = element(by.model('vm.credentials.new_password_repeat'));
    _this.saveChangesButton = element(by.className('btn-white-bg'));

    _this.errorNotification = element(by.css('.toast-message'));
};

module.exports = new ChangePassword();
