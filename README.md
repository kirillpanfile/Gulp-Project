# Gulp-Enterprise

* Works with [BEM](https://bem.info/)
* Implemented BEM structure
* Using [SCSS](https://sass-lang.com/) preprocessor 
* Using [Webpack](https://webpack.js.org/) for JavaScript modules
* Hard code guide is used
* Checking the code for errors before committing 

## :hammer_and_wrench: Installing 
* Install [NodeJS](https://nodejs.org/en/) *** 12th version *** (newer versions of NodeJS have problems installing some packages) and [Yarn](https://yarnpkg.com/en/docs/install)
* Download the pack with [Git](https://git-scm.com/downloads): ```git clone https://github.com/kirillpanfile/Gulp-Project.git```
* Install```gulp``` globaly: ```yarn global add gulp-cli```
* Enter in the cloned pack: ```cd gulp-project```
* download the required dependencies: ```yarn```
* to get started, enter the command: ```yarn run dev``` (dev mode)
* to build the project, enter the command ```yarn run build``` (build mode)

If you did everything correctly, you should open a browser with a local server. Build mode assumes project optimization: image compression, minification of CSS and JS files for uploading to the server.

## :open_file_folder: File structure

```
gulp-project
├── .vscode
├── dist
├── gulp
│   ├── config
│   │    ├── ftp.js
│   │    ├── path.js
│   │    └── plugins.js
│   ├── tasks
│   │   ├── bem.js
│   │   ├── copy.js
│   │   ├── fonts.js
│   │   ├── html.js
│   │   ├── images.js
│   │   ├── js.js | webpack
│   │   ├── reset.js
│   │   ├── scss.js
│   │   └── server.js
│   └── versions.json
├── src
│   ├── fonts
│   ├── html
│   ├── img
│   ├── js
│   ├── scss
│   │   └── blocks
│   └── index.html
├── .gitattributes
├── .gitignore
├── gulpfile.js
├── LICENSE
├── package.json
├── package.lock.json
└── README.md
```