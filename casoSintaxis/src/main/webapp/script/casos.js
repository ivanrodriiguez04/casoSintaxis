function caso1(){
	var a = 5;
	var b = 10;

	if (a == 5) {
  		let a = 4;
  		var b = 1;

	document.write(a);
  
	document.write(b);
	//en este caso a sería 4 ya que se a modificado el valor en el if
	//y b pasaria a ser 1 en todo el codigo ya que es tipo var
	}

	document.write(a);
	document.write(b);
	//esta vez a seria 5 porque esta puesta como tipo var en la funcion principal
	//y b seria 1 poruqe en el if se a modificado su valor
}
	
function caso2(){
    for (let i = 0; i<10; i++) {
		document.write(i);
		//el valor de i dependera de cuantas veces se incremente
	}

	document.write(i);
	//aqui no dara nada ya que la i es utilizada para el for
}
	
function caso3(){
    var z = 5
    let x = z+10, y = 12;
   
    document.write(x + y);
    //el resultado sera de 27 ya que es una suma nada mas 
}