const path = require('path');

import { verifyPathAbs, reduceRouterAbs, extensionmd, isFileOrDirectory, getFilesMd, getObjByLink } from '../src/main.js';

describe('verifyPathAbs', () => {
  it('Si la ruta es absoluta, debería devolverla', () => {
    expect(verifyPathAbs(path.join(process.cwd(), 'test'))).toBe(path.join(process.cwd(), 'test'));
  });
  it('Si no es absoluta, debería convertirla', () => {
    expect(verifyPathAbs('test')).toBe(path.join(process.cwd(), 'test'));
  });
});

describe('reduceRouterAbs', () => {
  it('Debería mostrar la ruta desde la carpeta directa en la que se encuentra el archivo o directorio', () => {
    expect(reduceRouterAbs(path.join(process.cwd(), 'markdown'))).toBe('\\LIM010-fe-md-links\\markdown');
  });
});

describe('extensionmd', () => {
  it('Si la ruta es de extensión .md devolverá true, de los contrario false', () => {
    expect(extensionmd(path.join(process.cwd(), 'markdown\file.js'))).toBe(false);
  });
});

describe('isFileOrDirectory', () => {
  it('Si la ruta es file devolverá true de lo contrario false', () => {
    expect(isFileOrDirectory(path.join(process.cwd(), 'markdown'))).toBe(false);
  });
});

describe('getFilesMd', () => {
  it('Devuelve un array con las rutas de los archivos de extensión .md', () => {
    expect(getFilesMd(path.join(process.cwd(), 'markdown'))).toStrictEqual(arrgetFilesMdMd);
  });
});

const arrgetFilesMdMd = [
  path.join(process.cwd(), 'markdown\\directory\\fourth.md'),
  path.join(process.cwd(), 'markdown\\first.md'),
  path.join(process.cwd(), 'markdown\\second.md')
];

describe('getObjByLink', () => {
  it('Debería devolver la propiedad text = Node.js', () => {
    expect(getObjByLink(arrgetFilesMdMd)[0].text).toBe('Node.js');
  });
});
