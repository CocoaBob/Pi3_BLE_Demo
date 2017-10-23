module.exports.stopVibration = function () {
	console.log('StopVibration');
};

module.exports.viberateContinuously = function (intensity) {
	console.log('ViberateContinuously: intensity =' + intensity);
};

module.exports.vibrationInCycle = function (duration, startIntensity, segmentRatioToMiddle, middleIntensity, segmentRatioToEnd, endIntensity, shouldRepeat) {
  console.log('VibrationInCycle: ' +
  	'duration = ' + duration + 
  	'startIntensity = ' + startIntensity + 
  	'segmentRatioToMiddle = ' + segmentRatioToMiddle + 
  	'middleIntensity = ' + middleIntensity + 
  	'segmentRatioToEnd = ' + segmentRatioToEnd + 
  	'endIntensity = ' + endIntensity + 
  	'shouldRepeat = ' + shouldRepeat);
};