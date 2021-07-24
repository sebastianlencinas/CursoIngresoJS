//Alumno= Sebastian Lencinas

/*TP-N4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/


/* //  TP HECHO CON IF //


function CalcularPrecio () 
{
 	var cantidadLamparasIng;
    var precioUnidad;
    var precioTotal;
    var precioConDescuento;
    var marcaFoco;
    var porcentaje;
    var descuento;
    var impuestoIngresoBruto;
    var precioConImpuestoBruto;

    cantidadLamparasIng=parseInt(document.getElementById("txtIdCantidad").value); 
    precioUnidad=35;
    porcentaje=0;
    marcaFoco= document.getElementById("Marca").value;
    
    
        if (cantidadLamparasIng > 5) //A
        {
         porcentaje= 50;
        }
        else
        {
            if (cantidadLamparasIng == 5) //B
            { 
                if (marcaFoco == "ArgentinaLuz" ) 
                {
                    porcentaje= 40;
                }
                else
                {
                    porcentaje= 30;
                }
            }
            else
            {
                if (cantidadLamparasIng == 4) //C
                {
                    if (marcaFoco == "ArgentinaLuz" || "FelipeLamparas")
                    {
                         porcentaje = 25;
                    }
                    else
                    {
                         porcentaje = 20;
                    }    
                } 
                else
                {
                    if (cantidadLamparasIng == 3) //D
                    {
                        if (marcaFoco == "ArgentinaLuz") 
                        {
                            porcentaje = 15;
                        }
                        else
                        {
                            if (marcaFoco == "FelipeLamparas")
                            {
                                porcentaje = 10
                            }
                            else
                            {
                                porcentaje = 5 
                            }

                        }

                    } 
                   
                }
               
            }   

        }

        precioTotal=(cantidadLamparasIng*precioUnidad);
        descuento = precioTotal * porcentaje / 100; 
        precioConDescuento = precioTotal - descuento;
        impuestoIngresoBruto= precioConDescuento * 10 / 100;
        precioConImpuestoBruto= precioConDescuento + impuestoIngresoBruto;
        

        if(precioConDescuento < 120) 
        {   
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        }
        else // E
        {
            precioConImpuestoBruto= precioConDescuento + impuestoIngresoBruto;
            document.getElementById("txtIdprecioDescuento").value = precioConImpuestoBruto;  
            alert("Usted pago " + impuestoIngresoBruto + " de IIBB.");
        }


}  

*/




//Alumno= Sebastian Lencinas

/*TP-N4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
/*
function CalcularPrecio () 
{
    var cantidadLamparasIng;
    var marcaLampara;
    var precioLamparaUnidad; 
    var precioLamparaTotal;
    var descuento;
    var precioLamparaDescuento;
    var impuestoIngresoBruto; 
    var precioConImpuestoBruto;
    

    precioLamparaUnidad = 35 
    cantidadLamparasIng= parseInt(document.getElementById("txtIdCantidad").value)
    marcaLampara= document.getElementById("Marca").value
    
    switch (cantidadLamparasIng)
    {
    case 1: 
        switch (marcaLampara)
        {
            default: 
            break
        }
    break;

    case 2:
        switch (marcaLampara)
        {
            default:
            break;
        }
    break;

    case 3:
        switch (marcaLampara)
        {
            case "ArgentinaLuz":
                descuento= 15;
                break;
            case "FelipeLamparas":
                descuento= 10;
                break;
            default:
                descuento= 5;
                break;
        }
    break;

    case 4:
        switch (marcaLampara)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento= 25
                break; 
            default:
                descuento= 20;
                break;
        }      
    break;

    case 5:
        switch (marcaLampara)
        {
            case "ArgentinaLuz":
                descuento= 40;
                break;
            default:
                descuento= 30;
                break; 
        }
    break;

    default: 
    descuento= 50; 
    break;

    }


    precioLamparaTotal= precioLamparaUnidad * cantidadLamparasIng;
    descuento= precioLamparaTotal * descuento / 100;
    precioLamparaDescuento= precioLamparaTotal - descuento; 
    impuestoIngresoBruto= precioLamparaDescuento * 10 / 100; 
    precioConImpuestoBruto= precioLamparaDescuento + impuestoIngresoBruto;





    if(precioLamparaDescuento < 120) // E 
    {
    document.getElementById("txtIdprecioDescuento").value = precioLamparaDescuento;
    } 
    else
    {
    document.getElementById("txtIdprecioDescuento").value = precioConImpuestoBruto; 
    alert("Usted pago $" + impuestoIngresoBruto +  " de IIBB.");
    }
        


}

*/



