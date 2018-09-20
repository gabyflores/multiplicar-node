//requireds
const fs = require('fs');
const colors = require('colors');

//module.exports..crearArchivo
let listarTable =(base,limite = 10)=>{
  console.log('==========='.yellow);
  console.log(`===tabla de ${base}`.red);
  //return new Promise((resolve,reject)=>{

    //if(!Number(base)){
      // reject('No es un numero');
       //return;
    //}

    //let data = '';

    for (let i=1;i<=limite;i++){

      console.log(`${ base } * ${ i}=${base*i}\n`);
    }
}





let crearArchivo = (base,limite =10) =>{

    return new Promise((resolve,reject)=>{

      if(!Number(base)){
         reject('No es un numero');
         return;
      }

      let data = '';

      for (let i=1;i<=limite;i++){

        data +=`${ base } * ${ i}=${base*i}\n`;

      }


      fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
        if (err) reject (err)
        else
           resolve(`tabla-${base}.txt`);
      //  console.log('The file has been saved!');
      });

    });

  }



  module.exports = {
    crearArchivo,
    listarTable
  }
