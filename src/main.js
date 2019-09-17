// const fs = require('fs');
const path = require('path');
// process.cwd() => ruta actual
// ../markdown/first.md

// Leer la ruta ingresada y convertirla en absoluta si no lo es

const verifyPathAbs = () => {
  if (path.isAbsolute(router)) {
    return route;
  }
  return path.resolve(router);
  // const ruta = path.isAbsolute(router);
  // console.log(ruta);
};

// Retorna un buleano si cumple con la extensión md
// const extensionmd = (router) => path.extname(router) === '.md';

module.exports = {
  verifyPathAbs,
  // extensionmd,
};
