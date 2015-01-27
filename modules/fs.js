var fs = require('fs');
var task = require('task');



fs.renameTask = task.convertAsyncFunc(fs.rename);
fs.ftruncateTask = task.convertAsyncFunc(fs.ftruncate);
fs.truncateTask = task.convertAsyncFunc(fs.truncate);
fs.chownTask = task.convertAsyncFunc(fs.chown);
fs.fchownTask = task.convertAsyncFunc(fs.fchown);
fs.lchownTask = task.convertAsyncFunc(fs.lchown);
fs.chmodTask = task.convertAsyncFunc(fs.chmod);
fs.fchmodTask = task.convertAsyncFunc(fs.fchmod);
fs.lchmodTask = task.convertAsyncFunc(fs.lchmod);
fs.statTask = task.convertAsyncFunc(fs.stat);
fs.lstatTask = task.convertAsyncFunc(fs.lstat);
fs.fstatTask = task.convertAsyncFunc(fs.fstat);
fs.linkTask = task.convertAsyncFunc(fs.link);
fs.symlinkTask = task.convertAsyncFunc(fs.symlink);
fs.readlinkTask = task.convertAsyncFunc(fs.readlink);
fs.realpathTask = task.convertAsyncFunc(fs.realpath);
fs.unlinkTask = task.convertAsyncFunc(fs.unlink);
fs.rmdirTask = task.convertAsyncFunc(fs.rmdir);
fs.mkdirTask = task.convertAsyncFunc(fs.mkdir);
fs.readdirTask = task.convertAsyncFunc(fs.readdir);
fs.closeTask = task.convertAsyncFunc(fs.close);
fs.openTask = task.convertAsyncFunc(fs.open);
fs.utimesTask = task.convertAsyncFunc(fs.utimes);
fs.futimesTask = task.convertAsyncFunc(fs.futimes);
fs.fsyncTask = task.convertAsyncFunc(fs.fsync);
fs.writeTask = task.convertAsyncFunc(fs.write);
fs.readTask = task.convertAsyncFunc(fs.read);
fs.readFileTask = task.convertAsyncFunc(fs.readFile);
fs.writeFileTask = task.convertAsyncFunc(fs.writeFile);
fs.appendFileTask = task.convertAsyncFunc(fs.appendFile);
