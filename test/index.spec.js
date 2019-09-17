// importamos la funcion que vamos a testear

const path = require('path');

import { verifyPathAbs, extensionmd, isFileOrDirectory } from '../src/main.js';

// const relativePath = 'test\\index.spec.js';
// const absolutaPath = 'C:\\Users\\Laboratoria\\Desktop\\PROYECTOS_LABORATORIA\\TRACK FED\\LIM010-fe-md-links\\test\\index.spec.js';
const nonPathMd = 'markdown/file.js';

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
  it('Si la ruta es file devolverá -Is file- de los contrario -Is Directory-', () => {
    expect(isFileOrDirectory(path.join(process.cwd(),'markdown'))).toBe('Is Directory');
  });
});
// console.log(path.join(process.cwd(),'hola'));
