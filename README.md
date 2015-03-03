TaskJS
===================

[![npm package](https://nodei.co/npm/node-taskjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-taskjs/)

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
var task = require('node-taskjs');

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

```javascript
// request test

var task = require('node-taskjs');
var request = require('request');

task.spawn(function *() {
    try {
        var result = yield* request.task(null, 'http://www.google.com/asfdsdf');
        if (result[0].statusCode != 200) throw result[0].statusCode;
        console.log(result[1]);
    } catch (err) {
        //error
        console.log(err);
    }
});
```
