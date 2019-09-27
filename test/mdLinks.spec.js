import { mdLinks } from '../src/mdLinks.js'

describe('mdLinks', () => {
    it('Deberia retornar status undefined ya que los objetos del array no tienen la propiedad STATUS', (done) => {
        mdLinks('./markdown', { validate: false }).then(response => {
        expect(response[0].status).toBe(undefined);
        done();
      });
    });
    it('Deberia retornar status 200 ya que los objetos del array tienen la propiedad STATUS', (done) => {
        mdLinks('./markdown', { validate: true }).then(response => {
        expect(response[0].status).toBe(200);
        done();
      });
    });
  });