//Enunciado: Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.


function mostrar()
{
	//tomo la edad  

	var edad; 
	edad = parseInt(document.getElementById("txtIdEdad").value);
	 

	if( edad > 17 ) 
 	{
    	 alert("sos mayor de edad") 

  										}
  	
  	else( edad < 18 )
  	{
         alert("sos menor de edad")
  										};

}//FIN DE LA FUNCIÓN

alert = edad 
