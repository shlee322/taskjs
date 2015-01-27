function AsyncObject() {
	this.task = null;
	this.results = null;
	this.error = null;
}

AsyncObject.prototype.setTask = function (task) {
	this.task = task;
}

function SingleAsyncObject() {
	this.task = null;
	this.is_done = 0;
	this.results = [];
	this.error = null;
}
SingleAsyncObject.prototype = AsyncObject.prototype;
SingleAsyncObject.prototype.setTask = function(task) {
	this.task = task;
	if(this.is_done != 1) return;
	this.is_done = 2;
	this.task.next();
}
SingleAsyncObject.prototype.callback = function() {
	var self = this;
	return function() {
		if(arguments.length > 0) {
			self.results = Array.prototype.slice.call(arguments, 1);
			self.error = arguments[0];
		}
		self.is_done = 1;
		self.setTask(self.task);
	}
}

function *callAsync(func) {
	var single_async_obj = new SingleAsyncObject();
	func(single_async_obj.callback());
	yield single_async_obj;
	if(single_async_obj.error) {
		throw single_async_obj.error;
	}
	return single_async_obj.results;
}

function *sleep(ms) {
	yield* callAsync(function(cb) {
		setTimeout(cb, ms);
	});
}


function Task(func, cb) {
	this.iterator = func();
	this.callback = cb;
}

Task.prototype.next = function () {
	var self = this;

	setTimeout(function() {
		var nextValue = {done:false};

		while(!nextValue.done) {
			nextValue = self.iterator.next();
			if(nextValue.value instanceof AsyncObject) {
				nextValue.value.setTask(self);
				return;
			}
		}

		if(nextValue.done && self.callback) {
			setTimeout(function() {
				self.callback();
			}, 0);
		}
	}, 0);
}

function spawn(func, cb) {
	var task = new Task(func, cb);
	task.next();
}

module.exports = {
	AsyncObject: AsyncObject,
	SingleAsyncObject: SingleAsyncObject,


	spawn: spawn,

	callAsync:callAsync,
	sleep: sleep
}
