"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjByLink = exports.getFilesMd = exports.isFileOrDirectory = exports.extensionmd = exports.verifyPathAbs = void 0;

const fs = require('fs');

const path = require('path');

const marked = require('marked'); // Leer la ruta ingresada y convertirla en absoluta si no lo es


const verifyPathAbs = router => {
  if (path.isAbsolute(router)) {
    return router;
  }

  return path.resolve(router);
}; // Recorta la ruta absoluta en sólo la carpeta directa y el file
// const reduceRouterAbs = (routeAbs) => {
//   const inicio = routeAbs.slice(0, routeAbs.lastIndexOf('\\'));
//   const fin = inicio.lastIndexOf('\\');
//   return routeAbs.slice(fin);
// }
// Retorna un buleano si cumple con la extensión md


exports.verifyPathAbs = verifyPathAbs;

const extensionmd = router => path.extname(router) === '.md'; // Retorna 'true' o 'false' si la ruta corresponde a un archivo


exports.extensionmd = extensionmd;

const isFileOrDirectory = router => fs.statSync(router).isFile(); // Retorna un array con los archivos md.


exports.isFileOrDirectory = isFileOrDirectory;

const getFilesMd = router => {
  const routerAbs = verifyPathAbs(router);
  let arrFileMd = [];

  if (isFileOrDirectory(routerAbs)) {
    if (extensionmd(routerAbs)) {
      arrFileMd.push(routerAbs);
    }
  } else {
    const readDirectory = fs.readdirSync(routerAbs);
    readDirectory.forEach(file => {
      arrFileMd = arrFileMd.concat(getFilesMd(path.join(routerAbs, file)));
    });
  }

  return arrFileMd;
}; // Obtenemos las propiedades href/text/file de cada link en un obj y guardamos en un array


exports.getFilesMd = getFilesMd;

const getObjByLink = arrMd => {
  const arrLinks = [];
  const render = new marked.Renderer();
  arrMd.forEach(file => {
    render.link = (href, text, title) => {
      arrLinks.push({
        href: href,
        text: title,
        file: file
      });
    };

    const md = fs.readFileSync(file).toString();
    marked(md, {
      renderer: render
    });
  });
  return arrLinks;
};

exports.getObjByLink = getObjByLink;