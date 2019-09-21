// const fetch = require('node-fetch');
import { reponseHTTP } from '../src/fetch.js'

const objLinks = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
];

describe('reponseHTTP', () => {
    it('Deberia retornar propiedad ok:ok para un link disponible', (done) => {
        reponseHTTP(objLinks).then((response) => {
        expect(response[0].ok).toBe('OK');
        done();
      });
    });
    it('Deberia retornar propiedad ok:fail para un link no disponible', (done) => {
        reponseHTTP(objLinks).then((response) => {
        expect(response[1].ok).toBe('fail');
        done();
      });
    });
    it('Deberia retornar status -error.message- para un link no disponible', (done) => {
        reponseHTTP(objLinks).then((response) => {
        expect(response[2].status).toBe('request to https://docsnpmjs.com/aboutnpm/ failed, reason: getaddrinfo ENOTFOUND docsnpmjs.com docsnpmjs.com:443');
        done();
      });
    });
  });