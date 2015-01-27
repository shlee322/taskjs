TaskJs
===================

ES6(iojs) generator base async module



Example
===================

```javascript
var fs = require('fs');
var task = require('task');
require('task/modules/fs'); // file system


task.spawn(function *() {
	console.log('test');
	yield* task.sleep(1000);
	console.log('test2');

	console.log(yield* fs.statTask('/tmp'));
	try {
		console.log(yield* fs.statTask('---'));
	} catch (err) {
		console.log(err);
	}
});
```

