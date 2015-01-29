TaskJS
===================

ES6(iojs) generator base async module


APIs
===================

- `task.spawn(func, [callback[, error]]);`
- `task.sleep(ms)`
- `Function.task(thisObj, args...)`


Example
===================

```javascript
var fs = require('fs');
var task = require('task');


function * test_func() {
	console.log('test');
	yield* task.sleep(1000);
	console.log('test2');
	yield* task.sleep(1000);
	console.log('test3');
	yield* task.sleep(1000);
	console.log('test4');

	console.log(yield* fs.stat.task(null, '/tmp'));

	//try catch test
	try {
		console.log(yield* fs.stat.task(null, '---'));
	} catch (err) {
		console.log(err);
	}
}


task.spawn(test_func);
```

