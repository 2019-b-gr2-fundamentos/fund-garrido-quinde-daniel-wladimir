module.export = function(numUno,numDos,numTres){
    var perimetro = (numUno + numDos + numTres);
    var semiperimetro = (perimetro / 2);
    var operacionfinal = ((semiperimetro - numUno) * (semiperimetro - numDos) * (semiperimetro - numTres) * semiperimetro);
    var final = Math.sqrt(operacionfinal);
    return final
}