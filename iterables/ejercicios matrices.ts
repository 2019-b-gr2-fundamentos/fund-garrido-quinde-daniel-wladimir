/*
1) verificar que dos matrices sean iguales
2) sumar las columnas y las filas de una matriz
3) intercambiar las diagonales 
*/
//1

const a = [[2,1],[3,1],[8,2]]

const b = [[2,1],[3,1],[8,0]]

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

igualdad(a,b);


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

suma(a);









