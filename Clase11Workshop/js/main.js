
let categoriasSistema = [];

initApp();


function initApp() {
    loadMode();
    programarModeBtn();
    loadData();
}

function loadData() {
    loadCategories();
    showCategories();
    showProducts();
    console.log(categoriasSistema);
}

function loadCategories() {
    const categorias = products.map(element =>  element.category);
    const categoriasSet = new Set(categorias);
    const categoriasUnicas = [...categoriasSet];

    categoriasSistema = categoriasUnicas.map(element => {
        return {
            id: element,
            nombre: element,
        }
    })
}

function showCategories() {
    const divCategorias = document.getElementById("categoryMenu");
    categoriasSistema.forEach(element => {
        const btn = document.createElement("button");
        btn.classList.add("catBtn");
        btn.innerText = element.nombre;

        btn.addEventListener("click", () => {
            showProducts(element.nombre);
        })

        divCategorias.appendChild(btn);
    })

}
//Asignación por defecto: 
//Cuando se invoca sin parámetro, asigna el valor por defecto
function showProducts(categoryName="") {
    
    let productsToShow = products;

    if(categoryName!=="")
    {
        productsToShow = products.filter(product => product.category === categoryName);
    }

    
    const categoryNode = document.getElementById("categoryName");
    categoryNode.innerText = categoryName.toUpperCase();

    /*productList*/
    const productList = document.getElementById("productList")
    productList.innerHTML="";
    productsToShow.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<img src="${product.image}">
        <div class="productInfo">
            <div class="productName">
               ${product.title}
            </div>
            <br>
            <span class="productPrice">
                Price:<b> $${product.price} </b>
            </span> /
            <span class="productRate">
                Rate: <b> ${product.rating.rate} </b>
            </span>
           
        </div>
        <button class="addToList">
            Agregar al Carrito
        </button>
        `

        productList.appendChild(div);
    })


}