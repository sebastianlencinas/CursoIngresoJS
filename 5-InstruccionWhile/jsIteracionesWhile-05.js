/*Alumno Lencinas Sebastian
while= 05*/
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = sexoIngresado.toLowerCase();

	while (sexoIngresado !== "f" && sexoIngresado !== "m")
	{
		sexoIngresado = prompt("no ingresó f ó m, vuelva a intentar.");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;


}//FIN DE LA FUNCIÓN