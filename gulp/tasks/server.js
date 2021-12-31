const port = 3000;

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: true, // put false if you dont need notifications
        port: port
    })
}