/*Alumno = Sebastian Lencinas
Enunciado: switch 7
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje
	
	switch (destinoIngresado)
	{
		case "Bariloche":
		mensaje= "Oeste"
		break; 

		case "Cataratas":
		mensaje= "Norte"
		break; 

		case "Mar del plata":
		mensaje= "Este"
		break; 

		case "Ushuaia":
		mensaje= "Sur"
		break; 

	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN