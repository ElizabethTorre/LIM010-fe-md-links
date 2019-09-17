"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extensionmd = exports.verifyPathAbs = void 0;

// const fs = require('fs');
const path = require('path'); // process.cwd() => ruta actual
// ../markdown/first.md
// Leer la ruta ingresada y convertirla en absoluta si no lo es


const verifyPathAbs = (router) => {
  if (path.isAbsolute(router)) {
    console.log(router);
  }
  console.log(path.resolve(router));
  // const ruta = path.isAbsolute(router);
  // console.log(router);
};
verifyPathAbs('../src/main.js');
// const ruta = path.isAbsolute(router);
  // console.log(ruta);
// Retorna un buleano si cumple con la extensión md


exports.verifyPathAbs = verifyPathAbs;

const extensionmd = router => path.extname(router) === '.md';

exports.extensionmd = extensionmd;

// Retorna 'Is file' o 'Is Directory' si la ruta corresponde
// https://www.technicalkeeda.com/nodejs-tutorials/how-to-check-if-path-is-file-or-directory-using-nodejs

const isFileOrDirectory = (router) => {
  if(fs.statSync(router).isFile()) {
    return 'Is file';
  }
  return 'Is Directory';
};


exports.isFileOrDirectory = isFileOrDirectory;