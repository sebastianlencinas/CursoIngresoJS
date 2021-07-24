/*Alumno = Lencinas Sebastian 
Enunciado: switch - 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/


function mostrar()
{
	//tomo la hora
	var horaDelDia = document.getElementById("txtIdHora").value;
	var mensaje;

	switch(horaDelDia)
	{
		case "7":
			mensaje="Es de mañana."
		break;
		
		case "8":
			mensaje="Es de mañana."
		break; 
		
		case "9":
			mensaje="Es de mañana."
		break; 
		
		case "10": 
			mensaje="Es de mañana."
		break; 
		
		case "11":
			mensaje="Es de mañana."
		break; 
		
		default: 
		mensaje= "Ya no es de mañana"
		break; 
	}

	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN