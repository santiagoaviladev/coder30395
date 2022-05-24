
//length
const misNumeros = [10,9,8,7,6,6,100,200,300,2000,-100,400, 500];
//misNumeros = []; //ERROR POR SER CONST

 console.log("LONGITUD DEL ARRAY", misNumeros.length);//11

 for(let i=0;i<misNumeros.length;i++)
 {
    console.log(misNumeros[i]);
 }

//push
 misNumeros.push(1000);
 console.log("NUMEROS", misNumeros);

//unshift
 misNumeros.unshift(-1000);
 console.log("NUMEROS", misNumeros);

 /*
    Pedir 5 numeros al usuarios
    Guardarlos en un array
    Imprimir el array
 
    let numerosDeUsuario = [];
    for(let i =0;i<5;i++)
    {
        let numero = Number(prompt("Ingrese un numero"));
        numerosDeUsuario.push(numero);
    }
    console.log("NUMEROS DE USUARIO", numerosDeUsuario)
*/ 

//pop
    misNumeros.pop();
    console.log("NUMEROS SIN ULTIMO", misNumeros);

//shift
    misNumeros.shift();
    console.log("NUMEROS SIN ULTIMO", misNumeros);



//splice


//join


//concat


//slice


//indexOf


//includes


//reverse
