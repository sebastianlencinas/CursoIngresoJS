/*
//Alumno= Sebastian Lencinas

function mostrar()
{ 
	Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */
	//tomo el mes
	
/*	var mesDelAño =txtIdMes.value;
    
	if(mesDelAño == "Enero")
	{
		alert("que comiences bien el año!!!.");
	}
	else
	{
		if(mesDelAño == "Marzo")
		{
			alert("a clases!!!.");
		}
		else
		{
			if(mesDelAño == "Julio")
			{
				alert("se vienen las vacaciones!!!.")
			}
			else
			{
				if(mesDelAño == "Diciembre")
				{
					alert("Felices fiesta!!!.")
				}
			}
		}
	}



}//FIN DE LA FUNCIÓN */ 
//Alumno= Lencinas Sebastian

function mostrar()
{ 
  var mensaje 
  var mesDelAnio =txtIdMes.value; 

	switch (mesDelAnio) 
	{
		case "Enero":
			mensaje= "que comiences bien el año!!!." 
			break;

		case "Marzo": 
			mensaje= "a clases!!!." 
			break; 
		
		case "Julio": 
			mensaje= "se vienen las vacaciones!!!."
			break; 

		case "Diciembre":
			mensaje= "Felices fiesta!!!." 
			break; 

		default: 
		mensaje= "no es ningun mes seleccionado";
	}
	alert(mensaje);
}
