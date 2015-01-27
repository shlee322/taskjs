TaskJs
===================

ES6(iojs) generator base async module



Example
===================

```javascript
var fs = require('fs');
var task = require('task');
require('task/modules/fs'); // file system


function * test_func() {
	console.log('test');
	yield* task.sleep(1000);
	console.log('test2');
	yield* task.sleep(1000);
	console.log('test3');
	yield* task.sleep(1000);
	console.log('test4');

	console.log(yield* fs.statTask('/tmp'));

	//try catch test
	try {
		console.log(yield* fs.statTask('---'));
	} catch (err) {
		console.log(err);
	}
}


task.spawn(test_func);
```

