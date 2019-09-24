// import {
//     verifyPathAbs,
//     extensionmd,
//     isFileOrDirectory,
//     recursion,
//     renderUnlink,
// } from '../src/main.js';

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const terminal = process.argv[2];
// console.log(process.argv[2]);

// if(terminal != '')
// console.log(fs.existsSync(terminal));
if (fs.existsSync(terminal)) {
    console.log(renderUnlink(recursion(terminal)));
}
