#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _mdLinks = require("./mdLinks.js");

var _options = require("./options.js");

var _main = require("./main.js");

const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

const cli = (path, validate, stats) => new Promise(resolve => {
  if (path === undefined && validate === undefined && stats === undefined) {
    resolve('Ingresa una ruta');
  } else if (path !== undefined && validate === undefined && stats === undefined) {
    return (0, _mdLinks.mdLinks)(path, {
      validate: false
    }).then(rsp => {
      let responseTerminal = '';
      rsp.forEach(link => {
        const textTruncate = link.text.substr(0, 50);
        const reduceRouter = (0, _main.reduceRouterAbs)(link.file);
        responseTerminal += `.${reduceRouter} ${link.href} ${textTruncate}\n`;
      });
      resolve(responseTerminal);
    }).catch(() => resolve('La ruta no es válida o no existe'));
  } else if (path !== undefined && validate === '--validate' && stats === undefined) {
    return (0, _mdLinks.mdLinks)(path, {
      validate: true
    }).then(rsp => {
      let responseTerminal = '';
      rsp.forEach(link => {
        const textTruncate = link.text.substr(0, 50);
        const reduceRouter = (0, _main.reduceRouterAbs)(link.file);
        responseTerminal += `.${reduceRouter} ${link.href} ${link.ok} ${link.status} ${textTruncate}\n`;
      });
      resolve(responseTerminal);
    });
  } else if (path !== undefined && validate === '--stats' && stats === undefined) {
    return (0, _mdLinks.mdLinks)(path, {
      validate: false
    }).then(rsp => resolve((0, _options.optionStats)(rsp)));
  } else if (path !== undefined && validate === '--stats' && stats === '--validate') {
    return (0, _mdLinks.mdLinks)(path, {
      validate: false
    }).then(rsp => (0, _options.optionStatsValidate)(rsp).then(result => result).then(response => resolve(response)));
  } else if (validate !== '--validate' || validate !== '--stats') {
    resolve('El comando no es válido, utiliza los comandos "--validate", "--stats" o "--validate --stats"');
  }
});

exports.cli = cli;
cli(path, firstOption, secondOption).then(response => console.log(response));