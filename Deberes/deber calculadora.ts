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