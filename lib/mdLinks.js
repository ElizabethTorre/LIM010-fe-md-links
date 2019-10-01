"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _main = require("./main.js");

var _options = require("./options.js");

const fs = require('fs');

const mdLinks = (path, opts) => new Promise(resolve => {
  const arrLinks = (0, _main.getObjByLink)((0, _main.getFilesMd)(path));

  if (fs.existsSync(path) && opts.validate === false) {
    resolve(arrLinks);
  }

  (0, _options.optionValidate)(arrLinks).then(rsp => resolve(rsp));
});

exports.mdLinks = mdLinks;