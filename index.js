 function loadCategories(){
    // fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data=>{
        displayCategories(data.categories);
    })
 }


const displayCategories=(categories)=>{
    // get the container
   const categoryContainer=document.getElementById('category-container');
    // console.log(categories);
    // loop through the categories
    for(const category of categories){
        // create a div
        const div=document.createElement('div');
        // add inner html
        div.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
        `
        // append to the container
        categoryContainer.appendChild(div); 

    }
}
loadCategories();