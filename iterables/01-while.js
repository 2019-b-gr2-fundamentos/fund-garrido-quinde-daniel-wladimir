// do while 
//acepta booleanos y expresiones
var vecesQueHeComido = 0;
do {
    console.log('vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log('desayuno');
            break;
        case 2:
            console.log('almuerzo');
            break;
        case 3:
            console.log('merienda');
            break;
        default:
            console.log('gorditos');
            break;
    }
} while (vecesQueHeComido < 3);
{
    vecesQueHeComido = 0;
    switch (vecesQueHeComido) {
        case 1:
            console.log('desayuno');
            break;
        case 2:
            console.log('almuerzo');
            break;
        case 3:
            console.log('merienda');
            break;
        default:
            console.log('gorditos');
            break;
    }
}




const deberes = 38
console.log(deberes%13);