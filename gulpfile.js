//This app can work in 2 mods : Development | Production

//Main module
import gulp from "gulp";
//Importing path
import { path } from "./gulp/config/path.js"
//Importing global plugins
import { plugins } from "./gulp/config/plugins.js"

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//Importing task
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"


//Watcher Function
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html)
//dev tasks
const dev = gulp.series(reset, mainTasks, watcher)

gulp.task('default', dev);