var bleno = require('bleno');

console.log('Waiting for Bluetooth state change...');

var deviceService = require('./DeviceService');

bleno.on('accept', function(clientAddress) {
  console.log('-> accept: ' + clientAddress);
});

bleno.on('disconnect', function(clientAddress) {
  console.log('-> disconnect: ' + clientAddress);
});

bleno.on('stateChange', function(state) {
  console.log('-> stateChange: ' + state);
  if (state === 'poweredOn') {
    bleno.startAdvertising(bleno.name, [deviceService.uuid]);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
  console.log('-> advertisingStart: ' + (error ? 'error ' + error : 'success'));

  if (!error) {
    bleno.setServices([
      deviceService
    ]);
  }
});
