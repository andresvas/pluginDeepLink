var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.new_activity = function() {
    exec(function(res) {}, function(err) {}, "PluginDeepLink", "new_activity", []);
}

module.exports = new plugin();

/*exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'PluginDeepLink', 'coolMethod', [arg0]);
};*/