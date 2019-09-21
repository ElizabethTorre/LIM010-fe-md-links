// importamos la funcion que vamos a testear

const path = require('path');

import { verifyPathAbs, extensionmd, isFileOrDirectory, recursion, renderUnlink } from '../src/main.js';

describe('verifyPathAbs', () => {
  it('Si la ruta es absoluta, debería devolverla', () => {
    expect(verifyPathAbs(path.join(process.cwd(),'test'))).toBe(path.join(process.cwd(),'test'));
  });
  it('Si no es absoluta, debería convertirla', () => {
    expect(verifyPathAbs('test')).toBe(path.join(process.cwd(),'test'));
  });
});

describe('extensionmd', () => {
  it('Si la ruta es de extensión .md devolverá true, de los contrario false', () => {
    expect(extensionmd(path.join(process.cwd(),'markdown\file.js'))).toBe(false);
  });
});

describe('isFileOrDirectory', () => {
  it('Si la ruta es file devolverá true de lo contrario false', () => {
    expect(isFileOrDirectory(path.join(process.cwd(),'markdown'))).toBe(false);
  });
});
// console.log(path.join(process.cwd(),'hola'));

describe('recursion', () => {
  it('Devuelve un array con las rutas de los archivos de extensión .md', () => {
    // If it should pass with deep equality, replace "toBe" with "toStrictEqual"
    // Si debe pasar con profunda igualdad, reemplace "toBe" con "toStrictEqual"
    expect(recursion(path.join(process.cwd(),'markdown'))).toStrictEqual(arrRecursionMd);
  });
});

const arrRecursionMd = [
  path.join(process.cwd(),'markdown\\directory\\fourth.md'),
  path.join(process.cwd(),'markdown\\first.md'),
  path.join(process.cwd(),'markdown\\second.md')
];

describe('renderUnlink', () => {
  it('Debería devolver la propiedad text = Node.js', () => {
    expect(renderUnlink(arrRecursionMd)[0].text).toBe('Node.js');
  });
});

const objLinks = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\Etorre\\Desktop\\TRACK-FRONT-END\\LIM010-fe-md-links\\markdown\\first.md'
  },
  { 
    href:'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\Etorre\\Desktop\\TRACK-FRONT-END\\LIM010-fe-md-links\\markdown\\first.md'
  }
];
