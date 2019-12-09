<?php 
/*
crear,actualizar,eliminar,salir1
1) funcion para agregar elemntos al arreglo
2) funcion para editar elementos en el arreglo
3) funcion para realizar un pop a un elemnto especifico en el arreglo
4) 
*/
$a = array(1,2,3,4,5,6,7,8);
function modificar($arreglo,$datoBase,$datoNew){
	$longitud = count($arreglo);
	$arreglofinal = array(0,1);
	for ($i=0; $i <$longitud ; $i++) { 
		if ($arreglo[$i] == $datoBase) {
			$arreglofinal[$i] = $datoNew; 
		}else{
			$arreglofinal[$i] = $arreglo[$i];
		}
	}
	print_r($arreglofinal);

} 

function crear($arreglo,$dato){
	$arreglofinal = array_push($arreglo, $dato);
	//return $arreglofinal;
	print_r($arreglofinal);
} 


modificar($a,2,7)
//crear($a,2)
//print_r($hola);



?>
