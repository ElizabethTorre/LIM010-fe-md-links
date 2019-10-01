import { cli } from '../src/cli.js';

const output1 = `.\\markdown\\first.md https://nodejs.org/es/ Node.js\n.\\markdown\\first.md https://developers.google.com/v8/ motor de JavaScript V8 de Chrome\n`;
const output2 = `.\\markdown\\first.md https://nodejs.org/es/ OK 200 Node.js\n.\\markdown\\first.md https://developers.google.com/v8/ OK 200 motor de JavaScript V8 de Chrome\n`;

describe('cli', () => {
  it('Si los no recibe argumentos (ruta/opción validate/opción stats), debería pedir INGRESAR RUTA', (done) => {
    cli(undefined, undefined, undefined).then(response => {
      expect(response).toStrictEqual('Ingresa una ruta');
      done();
    })
  });
  it('Si recibe sólo ruta, debería imprimir output1 ', (done) => {
    cli('./markdown', undefined, undefined).then(response => {
      expect(response).toStrictEqual(output1);
      done();
    })
  });
  it('Si recibe una ruta que no existe imprime "La ruta no es válida o no existe"', (done) => {
    cli('./mark', undefined, undefined).then(response => {
      expect(response).toStrictEqual('La ruta no es válida o no existe');
      done();
    })
  });
  it('Si recibe sólo ruta y la opción --validate, debería imprimir el output2', (done) => {
    cli('./markdown', '--validate', undefined).then(response => {
      expect(response).toStrictEqual(output2);
      done();
    })
  });
  it('Si recibe sólo ruta y la opción --stats, debería imprimir el total y únicos', (done) => {
    cli('./markdown', '--stats', undefined).then(response => {
      expect(response).toStrictEqual(`Total: 2\nUnique: 2`);
      done();
    })
  });
  it('Si recibe sólo ruta, debería imprimir los archivos y ', (done) => {
    cli('./markdown', '--stats', '--validate').then(response => {
      expect(response).toStrictEqual(`Total: 2\nUnique: 2 \nBroken: 0`);
      done();
    })
  });
  it('Si los no recibe argumentos (ruta/opción validate/opción stats), debería pedir INGRESAR RUTA', (done) => {
    cli('./markdown', '--validate', '--stats').then(response => {
      expect(response).toStrictEqual('El comando es incorrecto, prueba "--stats --validate"');
      done();
    })
  });
  it('Si los no recibe argumentos (ruta/opción validate/opción stats), debería pedir INGRESAR RUTA', (done) => {
    cli('./markdown', '--', undefined).then(response => {
      expect(response).toStrictEqual('El comando no es válido, utiliza los comandos "--validate", "--stats" o "--validate --stats"');
      done();
    })
  });
});
