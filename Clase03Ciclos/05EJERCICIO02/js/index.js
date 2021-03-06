/*

 Usted ha sido contratado para hacer un programa de gestión 
 de precios de una bodega. 

 Escriba un programa que pida al usuario el número de paquetes 
 que ingresaron en el día. 

 Y el peso de cada uno de los paquetes.

 Y Calcule (mostrar en consola o en un alert)
 * El mayor peso
 * El menor peso
 * El peso promedio de los paquetes

*/

/*
    1. Pedirle al usuario el número de paquetes.
    2. Hasta que el usuario NO haya ingresado el peso de 
        TODOS LOS PAQUETES: 
        Pedirle al usuario, el peso de los paquetes
    3. Calcular mayor, menor y promedio
*/

 let numPaquetes =  Number(prompt("Ingrese el numero de paquetes"));
 let mayor = 0;
 let menor = 0;
 let pesoPaquetes = 0;


 for(let i=1; i<=numPaquetes; i++)
 {
    const pesoActual = Number(prompt("Ingrese el peso del paquete: "+(i)));
    pesoPaquetes += pesoActual;
    if(pesoActual>mayor)
    {
        mayor=pesoActual;
    }
    
    if(i==1)
    {
        menor = pesoActual;
    }

    if(menor>pesoActual)
    {
        menor=pesoActual;
    }
    
 }

 console.log("PROMEDIO ES IGUAL: "+ pesoPaquetes/numPaquetes);
 console.log("MAYOR ES IGUAL: "+ mayor);
 console.log("MENOR ES IGUAL: "+ menor);