// SISTEMA CRUD USUARIOS
 
 class Usuario{
     constructor(id,nombre,apellido)
     {
         this.id=id;
         this.nombre=nombre;
         this.apellido=apellido;
     }
 }

 const usuario1 = new Usuario(1, "Ezequiel", "Natale");
 const usuario2 = new Usuario(2, "Roman", "Stoleru");
 const usuario3 = new Usuario(3, "Fernando", "Benitez");
 const usuario4 = new Usuario(4, "Jorge", "Dáttoli");
 const usuario5 = new Usuario(5, "Ivana", "Villanueva");
 const usuario6 = new Usuario(6, "Fabian", "Gutman");

 const usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6];
 console.log("INICIAL:", usuarios);

 mostrarMenu();


 function mostrarMenu()
 {
    let opcion = 0;
    
    while(opcion!==10)
    {
        opcion = Number( prompt(`Seleccione una acción:
                            1. Agregar Usuario
                            2. Eliminar Usuario
                            3. Modificar Usuario
                            4. Listar usuarios
                            5. Buscar Usuario
                            6. Listar NOMBRE + APELLIDO
                            10. Salir`));

    switch(opcion)
    {
        case 1:
        {
            agregarUsuario();
            break;
        }
        case 2: 
        {
            eliminarUsuario();
        }
        case 3: 
        {
            modificarUsuario();
        }
        case 4:
        {
            listarUsuarios();
            break;
        }
        case 5:
        {
                buscarUsuario();
                break;
        }
        case 6:
        {
                listarNombreMasApellido();
                break;
        }
        default:{
            alert("opcion inválida");
            break;
        }
       
    }

    }
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


 function listarUsuarios()
 {
    
 }

 function eliminarUsuario(){

    
    

 }
 
 function buscarUsuario()
 {
    

 }


 function modificarUsuario()
 {
    

 }


 function listarNombreMasApellido()
 {
    
 }