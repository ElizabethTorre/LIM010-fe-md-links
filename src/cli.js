#!/usr/bin/env node

import { mdLinks } from './mdLinks.js';
import { optionStats, optionStatsValidate } from './options.js';
import { reduceRouterAbs } from './main.js';

const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

const cli = (path, validate, stats) => {
  if (path === undefined && validate === undefined && stats === undefined) {
    console.log('Ingresa una ruta');
  } else if (path !== undefined && validate === undefined && stats === undefined) {
    mdLinks(path, { validate: false })
      .then(rsp => rsp.forEach(link => {
        const textTruncate = link.text.substr(0, 50);
        const reduceRouter = reduceRouterAbs(link.file);
        console.log(`.${reduceRouter} ${link.href} ${textTruncate}`);
      }))
      .catch(() => console.log('La ruta no es válida o no existe'));
  } else if (path !== undefined && validate === '--validate' && stats === undefined) {
    mdLinks(path, { validate: true })
      .then(rsp => rsp.forEach(link => {
        const textTruncate = link.text.substr(0, 50);
        const reduceRouter = reduceRouterAbs(link.file);
        console.log(`.${reduceRouter} ${link.href} ${link.ok} ${link.status} ${textTruncate}`);
      }));
  } else if (path !== undefined && validate === '--stats' && stats === undefined) {
    mdLinks(path, { validate: false }).then(rsp => console.log(optionStats(rsp)));
  } else if (path !== undefined && validate === '--stats' && stats === '--validate') {
    mdLinks(path, { validate: false }).then(rsp => optionStatsValidate(rsp)
      .then(result => result).then(response => console.log(response)));
  } else if (path !== undefined && validate === '--validate' && stats === '--stats') {
    console.log('El comando es incorrecto, prueba "--stats --validate"');
  } else if (validate !== '--validate' || validate !== '--stats') {
    console.log('"--" no es válido, utiliza los comandos "--validate", "--stats" o "--validate --stats"');
  }
}
cli(path, firstOption, secondOption);