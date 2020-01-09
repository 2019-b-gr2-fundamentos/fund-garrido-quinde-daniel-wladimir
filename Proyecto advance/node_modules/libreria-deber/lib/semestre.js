module.export = function(control1,prueba1,examen1,control2,prueba2,examen2){
var promedio1 = ((prueba1 * 2.5) + control1 + (examen1 * 2.5));
var proemdio2 = ((prueba2 * 2.5) + control2 + (examen2 * 2.5));
var notafinal = (proemdio2 + promedio1);
return notafinal
}