import { mdLinks } from '../src/mdLinks.js'

// const fetchMock = require('../__mocks__/node-fetch');
// fetchMock
//   .mock('https://docs.npmjs.com/about-npm/', 200)
//   .mock('https://docs.npmjs.com/aboutnpm/', 404)
//   .mock('https://docsnpmjs.com/aboutnpm/', () => {
//     throw new Error(ERROR_MESSAGE)
//   })


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