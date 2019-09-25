// import {
//     verifyPathAbs,
//     extensionmd,
//     isFileOrDirectory,
//     recursion,
//     renderUnlink,
// } from '../src/main.js';
// import { recursion, renderUnlink } from '../src/main.js';
const main = require('./main.js');
const options = require('./options.js');
const fs = require('fs');
const path = process.argv[2];
// console.log(process.argv[2]);

// if(path != '')
// console.log(fs.existsSync(path));
const mdLinks = (path, opts) => {
    if (fs.existsSync(path)) {
        console.log(main.renderUnlink(main.recursion(path)));
    }
};
mdLinks(path);
