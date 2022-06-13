   /*EJEMPLO 1 */
  let nombreUsuario = localStorage.getItem("nombreUsuario") 

  if(!nombreUsuario)
  {
    nombreUsuario = ""
  }

  console.log(nombreUsuario)