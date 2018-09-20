//requireds
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo,listarTable} = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch(comando){

  case 'listar':
        console.log('Listar');
        listarTable(argv.base,argv.limite);
          //.then(archivo =>console.log(`Archivo creado: ${archivo}`))
          //.catch(e=>console.log(e));
  break;

  case 'crear':
        console.log('Crear');
        crearArchivo(argv.base,argv.limite)
          .then(archivo =>console.log(`Archivo creado: ${archivo}`))
          .catch(e=>console.log(e));

  break;
  default:
  console.log('Comando no reconocido');
}
console.log(argv);
//console.log(process.argv);
//let argv = process.argv
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//console.log(multiplicar);
//multiplicar.crearArchivo

//let argv2 = process.argv;
//console.log('Limite',argv.limite);
//console.log(argv2);

//crearArchivo(base)
//  .then(archivo =>console.log(`Archivo creado: ${archivo}`))
//  .catch(e=>console.log(e));
