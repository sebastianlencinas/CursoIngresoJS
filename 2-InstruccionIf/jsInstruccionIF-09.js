/*Alumno= Lencinas Sebastian 
IF -9 Enunciado: Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{

	var numPosibilidades = 20 - 1;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    
	aleatorio = Math.floor(aleatorio);
    
	if (aleatorio<11)
	{
	alert (aleatorio);
	}

}//FIN DE LA FUNCIÓN