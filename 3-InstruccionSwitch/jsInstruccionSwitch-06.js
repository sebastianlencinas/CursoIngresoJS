/*Alumno = Lencinas Sebastian.
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/

function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	var mensaje; 

	switch(horaDelDia)
	{
		case "0":
		mensaje= "Es de noche"
		break;
	
		case "1":
		mensaje= "Es de noche"
		break;
	
		case "2":
		mensaje= "Es de noche"
		break;
	
		case "3":
		mensaje= "Es de noche"
		break;
	
		case "4":
		mensaje= "Es de noche"
		break;
	
		case "5":
		mensaje= "Es de noche"
		break;
	
		case "6":
		mensaje= "Es de noche"
		break;

		case "7":
		mensaje= "Es de mañana."
		break;

		case "8":
		mensaje= "Es de mañana."
		break;

		case "9":
		mensaje= "Es de mañana."
		break;

		case "10":
		mensaje= "Es de mañana."
		break;

		case "11":
		mensaje= "Es de mañana."
		break;

		case "12":
		mensaje= "Es de tarde."
		break;
	
		case "13":
		mensaje= "Es de tarde."
		break;
	
		case "14":
		mensaje= "Es de tarde."
		break;
	
		case "15":
		mensaje= "Es de tarde."
		break;
	
		case "16":
		mensaje= "Es de tarde."
		break;

		case "17":
		mensaje= "Es de tarde."
		break;
		
		case "18":
		mensaje= "Es de tarde."
		break;
		
		case "19":
		mensaje= "Es de tarde."
		break;
		
		case "20":
		mensaje= "Es de noche."
		break;

		case "21":
		mensaje= "Es de noche"
		break;

		case "22":
		mensaje= "Es de noche"
		break;

		case "23":
		mensaje= "Es de noche"
		break;

		case "24":
		mensaje= "Es de noche"
		break;

		default:
		mensaje= "la hora no existe."
		break;

	}
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN