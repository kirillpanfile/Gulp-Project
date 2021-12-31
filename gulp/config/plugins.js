import replace from "gulp-replace" //search and replace
import plumber from "gulp-plumber" //error treatment
import notify from "gulp-notify"   //messages (lint)
import browsersync from "browser-sync"   //Local Server
import newer from "gulp-newer"; // Update check
import ifPlugin from "gulp-if";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}