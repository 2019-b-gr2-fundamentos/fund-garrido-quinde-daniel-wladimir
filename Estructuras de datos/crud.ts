// 02-crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from 'prompts';


function main(){
    //obtenerDatosAnimalPerrito(); //asincrona
    obtenerDatosAnimalPerritosin()
    .then()
    .catch();
}
import { respuestaEdad } from './interfaces/respuestaEdad.interface';
import { respuestaNombre } from './interfaces/respuestaNombre.interface';
import { respuestaCedula } from './interfaces/respuestaCedula.interface';
function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });
    console.log(promesaEdad);
    promesaEdad
        .then( // OK
          (datos)=>{
              console.log('datos',datos); // AQUI PUEDO SEGUIR
              ////
                const promesaNombre = prompts({ // PROMESA
                    type: 'text',
                    name: 'nombre',
                    message: 'Puedes darme tu nombre?'
                });
                promesaNombre
                    .then( // OK
                        (datosNombre)=>{
                            console.log('Nombre', datosNombre); // AQUI PUEDO SEGUIR
                        }
                    )
                    .catch( // =( 
                        (error)=>{
                            console.log('Error',error);
                        }
                    );
              ///
          }
        )
        .catch( // =( 
            (error)=>{
                console.log('Error',error);
            }
        );
    
    console.log('Fin');
}

async function obtenerDatosAnimalPerritosin(){   //solo dentro de las funciones, typescript 
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    const preguntas = [
        { 
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
          },
          { 
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
          },{ 
            type: 'number',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
          }
    ]
// poninedo todas las preguntas dentro de una constante nosotros evitamos crear una interfacer para cada dato 

    console.log('Inicio');
    const Edad : respuestaEdad = await prompts(preguntas) // PROMESA Escribir el await antes de la promesa
    console.log('Respuesta', Edad);
    console.log('Fin');
}

main();

//asincrona la vecina que no espera