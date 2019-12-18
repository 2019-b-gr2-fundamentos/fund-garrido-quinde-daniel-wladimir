/*
Obtener la primera dimension y la segunda dimension , ademas ver que todos los arreglos 
dentro del arregllo son iguales


*/



const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8,6],
    [9],
    [],
];



function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    
 return true;
}

function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
    // VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido==true){
        let longitudActualMaxima = 0; // Auxiliar
        let longitudActualMinima = -1; // Auxiliar
        for(let i = 0; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; // arreglo
            const longitudActual = elementoActual.length; // segunda dimension
            if(longitudActualMaxima < longitudActual){
                longitudActualMaxima = longitudActual;
            }
            if(longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }else{
                if(longitudActual < longitudActualMinima){
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if(longitudActualMaxima != longitudActualMinima){
            return false;
        }else{
            return matrizUno[0].length;
        }
    }else{
        return false;
    }
}

function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}


    const matriz1 = [
        [1,3],
        [2,3],
        [1]
    ]
    const matriz2 = [
        [1,2],
        [1,2],
        [1,2]
    ]


function main(){
        const x = [
            [1,2],
            [3]
        ];
        const y = [
            [1,2],
            [3,4],
        ];
        compararMatriz(x, y);
    }















/* Debaugers herramient apara ayudar a encontrar los errores en el putanal de codigo
fecha 18/12 hay dos informes, en el primero tienes que hacer la funcion 
obtenerPrimeraDimension
obtenerSegundaDimension
verificarTodosLosElementosDeUnArregloSonArreglo

En el segundo vamos a ver los debugers
*/







function igualdad(
    matriz1 : number [][],
    matriz2 : number [][] 
){
    const long1 = matriz1.length
    const long2 = matriz2.length
    const long1_2 = matriz1[0].length
    const long2_2 = matriz2[0].length
    const valor3 = long1 * long1_2 
    let valor = 0
    if(long1 == long2 && long1_2 == long2_2){
        for(let i = 0; i< long1; i++){
            for(let j = 0; j<long1_2; j++){
                if(matriz1[i][j]==matriz2[i][j]){
                    valor = valor + 1
                }else{
                    console.log(`${matriz1[i][j]} no es igual a ${matriz2[i][j]}`)
                    
                }
            }
        }
        if(valor == valor3){
            console.log("efectivamente son iguales")
        }
    }else{
        console.log("hablas piedras ni cagando son iguales")
    }
}




function suma(matriz3 : number[][]){
    const long3 = matriz3.length
    const long3_1 = matriz3[0].length
    for(let p = 0; p < long3 ; p++){
        let valorf2 = 0
        for(let m = 0; m<long3_1; m++){
            let final = matriz3[p][m]
            valorf2 = valorf2 + final
      }
    console.log(`la suma de la columna ${p + 1} es ${valorf2}`)
    }

    for(let p = 0; p < long3_1 ; p++){
        let valorf3 = 0
        for(let m = 0; m<long3; m++){
            let final = matriz3[m][p]
            valorf3 = valorf3 + final
      }
    console.log(`la suma de la fila ${p + 1} es ${valorf3}`)
    }
}









