import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCSS from "gulp-clean-css"; //CSS Compression
import webpcss from "gulp-webpcss"; //Outputting webp images
import autoprefixer from "gulp-autoprefixer"; //Adding vendor prefixes
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Grouping media queries


const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                messages: "Error : <%= error.message%>",
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(sass({
            outputStyle: "expanded",
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(autoprefixer({
            grid: true,
            cascade: true,
            overrideBrowserslist: ["last 3 versions"]
        }))
        //? add this line if you want to see the css without compression/clean ->
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}