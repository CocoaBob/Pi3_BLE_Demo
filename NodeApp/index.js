var bleno = require('bleno');

console.log('Waiting for Bluetooth state change...');

var DeviceService = require('./DeviceService');

var deviceService = new DeviceService();

bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);
  if (state === 'poweredOn') {
    bleno.startAdvertising(bleno.name, [deviceService.uuid]);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
  console.log('on -> advertisingStart: ' +
    (error ? 'error ' + error : 'success')
  );

  if (!error) {
    bleno.setServices([
      deviceService
    ]);
  }
});
