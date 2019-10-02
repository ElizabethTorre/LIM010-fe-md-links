#!/usr/bin/env node

import { mdLinks } from './mdLinks.js';
import { optionStats, optionStatsValidate } from './options.js';
import { reduceRouterAbs } from './main.js';

const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

export const cli = (path, validate, stats) => new Promise(resolve => {

  if (path === undefined && validate === undefined && stats === undefined) {
    resolve('Ingresa una ruta');
  } else if (path !== undefined && validate === undefined && stats === undefined) {
    return mdLinks(path, { validate: false })
      .then(rsp => {
        let responseTerminal = '';
        rsp.forEach(link => {
          const textTruncate = link.text.substr(0, 50);
          const reduceRouter = reduceRouterAbs(link.file);
          responseTerminal += `.${reduceRouter} ${link.href} ${textTruncate}\n`;
        });
        resolve(responseTerminal);
      })
      .catch(() => resolve('La ruta no es válida o no existe'));

  } else if (path !== undefined && validate === '--validate' && stats === undefined) {
    return mdLinks(path, { validate: true })
      .then(rsp => {
        let responseTerminal = '';
        rsp.forEach(link => {
          const textTruncate = link.text.substr(0, 50);
          const reduceRouter = reduceRouterAbs(link.file);
          responseTerminal += `.${reduceRouter} ${link.href} ${link.ok} ${link.status} ${textTruncate}\n`;
        });
        resolve(responseTerminal);
      });
  } else if (path !== undefined && validate === '--stats' && stats === undefined) {
    return mdLinks(path, { validate: false }).then(rsp => resolve(optionStats(rsp)));

  } else if (path !== undefined && validate === '--stats' && stats === '--validate') {
    return mdLinks(path, { validate: false }).then(rsp => optionStatsValidate(rsp)
      .then(result => result).then(response => resolve(response)));

  } else if (validate !== '--validate' || validate !== '--stats') {
    resolve('El comando no es válido, utiliza los comandos "--validate", "--stats" o "--validate --stats"');
  }
});

cli(path, firstOption, secondOption)
  .then(response => console.log(response));
