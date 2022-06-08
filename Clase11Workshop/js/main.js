
initApp();


function initApp() {
    loadMode();
    programarModeBtn();
    loadData();
}

function loadData()
{
   loadCategories();
}

function loadCategories()
{
    const categories = products.map((element)=>element.category)
    const set = new Set(categories); 
    const finalCategories = [...set];
    console.log(finalCategories);
}

