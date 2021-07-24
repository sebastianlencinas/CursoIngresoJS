/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador; // cantidad de numeros ingresados
	var acumulador; // la suma de todos los numeros ingresados 
	var respuesta; // respuesta del usuario para saber si quiere seguir ingresando numeros 
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta="";
	respuesta.toLowerCase();

	do 
	{
		numeroIngresado= prompt("ingresa un numero")

		numeroIngresado= parseInt(numeroIngresado)

		acumulador= acumulador + numeroIngresado

		contador= contador + 1 

		respuesta= prompt("¿quiere ingresar otro numero? SI para continuar")

		respuesta= respuesta.toLowerCase();
	}
	while(respuesta == "si");



	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN