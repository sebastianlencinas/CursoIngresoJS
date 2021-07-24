/*Alumno= Lencinas Sebastian 
Enunciado: Switch 9 
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value; 
	var descuento; 
	var aumento; 
	var precioBase;
	var precioFinalAumento;
	var precioFinalDescuento;
	var mensaje

	precioBase= 15000;

	switch (estacionIngresada)
	{
	case "Invierno": 	
		switch (destinoIngresado)
		{	case "Bariloche": 
				aumento= 20
				break;
			case "Cataratas": 	
				descuento=10
				break;
			case "Cordoba":  
				descuento=10
				break;
			case "Mar del plata": 
				descuento=20;
				break;
		}
	break;
	case "Verano":
		switch (destinoIngresado)
		{	case "Bariloche": 
				(descuento=20) 
				break;
			case "Cataratas":  
				(aumento=10)
				break;
			case "Cordoba":  
				(aumento=10)
				break;
		    case "Mar del plata":  
				(aumento=20)
				break;
		}
	break;	
	case "Otoño": 
		switch (destinoIngresado)
		{
			case "Bariloche":  
			(aumento=10) 
			break;
			case "Cataratas": 
			(aumento=10)
			break;
			case "Cordoba": 
			(aumento=1)
			break;
			case "Mar del plata":  
			(aumento=10)	
			break;
		}
	break;
	case "Primavera":
		switch (destinoIngresado)
		{
			case "Bariloche":  //(aumento=10) 
			case "Cataratas": //(aumento=10)
			case "Cordoba": //(aumento=1)
			case "Mar del plata": //(aumento=10)
			break;
		}
	break;
	} 


	descuento=(precioBase*descuento)/100;
	aumento=(precioBase*aumento)/100;
	precioFinalAumento= precioBase + aumento;
	precioFinalDescuento= precioBase - descuento; 
	mensaje= "La tarifa del viaje a " + destinoIngresado + " en la estacion " + estacionIngresada + " vale $" + (precioFinalAumento || precioFinalDescuento) 

		alert(mensaje);


}//FIN DE LA FUNCIÓN