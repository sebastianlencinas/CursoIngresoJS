/*Alumno = Lencinas Sebastian 
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numPosibilidades = 20 - 1;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    var mensaje
	aleatorio = Math.floor(aleatorio);
	

	if (aleatorio <5)
	{
		mensaje= "Vamos, la proxima se puede"
	} 
	else
	{
		if(aleatorio<8)
		{
			mensaje = "APROBÓ"
		}
		else
		{
			if(aleatorio == 9 || 10)
			{
			mensaje = "EXCELENTE"
			}
		}
	}
	
	alert(mensaje)

}//FIN DE LA FUNCIÓN