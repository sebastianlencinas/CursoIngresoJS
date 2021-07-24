/*
Alumno Lencinas Sebastian 
while = 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("La clave es incorrecta intente nuevamente.")	
	}
	alert("Bienvenido");
	
}//FIN DE LA FUNCIÓN
