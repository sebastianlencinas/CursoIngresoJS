/*Enunciado:Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive)*/


function mostrar()
{
	//tomo la edad  

	var edad; 
	edad = parseInt(document.getElementById("txtIdEdad").value);
	 

	if (edad < 18 && edad > 12) 
 		{
    	 	alert("sos adolescente"); 
										}


}