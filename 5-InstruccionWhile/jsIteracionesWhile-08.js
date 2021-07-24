/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado; 
	var acumulador;

	contador=0;
	sumaPositivos=0;
	acumulador=0
	multiplicacionNegativos=1;
	respuesta="";

	

	do
	{
		numeroIngresado= prompt("ingrese un numero")
		numeroIngresado= parseInt(numeroIngresado)
		acumulador= acumulador + numeroIngresado
		contador= contador ++
		respuesta= prompt("Quiere ingresar otro numero? para continuar ingrese: SI.")
		respuesta= respuesta.toLowerCase()

		if(numeroIngresado>0)
		{
			sumaPositivos= acumulador + numeroIngresado
		}
		else
		{
			multiplicacionNegativos= acumulador * numeroIngresado
		}
			
	}
	while(respuesta == "si");


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN