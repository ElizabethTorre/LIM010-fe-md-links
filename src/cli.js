#!/usr/bin/env node
// const [, , ... args] = process.argv
// console.log(`Hello ${args}`);

import { mdLinks } from './mdLinks.js';
import { optionStats, optionStatsValidate} from './options.js';
const fs = require('fs');
const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

const cli = (path) => {
    if(path === undefined) {
        console.log('Ingresar ruta');
    } else if (fs.existsSync(path)) {
        console.log('Correcto');
    } 
    console.log('ruta no existente');
}
cli(path);