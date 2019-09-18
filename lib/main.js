"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extensionmd = exports.verifyPathAbs = void 0;

const fs = require('fs');
const path = require('path');

const verifyPathAbs = (router) => {
  if (path.isAbsolute(router)) {
    return router;
  }
  return path.resolve(router);
};
exports.verifyPathAbs = verifyPathAbs;

// Retorna un buleano si cumple con la extensión md
const extensionmd = router => path.extname(router) === '.md';
exports.extensionmd = extensionmd;

// Retorna booleano si la ruta corresponde a un file
const isFileOrDirectory = (router) => fs.statSync(router).isFile();
exports.isFileOrDirectory = isFileOrDirectory;

// Crea un array con los archivos de extensión .md
const recursion = (router) => {
  const routerAbs = verifyPathAbs(router);
  let arrFileMd = [];
  if(isFileOrDirectory(routerAbs)) {
    if(extensionmd(routerAbs)) {
      arrFileMd.push(routerAbs);
    }
  } else {
    const readDirectory = fs.readdirSync(routerAbs);
    readDirectory.forEach(file => {
      arrFileMd = arrFileMd.concat(recursion(path.join(routerAbs, file)));
    })
  }
  return arrFileMd;
};

exports.recursion = recursion;
