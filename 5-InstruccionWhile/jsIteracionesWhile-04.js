//Alumno= Lencinas Sebastian 
//While 04

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9 inclusive."));

	

	while (numeroIngresado > 9 || numeroIngresado < 0 )
	{
	numeroIngresado == parseInt(prompt("el numero no es valido."));


	}
	
	document.getElementById("txtIdNumero").value= numeroIngresado
	
}//FIN DE LA FUNCIÓN