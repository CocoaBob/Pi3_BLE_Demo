var bleno = require('bleno');
var util = require('util');

var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

var VibrationCharacteristic = function() {
 VibrationCharacteristic.super_.call(this, {
  uuid: 'fff1',
  properties: ['read', 'write'],
  descriptors: [
    new BlenoDescriptor({
      uuid: 'fff1',
      value: 'Vibration Control'
    })
  ]
});

 this._value = new Buffer(0);
};

VibrationCharacteristic.prototype.onReadRequest = function(offset, callback) {
  console.log('VibrationCharacteristic - onReadRequest: value = ' + this._value.toString('hex'));

  callback(this.RESULT_SUCCESS, this._value);
};

VibrationCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  console.log('VibrationCharacteristic - onWriteRequest: value = ' + this._value.toString('hex'));

  callback(this.RESULT_SUCCESS);
};

util.inherits(VibrationCharacteristic, BlenoCharacteristic);

module.exports = VibrationCharacteristic;
