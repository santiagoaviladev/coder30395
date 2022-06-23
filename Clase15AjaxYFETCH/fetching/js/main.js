

 programarAcciones()

 function programarAcciones()
 {
   programarBotonVer()



 }

 function programarBotonVer()
 {
     const btn = document.getElementById("ver");
     btn.addEventListener("click", ()=>{
         cargarListadoDePosts();
     })
 }

 function cargarListadoDePosts()
 {

   fetch('https://jsonplaceholder.typicode.com/posts/')
   .then((res)=>res.json())
   .then((json)=>mostrarListadoDePosts(json))
   .catch((error)=>alert("No puedo mostrar info. Intente mas tarde "+error))

 }

 function mostrarListadoDePosts(posts)
 {
    const container = document.getElementById("appContainer")
    posts.forEach((blogpost)=>{

         mostrarPost(blogpost, container)

    })
 }

 function mostrarPost(post, div)
 {
      const divPost = document.createElement("div");
      divPost.innerHTML=`<h2>${post.title}</h2>
                         <p>${post.body}</p>
                         <hr>`
      div.appendChild(divPost);             
 }

   