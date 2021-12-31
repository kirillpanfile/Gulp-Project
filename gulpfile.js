//This app can work in 2 mods : Development | Production

//Main module
import gulp from "gulp";
//Importing path
import { path } from "./gulp/config/path.js"
//Importing global plugins
import { plugins } from "./gulp/config/plugins.js"

//Creating global app
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
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
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { bem } from "./gulp/tasks/bem.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";


//Watcher Function
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.html, bem)
}

//fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Main tasks
const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, scss, js, bem, images))

//Dev tasks || {reset, tasks, server, watcher}
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

export { dev }
export { build }

gulp.task('default', dev);