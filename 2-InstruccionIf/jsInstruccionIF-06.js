//Alumno= Lencinas Sebastian

//Enunciado IF-06 = Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).


function mostrar()
{
	//tomo la edad  .

	var edad; 
	edad = parseInt(document.getElementById("txtIdEdad").value);
	var mensaje
	if(edad < 13)
	{	
			mensaje=("sos niño");
	}	
	else //(edad < 18 && edad > 12) 
	{	
			mensaje=("sos adolescente"); 
		
			if (edad>17)
		{  
			mensaje=("sos mayor de edad");
		}
		
	}
   
	alert(mensaje);


}