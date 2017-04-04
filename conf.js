//config
exports.config = {

    onPrepare: function() {
        global.requireProviders = function(relativePath) {
            return require('./common/providers/' + relativePath + '.js');
        };

        global.requirePageObjects = function(relativePath) {
            return require('./page_objects/' + relativePath + '.js');
        };
    },

    framework: 'jasmine2',
    suites: {
        signUp: [
            'suites/functional/uc_su001_sign_up_by_email/uc_su001.spec.js',
            //'suites/functional/uc_su001_sign_up_by_email/uc_su001_001.spec.js',
        ],
        signIn: [
            'suites/functional/uc_si001_sign_in_by_email/uc_si001.spec.js',
            //'suites/functional/uc_si001_sign_in_by_email/static_links.spec.js',
        ],
        account: [
           // 'suites/functional/us_p001_change_sigin_password/uc_p001.spec.js',
            'suites/functional/uc_ps001_change_profile_setting/uc_ps001.spec.js',
        ],
    },
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 25000,
    },
};
