
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
 const perros = ["budhis", "firulais", "silver", "lucy"];
 perros.splice(1,2);
 console.log(perros);


//join
const gatos = ["loki", "michi", "ursula", "zuko", "pola"];
const texto = gatos.join(" ");
console.log(texto);

//concat
const mascotas = perros.concat(gatos);
console.log(mascotas);

//slice
const otrosPerros = ["budhis", "firulais", "silver", "lucy"];
const nuevoPerros= otrosPerros.slice(1,2);
console.log(nuevoPerros);



//indexOf
let mascotaParaBuscar = prompt("Ingrese su mascota");
const indice = otrosPerros.indexOf(mascotaParaBuscar);
if(indice===-1)
{
    alert("SU mascota no está con nosotros");
}
else{
    alert("SU mascota  está con nosotros");
}


//includes
mascotaParaBuscar = prompt("Ingrese su mascota"); // busca un elemento y devuelve true o false
const esta = otrosPerros.includes(mascotaParaBuscar);
if(esta)
{
    alert("SU mascota no está con nosotros");
}
else{
    alert("SU mascota  está con nosotros");
}


//reverse
mascotas.reverse(); // invierte el array
console.log(mascotas);