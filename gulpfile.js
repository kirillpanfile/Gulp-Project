//This app can work in 2 mods : Development | Production


//Main module
import gulp from "gulp";

//Importing path
import { path } from "./gulp/config/path.js"
import { reset } from "./gulp/tasks/reset.js"

global.app = {
    path: path,
    gulp: gulp,
}

//Importing task
import { copy } from "./gulp/tasks/copy.js";


//Watcher Function
function watcher() {
    gulp.watch(path.watch.files, copy)
}

//dev tasks
const dev = gulp.series(reset, copy, watcher)

gulp.task('default', dev);