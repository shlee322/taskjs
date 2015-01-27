var fs = require('fs');
var task = require('task');

fs.statTask = function *(path) {
	return yield* task.callAsync(function(cb){
		fs.stat(path, cb);
	});
}
