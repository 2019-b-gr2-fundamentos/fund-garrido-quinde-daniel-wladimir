<?php
function getArray() {
    return array(1, 2, 3);
}

// en PHP 5.4
$secondElement = getArray()[1];
echo $secondElement."\n";
// anteriormente
$tmp = getArray();
$secondElement = $tmp[1];

// o
list(, $secondElement) = getArray();


$dan = [1,2,3,1,4,5];
$elem = $dan[1];
echo $elem;



function elementox($array){
	$x = $array[0]
	echo $x; 
}
$a=array(1,2,3,4)
$y = elementox($a)
