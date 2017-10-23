var bleno = require('bleno');
var util = require('util');
var deviceControl = require('./DeviceControl');

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
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG);
  } else if (data.length <= 4) {
    callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
  } else {
    var c1 = data.readUInt8(0);
    var c2 = data.readUInt8(1);
    var c3 = data.readUInt8(2);
    var c4 = data.readUInt8(3);

    if (c1 === 0xFE && c2 === 0x04 && c3 === 0x53 && c4 === 0x45) {
      deviceControl.stopVibration();
    } if (c1 === 0xFE && c2 === 0x05 && c3 === 0x53 && c4 === 0x44) {
      var intensity = data.readUInt8(4);
      deviceControl.viberateContinuously(intensity);
    } if (c1 === 0xFE && c2 === 0x0C && c3 === 0x53 && c4 === 0x43) {
      var duration = data.readUInt8(4);
      var startIntensity = data.readUInt8(4);
      var middleIntensity = data.readUInt8(4);
      var endIntensity = data.readUInt8(4);
      var segmentRatioToMiddle = data.readUInt8(4);
      var segmentRatioToEnd = data.readUInt8(4);
      var shouldRepeat = data.readUInt8(4);
      deviceControl.viberateInCycle(duration,startIntensity,middleIntensity,endIntensity,segmentRatioToMiddle,segmentRatioToEnd,shouldRepeat);
    }

    callback(this.RESULT_SUCCESS);
  }
};

util.inherits(VibrationCharacteristic, BlenoCharacteristic);

module.exports = VibrationCharacteristic;
