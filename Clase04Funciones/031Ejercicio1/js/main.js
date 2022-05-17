
 /*Escriba un programa que permita simular una calculadora. 
 El usuario debe ingresar una de las siguientes opciones: 
 1. Suma 
 2. Resta
 3. Mul 
 4. Div 
 5. Fin
 El menú debe mostrarse, siempre que el usuario no ingrese la opción 5
 El programa debe mostrar error en los siguientes casos: 
    A. El usuario no selecciona una opción válida de 1 a 5 
    B. El usuario no ingresa datos válidos para operar
    C. El usuario ingresa un '0' como segundo operando para la división
*/

  function mostrarMenu()
  {
      let opcion = 0;
      while(opcion!==5)
      {
          opcion = Number(prompt(`Ingrese una opción: 
                                 1. SUMA
                                 2. RESTA
                                 3. MUL
                                 4. DIV
                                 5. FIN`));
          switch(opcion)
          {
              case 1:{
                sumar();
                break;
              }
              case 2:{
                restar();
                break;
              }
              case 3:{
                multiplicar();
                break;
              }
              case 4:{
                 dividir();
                  break;
              }
              case 5:{
                alert("Gracias por usar nuestros servicios")
                break;
              }
              default: 
              {
                  alert("Ingrese una opción válida")
                  break;
              }
          }
      }
  }