const operacion = prompt("ingrese la operacion");
const numerounostring = prompt("ingrese el primer numero ");
const numerodosstring = prompt("ingrese el segundo numero ");

const numerouno = Number(numerounostring);
const numerodos = Number(numerodosstring);

if (operacion == "suma"){
    console.log( numerouno + numerodos);
}

if (operacion == "resta"){
    console.log( numerouno - numerodos);
}

if (operacion == "multiplicacion"){
    console.log( numerouno * numerodos);
}

if (operacion == "division"){
    console.log( numerouno / numerodos);
}

if (operacion == "area"){
    const lado3 = prompt("ingrese el tercer numero");
    const lado3realnofake = Number(lado3);
    const perimetro = (numerouno + numerodos + lado3realnofake);
    const semiperimetro = (perimetro / 2);
    const operacionfinal = ((semiperimetro - numerouno) * (semiperimetro - numerodos) * (semiperimetro - lado3realnofake) * semiperimetro);
    console.log(Math.sqrt(operacionfinal));
}








//------------------------------->>>>Deber de if y switch <<<<<<------------------------------------------
// Ejemplo 1.- si el cliente me pone un angulo notable, el navegador devolvera el angulo asignado
//solo usa la funcion seno
//30,150,210,330-->  1/2
//45,135,225,315---> +- raiz de 2/2
//60,120,240,300---->+- raiz de 3 /2 

const angulotring = prompt("seno de " )
const angulo = Number(angulotring);
if (angulo == 30 || angulo == 150){
    console.log("1/2");

}

if (angulo == 210 || angulo == 330){
    console.log("-1/2");
}

if (angulo == 45 || angulo == 135){
    console.log("raiz de dos sobre dos");

}

if (angulo == 225 || angulo == 315){
    console.log("menos raiz de dos sobre dos");

}

if (angulo == 60 || angulo == 120){
    console.log("raiz de tres sobre dos");

}

if (angulo == 240 || angulo == 300){
    console.log("menos raiz de tres sobre dos");
}



////Ejemplo 2 si el cliente pone dos anuglos calcula el tercer angulo
//////calculo de un tercer angulo en un triangulo

const valorgardouno = prompt ("ingrese el angulo");
const gradorealnofake = Number(valorgardouno);
const valorgardodos = prompt ("ingrese el angulo");
const gradorealnofakedos = Number(valorgardodos);

if( gradorealnofakedos + gradorealnofake < 180){
   console.log(180 - gradorealnofakedos - gradorealnofake);
    
}else{
    console.log("la sumatoria de angulos de un triangulo es 180");
}