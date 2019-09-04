cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  },
  {
    "id": "cordova-plugin-drawoverapps.DrawOverApps",
    "file": "plugins/cordova-plugin-drawoverapps/www/OverApps.js",
    "pluginId": "cordova-plugin-drawoverapps",
    "clobbers": [
      "window.overApps"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.3",
  "cordova-plugin-background-mode": "0.7.3",
  "cordova-plugin-drawoverapps": "1.0.6"
};
// BOTTOM OF METADATA
});