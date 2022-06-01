/*
    Inicializa la aplicación
    Agrega H1 
    Agrega Subtítulo
*/
function inicializarAplicacion()
{
    crearTitulo(); 
    crearMenu();
    

}

function crearTitulo()
{
    
}
function crearMenu()
{
     
     
     
     

}
/*
    Muestra el listado de usuarios del sistema
*/
function listarUsuarios(listaUsuarios)
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaUsuarios");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="Nombre";
   encabezado.appendChild(tdNombre);

   const tdApellido = document.createElement("th");
   tdApellido.innerHTML="Apellido";
   encabezado.appendChild(tdApellido);

   const tdCumpleanos = document.createElement("th");
   tdCumpleanos.innerHTML="Cumpleaños:";
   encabezado.appendChild(tdCumpleanos);

   const tdAcciones = document.createElement("th");
   tdAcciones.innerHTML="Acciones";
   encabezado.appendChild(tdAcciones);

   miLista.appendChild(encabezado)
   
   listaUsuarios.forEach((usuario)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.nombre}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.apellido}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`No reporta`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`Borrar | Editar`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}


function agregarUsuario()
{      
    let id=1;
    if(usuarios.length>0)
    {
       id=usuarios[usuarios.length-1].id+1;
    }
    
    let nombre=prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let usuario = new Usuario(id, nombre, apellido);

    usuarios.push(usuario);
}

function buscarUsuario()
{
   let nombre = prompt("Ingresa el nombre que quieres buscar");

   let encontrados = usuarios.filter((usuario)=>usuario.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

   console.table(encontrados);

   return encontrados;

}