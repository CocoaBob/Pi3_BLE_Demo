var bleno = require('bleno');
var util = require('util');

var VibrationCharacteristic = require('./characteristics/VibrationCharacteristic');

function DeviceService() {
  bleno.PrimaryService.call(this, {
    uuid: 'fff0',
    characteristics: [
      new VibrationCharacteristic()
    ]
  });
};

util.inherits(DeviceService, bleno.PrimaryService);

module.exports = DeviceService;
