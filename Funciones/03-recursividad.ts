/*
Esto es una corrida de prueba suponiendo que empieza en 3



function imprimirMensajeNveces (
    "hola"
    3
): void{  //Se pone void si no se devuelve nada
    if(3 == 0){
        console.log("se termino");
    }else{
        console.log(hola);
        imprimirMensajeNveces(hola, 3-1)
    }
}




function imprimirMensajeNveces (
    "hola"
    2
): void{  //Se pone void si no se devuelve nada
    if(2 == 0){
        console.log("se termino");
    }else{
        console.log(hola);
        imprimirMensajeNveces(hola, 2-1)
    }
}



function imprimirMensajeNveces (
    "hola"
    1
): void{  //Se pone void si no se devuelve nada
    if(1 == 0){
        console.log("se termino");
    }else{
        console.log(hola);
        imprimirMensajeNveces(hola, 1-1)
    }
}


function imprimirMensajeNveces (
    "hola"
    0
): void{  //Se pone void si no se devuelve nada
    if(0 == 0){
        console.log("se termino");
    }else{
        console.log(hola);
        imprimirMensajeNveces(hola, 0)
    }
}



/


////

function imprimirMensajeNveces(
    mensaje: string,
    numeroVeces: number
): void{  //Se pone void si no se devuelve nada
    if(numeroVeces == 0){
        console.log("se termino");
    }else{
        console.log(mensaje);
        const nuevonumeroVeces = numeroVeces - 1;
        imprimirMensajeNveces(mensaje, nuevonumeroVeces);
    }
}

function main(){
    imprimirMensajeNveces(`me aburro`,5);
}
main();
*/

//Pasos para recorrere el arreglo
//Le mandas el arreglo
//IMPRIME EL PRIMER ELEMENTO DEL ARREGLO
// DISMINUYE EN UNO EL TAMÑO DEL INDICE
//IMPRIME EL SIGUIENTE ARREGLO
/* para tipar 
arregloString: string[]
arregloBoolean: boolean[]
*/


function recorrerArreglo(
    arregloNumeros: number[],
    tamaño: number
):void{
    if(tamaño == 0){
        console.log("nel");
    }else{
        console.log(arregloNumeros[tamaño-1])
        const nuevoIndice = tamaño - 1;
        recorrerArreglo(arregloNumeros,nuevoIndice);
    }
}
function main (){
    recorrerArreglo([1,2,3,4,5,78,7],7);
}
main();

//Seguinda forma

function recorrerArreglo2(
    arregloNumeros: number[]
):void{
    if()
}else{
    console.log
}



































