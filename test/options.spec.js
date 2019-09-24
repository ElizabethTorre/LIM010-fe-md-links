// const fetch = require('node-fetch');
import { optionValidate, optionStats, optionStatsValidate } from '../src/options.js'

const objLinks = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
];

describe('optionValidate', () => {
    it('Deberia retornar propiedad ok:ok para un link disponible', (done) => {
        optionValidate(objLinks).then((response) => {
          console.log(response);
        expect(response[0].ok).toBe('OK');
        done();
      });
    });
    it('Deberia retornar propiedad ok:fail para un link no disponible', (done) => {
        optionValidate(objLinks).then((response) => {
        expect(response[1].ok).toBe('FAIL');
        done();
      });
    });
    it('Deberia retornar status -error.message- para un link no disponible', (done) => {
        optionValidate(objLinks).then((response) => {
        expect(response[2].status).toBe('request to https://docsnpmjs.com/aboutnpm/ failed, reason: getaddrinfo ENOTFOUND docsnpmjs.com docsnpmjs.com:443');
        done();
      });
    });
  });

  describe('optionStats', () => {
    it('Deberia retornar el TOTAL de links y la cantidad de UNICOS:', () => {
        expect(optionStats(objLinks)).toStrictEqual(`Total: 3\nUnique: 3`);
    });
  });
  describe('optionStatsValidate', () => {
    it('Deberia retornar el TOTAL de links y la cantidad de UNICOS y BROKEN:', () => {
        expect(optionStatsValidate(objLinks)).toBe(`Total:3\nUnique:3`);
    });
  });