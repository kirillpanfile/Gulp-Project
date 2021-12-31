//This app can work in 2 mods : Development | Production

//Main module
import gulp from "gulp";
//Importing path
import { path } from "./gulp/config/path.js"
//Importing global plugins
import { plugins } from "./gulp/config/plugins.js"

//Creating global app
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//Importing task
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";


//Watcher Function
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
}

//Main taska
const mainTasks = gulp.parallel(copy, html, scss)

//Dev tasks || {reset, tasks, server, watcher}
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev);