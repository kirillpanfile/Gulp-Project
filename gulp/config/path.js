// Getting projects folder name

import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'; //* Can also use the * directory
const srcFolder = './src';

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ` `
}