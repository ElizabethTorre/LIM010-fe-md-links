// importamos la funcion que vamos a testear
import { verifyPathAbs, extensionmd } from '../src/main.js';

const relativePath = '..test/index.spec.js';
const absolutaPath = process.cwd();
const nonPathMd = 'markdown/file.js';

describe('verifyPathAbs', () => {
  it('Si la ruta es absoluta, debería devolverla', () => {
    expect(verifyPathAbs(absolutaPath)).toBe(absolutaPath);
  });
  it('Si no es absoluta, debería convertirla', () => {
    expect(verifyPathAbs(relativePath)).toBe(absolutaPath);
  });
});

describe('extensionmd', () => {
  it('Si la ruta es de extensión .md devolverá true, de los contrario false', () => {
    expect(extensionmd(nonPathMd)).toBe(false);
  });
});