//Alumno= Sebastian Lencinas

/*TP-N4 v1 .	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

/*
//switch con if 1

function CalcularPrecio () 
{
    var cantidadLamparasIng;
    var marcaLampara;
    var precioLamparaUnidad; 
    var precioLamparaTotal;
    var descuento;
    var precioLamparaDescuento;
    var impuestoIngresoBruto; 
    var precioConImpuestoBruto;
    

    precioLamparaUnidad = 35 
    cantidadLamparasIng= parseInt(document.getElementById("txtIdCantidad").value)
    marcaLampara= document.getElementById("Marca").value
    
    if(cantidadLamparasIng < 3)
    {
        switch (marcaLampara)
        {
            default: 
            break
        }
        
    }
    else
    {   
        if(cantidadLamparasIng == 3) 
        {
            switch (marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento= 15;
                    break;
                case "FelipeLamparas":
                    descuento= 10;
                    break;
                default:
                    descuento= 5;
                    break;
            }
        }
        else
        {
            if(cantidadLamparasIng == 4)
            {
                switch (marcaLampara)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento= 25
                        break; 
                    default:
                        descuento= 20;
                        break;
                }    
            }
            else
            {
                if(cantidadLamparasIng == 5)
                {
                    switch (marcaLampara)
                    {
                        case "ArgentinaLuz":
                            descuento= 40;
                            break;
                        default:
                            descuento= 30;
                            break; 
                    }
                }
                else
                {
                    if(cantidadLamparasIng >= 6)
                    {
                        switch (marcaLampara)
                        {
                        default: 
                        descuento= 50; 
                        break;
                        }
                    }                   
                }
            }
        }      
    }
        


    precioLamparaTotal= precioLamparaUnidad * cantidadLamparasIng;
    descuento= precioLamparaTotal * descuento / 100;
    precioLamparaDescuento= precioLamparaTotal - descuento; 
    impuestoIngresoBruto= precioLamparaDescuento * 10 / 100; 
    precioConImpuestoBruto= precioLamparaDescuento + impuestoIngresoBruto;





    if(precioLamparaDescuento < 120) // E 
    {
    document.getElementById("txtIdprecioDescuento").value = precioLamparaDescuento;
    } 
    else
    {
    document.getElementById("txtIdprecioDescuento").value = precioConImpuestoBruto; 
    alert("Usted pago $" + impuestoIngresoBruto +  " de IIBB.");
    }
        


}

*/

//Alumno= Sebastian Lencinas

/*TP-N4 v2 .	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/


//switch con if 2

function CalcularPrecio () 
{
    var cantidadLamparasIng;
    var marcaLampara;
    var precioLamparaUnidad; 
    var precioLamparaTotal;
    var descuento;
    var precioLamparaDescuento;
    var impuestoIngresoBruto; 
    var precioConImpuestoBruto;
    

    precioLamparaUnidad = 35 
    cantidadLamparasIng= parseInt(document.getElementById("txtIdCantidad").value)
    marcaLampara= document.getElementById("Marca").value
    
    switch (cantidadLamparasIng)
    {
    case 1: 
    case 2:
        switch (marcaLampara)
        {
            default:
            break;
        }
    break;

    case 3:
       
            if (marcaLampara == "ArgentinaLuz") 
            {
                 descuento = 15;
            }   
    break;

    case 4:
        if (marcaLampara == "ArgentinaLuz" || "FelipeLamparas")
        {
             descuento = 25;
        }
        else
        {
             descuento = 20;
        }           
    break;

    case 5:
        if (marcaLampara == "ArgentinaLuz" ) 
        {
            descuento = 40;
        }
        else
        {
            descuento = 30;
        }
    break;

    default: 
    descuento= 50; 
    break;

    }
        


    precioLamparaTotal= precioLamparaUnidad * cantidadLamparasIng;
    descuento= precioLamparaTotal * descuento / 100;
    precioLamparaDescuento= precioLamparaTotal - descuento; 
    impuestoIngresoBruto= precioLamparaDescuento * 10 / 100; 
    precioConImpuestoBruto= precioLamparaDescuento + impuestoIngresoBruto;





    if(precioLamparaDescuento < 120) // E 
    {
    document.getElementById("txtIdprecioDescuento").value = precioLamparaDescuento;
    } 
    else
    {
    document.getElementById("txtIdprecioDescuento").value = precioConImpuestoBruto; 
    alert("Usted pago $" + impuestoIngresoBruto +  " de IIBB.");
    }
        


}




