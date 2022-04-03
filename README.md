#  Gulp Project - Best Gulp Starter  💻 

I Hope Gulp Project Will Save You A Lot Of Time.
Thank You For Supporting Free Learning Content! :tw-1f4af:

------------

**Terminal commands**

Installation:  `npm i` ||  `yarn` || `npm i --legacy-peer-deps`
* the --legacy-peer-deps flag will allow installation to continue if an
dependency conflicts (package versions).


------------


>Launch developer mode (with server launch)

`npm rundev`

------------


> Launch project build (no server launch, final build only)
Launching the project build and uploading the result to the server via FTP. (without running a local server)

`npm run build`

------------


> Launch project build (no server launch, final build only)
Launching the project build and uploading the result to the server via FTP. (without running a local server)
>>The FTP configuration is in config/gulp-settings.js

`npm run deploy`

------------


> Launching the build of the project and creating a zip archive with the name of the project. (without running a local server)
Launching the project build but without creating webp images. (no server launch, final build only)

`npm run zip`

------------


> Launching the build of the project and creating a zip archive with the name of the project. (without running a local server)
Launching the project build but without creating webp images. (no server launch, final build only)

`npm run devbuild`

------------


> Start creating an SVG sprite. Icons should be placed in the src/svgicons folder,
the finished sprite will appear in the src/img/icons/icons.svg folder
>>Changes in the src/svgicons folder are not tracked in dev mode, if necessary, you can run a rebuild of the sprite it is worth starting the creation of a sprite before starting work with the command:

`npm run sprite`


------------



**The main files for working with the template:**

`js/app.js`
`scss/style.scss`

index.html - landing page (content)
home.html - home page
html/*.htm files - pluggable parts


------------



**Folder path aliases are used:**

@img=src/img
@scss=src/scss
@js=src/js

> Plugin for VS Code - Path Autocomplete
Settings. Press F1 in the editor, find the Settings JSON settings, add the code:

*"path-autocomplete.pathMappings"*: {
"@img": `"${folder}/src/img"`, // alias for the img folder
"@scss": `"${folder}/src/scss"`, // alias for the scss folder
"@js": `"${folder}/src/js"`, // alias for js folder
}


------------



**If errors occur, make sure that:**
1. You have the latest version of Node.js installed
2. Terminal opened with administrator rights
3. There are no # or !
4. Folders and files must be named in Latin without spaces
5. The img tag and its contents must be written on one line without hyphens
6. The src attribute must contain the path to the existing image


------------


**Other problems and solutions:**

> Error "unable to resolve dependency tree"

*Solution:*
`npm i --legacy-peer-deps`

------------
> node-sass error.

*Solutions:*
`npm rebuild node-sass` || `npm install sass gulp-sass --save-dev`

------------


> Python error

*Solutions:*
`npm install --global windows-build-tools`
