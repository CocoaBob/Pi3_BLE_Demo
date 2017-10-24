var bleno = require('bleno');
var util = require('util');

var vibrationCharacteristic = require('./VibrationCharacteristic');

function DeviceService() {
  bleno.PrimaryService.call(this, {
    uuid: 'fff0',
    characteristics: [vibrationCharacteristic]
  });
};

util.inherits(DeviceService, bleno.PrimaryService);

module.exports = new DeviceService();
