<?php 

function calculador ($operacion, $numero1, $numero2, $nuemro3) {
		$resultado = 0;
		if($operacion == 1 || $operacion == "suma" || $operacion == "suma-1"){
			$resultado = $numero1 + $numero2 + $nuemro3;
		}elseif($operacion == 2 || $operacion == "resta" || $operacion == "resta-1"){
			$resultado = $numero1 - $numero2 - $nuemro3;
		}elseif($operacion == 3 || $operacion == "multiplicacion" || $operacion == "multiplicacion-3"){
			$resultado = $numero1 * $numero2 * $nuemro3;
		}elseif($operacion == 4 || $operacion == "division" || $operacion == "division-4"){
			$resultado = ($numero1/$numero2) / $nuemro3; 
		}elseif ($operacion == 5) {
			$val1 = $numero1[0]
			$resultado = $val1  
		}
		return $resultado;
		}
	
	
$main = calculador (5,[0,1,2],0,1);
echo "el resultado es $main" ;
 
 ?>