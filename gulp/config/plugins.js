import replace from "gulp-replace" //search and replace
import plumber from "gulp-plumber" //error treatment
import notify from "gulp-notify"   //messages (lint)
import browsersync from "browser-sync"   //Local Server

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}