/*Alumno = Sebastian Lencinas
Enunciado: al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/


function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;

	switch (mesDelAnio)
	{
		case "Enero":
			mensaje= "Tiene 31 dias"
			break;
		case "Febrero":
			mensaje= "Tiene 28 dias"
			break;
		case "Marzo":
			mensaje= "Tiene 31 dias"
			break; 
		case "Abril":
			mensaje= "Tiene 30 dias"
			break;
		case "Mayo":
			mensaje= "Tiene 31 dias"
			break; 
		case "Junio":
			mensaje= "Tiene 30 dias"
			break;
		case "Julio":
			mensaje= "Tiene 31 dias"
			break; 
		case "Agosto":
			mensaje= "Tiene 31 dias"
			break; 
		case "Septiembre":
			mensaje= "Tiene 30 dias"
			break; 
		case "Octubre": 
			mensaje= "Tiene 31 dias"
			break; 
		case "Noviembre":
			mensaje= "Tiene 30 dias"
			break; 
		case "Diciembre":
			mensaje= "Tiene 31 dias"
			break;


	}
	
	alert(mensaje);

	



}//FIN DE LA FUNCIÓN