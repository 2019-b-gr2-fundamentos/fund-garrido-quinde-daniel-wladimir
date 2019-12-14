/*
1) verificar que dos matrices sean iguales
2) sumar las columnas y las filas de una matriz
3) intercambiar las diagonales
*/
//1
var a = [[2, 1], [3, 1], [8, 2]];
var b = [[2, 1], [3, 1], [8, 0]];
function igualdad(matriz1, matriz2) {
    var long1 = matriz1.length;
    var long2 = matriz2.length;
    var long1_2 = matriz1[0].length;
    var long2_2 = matriz2[0].length;
    var valor3 = long1 * long1_2;
    var valor = 0;
    if (long1 == long2 && long1_2 == long2_2) {
        for (var i = 0; i < long1; i++) {
            for (var j = 0; j < long1_2; j++) {
                if (matriz1[i][j] == matriz2[i][j]) {
                    valor = valor + 1;
                }
                else {
                    console.log(matriz1[i][j] + " no es igual a " + matriz2[i][j]);
                }
            }
        }
        if (valor == valor3) {
            console.log("efectivamente son iguales");
        }
    }
    else {
        console.log("hablas piedras ni cagando son iguales");
    }
}
igualdad(a, b);
function suma(matriz3) {
    var long3 = matriz3.length;
    var long3_1 = matriz3[0].length;
    for (var p = 0; p < long3; p++) {
        var valorf2 = 0;
        for (var m = 0; m < long3_1; m++) {
            var final = matriz3[p][m];
            valorf2 = valorf2 + final;
        }
        console.log("la suma de la columna " + (p + 1) + " es " + valorf2);
    }
    for (var p = 0; p < long3_1; p++) {
        var valorf3 = 0;
        for (var m = 0; m < long3; m++) {
            var final = matriz3[m][p];
            valorf3 = valorf3 + final;
        }
        console.log("la suma de la fila " + (p + 1) + " es " + valorf3);
    }
}
suma(a);
