// importamos la funcion que vamos a testear
import { verifyPathAbs } from '../src/main.js';

const relativePath = '..test/index.spec.js';
const absolutaPath = process.cwd();

describe('verifyPathAbs', () => {
  it('Si la ruta es absoluta, debería devolverla', () => {
    expect(verifyPathAbs(absolutaPath)).toBe(absolutaPath);
  });
  it('Si no es absoluta, debería convertirla', () => {
    expect(verifyPathAbs(relativePath)).toBe(absolutaPath);
  });
});
