const fs = require('fs');
const path = require('path');
const marked = require('marked');
// process.cwd() => ruta actual
// ../markdown/first.md

// Leer la ruta ingresada y convertirla en absoluta si no lo es

const verifyPathAbs = (router) => {
  if (path.isAbsolute(router)) {
    return router;
  }
  return path.resolve(router);
  // const ruta = path.isAbsolute(router);
  // console.log(router);
};
// verifyPathAbs('../src/main.js');

// Retorna un buleano si cumple con la extensión md
const extensionmd = (router) => path.extname(router) === '.md';

// Retorna 'true' o 'false' si la ruta corresponde a un archivo
// https://www.technicalkeeda.com/nodejs-tutorials/how-to-check-if-path-is-file-or-directory-using-nodejs

const isFileOrDirectory = (router) => fs.statSync(router).isFile();

const recursion = (router) => {
  const routerAbs = verifyPathAbs(router);
  let arrFileMd = [];
  if (isFileOrDirectory(routerAbs)) {
    if (extensionmd(routerAbs)) {
      arrFileMd.push(routerAbs);
    }
  } else {
    // readDirectory me devuelve un array de los archivos que contiene routerAbs
    // EJM: const readDirectory = fs.readdirSync(path.resolve(path.join(process.cwd(),'markdown')));
    // console.log(readDirectory);
    const readDirectory = fs.readdirSync(routerAbs);
    // utilizamos forEach para revisar cada archivo del directorio
    readDirectory.forEach(file => {
      // por cada elemento del directorio(file o directory) volvemos a utilizar la función 'recursion'
      // pero utilizando 'join' para crear la ruta referida a dicho elemento.
      arrFileMd = arrFileMd.concat(recursion(path.join(routerAbs, file)));
    })
  }
  return arrFileMd;
};

const renderUnlink = (arrMd) => {
  const arrLinks = [];
  const render = new marked.Renderer();
  arrMd.forEach((file) => {
    render.link = (href, text, title) => {
      // render link text in a way that is appropriate
      // for a medium that is not a computer connected
      // to the Internet
      arrLinks.push({ href:href, title: title, file: file });
    };
    const md = fs.readFileSync(file).toString();
    marked(md, {
      renderer: render
    });
  });
  return arrLinks;
};

export {
  verifyPathAbs,
  extensionmd,
  isFileOrDirectory,
  recursion,
  renderUnlink,
};
