var PythonShell = require('python-shell');

var DeviceControl = function() {

};

DeviceControl.prototype.stopVibration = function () {
	console.log('- StopVibration');
};

DeviceControl.prototype.viberateContinuously = function (intensity) {
	console.log('- ViberateContinuously:\n  intensity =' + intensity);

  // https://github.com/extrabacon/python-shell

  // var options = {
  //   mode: 'text',
  //   pythonPath: 'path/to/python',
  //   pythonOptions: ['-u'],
  //   scriptPath: 'path/to/my/scripts',
  //   args: ['value1', 'value2', 'value3']
  // };

  // PythonShell.run('my_script.py', options, function (err, results) {
  //   if (err) throw err;
  // // results is an array consisting of messages collected during execution
  //   console.log('results: %j', results);
  // };
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