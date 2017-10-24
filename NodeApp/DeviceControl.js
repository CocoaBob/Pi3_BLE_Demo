var DeviceControl = function() {

};

DeviceControl.prototype.stopVibration = function () {
	console.log('- StopVibration');
};

DeviceControl.prototype.viberateContinuously = function (intensity) {
	console.log('- ViberateContinuously:\n  intensity =' + intensity);
};

DeviceControl.prototype.viberateInCycle = function (duration, startIntensity, middleIntensity, endIntensity, segmentRatioToMiddle, segmentRatioToEnd, shouldRepeat) {
  console.log('- VibrationInCycle:' +
  	'\n  duration = ' + duration + 
  	'\n  startIntensity = ' + startIntensity + 
  	'\n  middleIntensity = ' + middleIntensity + 
  	'\n  endIntensity = ' + endIntensity + 
  	'\n  segmentRatioToMiddle = ' + segmentRatioToMiddle + 
  	'\n  segmentRatioToEnd = ' + segmentRatioToEnd + 
  	'\n  shouldRepeat = ' + shouldRepeat);
};

module.exports = new DeviceControl();