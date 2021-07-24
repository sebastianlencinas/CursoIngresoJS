/*Alumno = Lencinas Sebastian 
Enunciado: Switch 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje= "Frio"
			break; 
	
			case "Cataratas":
			mensaje= "Calor"
			break; 
	
			case "Mar del plata":
			mensaje= "Calor"
			break; 
	
			case "Ushuaia":
			mensaje= "Frio"
			break; 
	
	}

	alert(mensaje); 
	

}//FIN DE LA FUNCIÓN