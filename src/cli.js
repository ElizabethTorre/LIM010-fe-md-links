#!/usr/bin/env node
// const [, , ... args] = process.argv
// console.log(`Hello ${args}`);

import { mdLinks } from './mdLinks.js';
import { optionStats, optionStatsValidate} from './options.js';
const fs = require('fs');
const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

const cli = (path, validate, stats) => {

  if(path === undefined && validate === undefined && stats === undefined) {
    console.log('Ingresar ruta');
  } else if (path !== undefined && validate === undefined && stats === undefined) {
    mdLinks(path, {validate:false}).then(rsp => console.log(rsp));
  } else if (path !== undefined && validate === '--validate' && stats === undefined) {
    mdLinks(path, {validate:true}).then(rsp => console.log(rsp));
  } else if (path !== undefined && validate === '--stats' && stats === undefined) {
    mdLinks(path, {validate:false}).then(rsp => console.log(optionStats(rsp)));
  } else if (path !== undefined && validate === '--validate' && stats === '--stats') {
    // mdLinks(path, {validate:true}).then(rsp => console.log(optionStatsValidate(rsp)));
  }
    // if(path === undefined) {
    //     console.log('Ingresar ruta');
    // } else if (fs.existsSync(path)) {
    //     console.log('Correcto');
    // } else {
    // console.log('ruta no existente');
    // }
}
cli(path, firstOption, secondOption);