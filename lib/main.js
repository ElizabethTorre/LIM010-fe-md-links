"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extensionmd = exports.verifyPathAbs = void 0;

const fs = require('fs');
const path = require('path');
const marked = require('marked');

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
  if (isFileOrDirectory(routerAbs)) {
    if (extensionmd(routerAbs)) {
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


// console.log(marked(fs.readFileSync(path.join(process.cwd(),'markdown\\first.md')).toString()));
// console.log(fs.readFileSync(path.join(process.cwd(),'markdown\\first.md')).toString());
// const marked = require('marked');
// const render_unlink = () => {
//   const render = new marked.Renderer();
//   render.link = (href, title, text) => {
//       // render link text in a way that is appropriate
//       // for a medium that is not a computer connected
//       // to the Internet
//       return  href + text;
//   };
//   return render;
// },
// md = fs.readFileSync(path.join(process.cwd(),'markdown\\first.md')).toString();

// console.log(marked(md, {
//   renderer: render_unlink()
// }));
// const marked = require('marked');

const arrMd = [
  path.join(process.cwd(), 'markdown\\directory\\fourth.md'),
  path.join(process.cwd(), 'markdown\\first.md'),
  path.join(process.cwd(), 'markdown\\second.md')
];

const renderUnlink = (arrMd) => {
  const arrLinks = [];
  const render = new marked.Renderer();
  arrMd.forEach((file) => {
    render.link = (href, text, title) => {
      arrLinks.push({ href:href, title: title, file: file });
    };
    const md = fs.readFileSync(file).toString();
    console.log(fs.readFileSync(file));
    marked(md, {
      renderer: render
    });
  });
  console.log(arrLinks);
};
renderUnlink(arrMd);
  // md = fs.readFileSync(path.join(process.cwd(),'markdown\\first.md')).toString();
  exports.recursion = recursion;
  