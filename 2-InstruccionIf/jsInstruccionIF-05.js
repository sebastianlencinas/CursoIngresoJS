//Alumno: Lencinas Sebastian

//Enunciado: Al ingresar una edad solo debemos informar si la persona NO es adolescente. IF-05


function mostrar()
{
	//tomo la edad  
	
	var edad; 
	var mensaje
	edad = parseInt(document.getElementById("txtIdEdad").value);
	

	if (edad < 18 && edad > 12) 
 		{
    	 	mensaje= "sos adolescente"; 
		}
	else 
	    {
			mensaje= "no sos adolecente";
		}

	alert(mensaje);

}   
//FIN DE LA FUNCIÓN
