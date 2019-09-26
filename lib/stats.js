"use strict";

// const fetch = require('node-fetch');
// const objValidate = [
//   { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md', status: 200,
//   ok: 'OK' },
//   { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md', status: 403,
//   ok: 'FAIL' },
//   { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md',  status:
//   'request to https://docsnpmjs.com/aboutnpm/ failed, reason: getaddrinfo ENOTFOUND docsnpmjs.com docsnpmjs.com:443',
//  ok: 'FAIL' },
// ];
// const optionStats = (objValidate) => {
//     const total = objValidate.length;
//     const arrLinks = objValidate.map(ele => ele.href);
//     const unique = Array.from(arrLinks).length;
//     return `Total: ${total}\nUnique: ${unique}`;
//     // console.log(`Total: ${total}\nUnique: ${unique}`);
// }
// // optionStats(objValidate);
// const optionStatsValidate = (objValidate) => {
//     const stats = optionStats(objValidate);
//     const arrLinksBroken = objValidate.filter(ele => ele.ok === 'FAIL').length;
//     console.log(`${stats} \nBroken: ${arrLinksBroken}`);
// }
// optionStatsValidate(objValidate);
const ruta = 'C:\\Users\\Laboratoria\\Desktop\\PROYECTOS_LABORATORIA\\TRACK FED\\LIM010-fe-md-links\\src\\stats.js'; // console.log(ruta.slice(2));
// console.log(ruta.lastIndexOf('\\'));

const inicio = ruta.slice(0, ruta.lastIndexOf('\\'));
const fin = inicio.lastIndexOf('\\');
console.log(ruta.slice(fin));