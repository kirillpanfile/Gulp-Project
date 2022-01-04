import gulpBemCss from "gulp-bem-css";
import del from "del";

export const bem = () => {
    return app.gulp.src(`${app.path.build.html}*.html`)
        .pipe(gulpBemCss({
            folder: 'src/scss/blocks', //folder for blocks
            extension: 'scss', //extension of stylesheet files
            elementSeparator: '__', // Element separator in class names
            modifierSeparator: '-' // Modifier separator in class names
        }))
        .pipe(app.plugins.browsersync.stream())
}
