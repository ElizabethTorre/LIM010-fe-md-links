
import { recursion, renderUnlink } from './main.js'
import { optionValidate } from './options.js'
const fs = require('fs');

export const mdLinks = (path, opts) => new Promise(resolve => {
    const arrLinks = renderUnlink(recursion(path));
    if (fs.existsSync(path) && opts.validate === false) {
        resolve(arrLinks);
    }
    optionValidate(arrLinks).then(rsp => resolve(rsp));
});
// mdLinks('./markdown', { validate: true }).then(rsp => console.log(rsp));