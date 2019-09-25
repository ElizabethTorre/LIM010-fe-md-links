#! / usr / bin / env nodonode.cmd cli.js
"use strict";

var _main = require("./main.js");

var _options = require("./options.js");

const fs = require('fs'); // console.log(process.argv[2]);


const mdLinks = (path, opts) => new Promise(resolve => {
  const arrLinks = (0, _main.renderUnlink)((0, _main.recursion)(path));

  if (fs.existsSync(path) && opts.validate === false) {
    resolve(arrLinks);
  }

  (0, _options.optionValidate)(arrLinks).then(rsp => resolve(rsp));
});

mdLinks('./markdown', {
  validate: true
}).then(rsp => console.log(rsp));