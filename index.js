//  loadCategories
 
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
        <button onclick="loadCategoriesVideos(${category.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
        `
        // append to the container
        categoryContainer.appendChild(div); 

    }
}
// loadVideos
function loadVideos(){
    // fetch
     fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data=>{
            displayVideos(data.videos);
             
        })
}

const displayVideos=(videos)=>{
    // get the container
    const videoContainer=document.getElementById('video-container');
    videoContainer.innerHTML='';
    // loop through the videos
    videos.forEach(video => {
        console.log(video);
        // create a div
        const div=document.createElement('div');
        // add inner html
        div.innerHTML=`
        <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${
            video.thumbnail
          }" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm rounded text-white bg-black px-2"
            >3hrs 56 min ago</span
          >
        </figure>

        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>

          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">
             ${video.authors[0].profile_name}
              ${
                video.authors[0].verified == true
                  ? `<img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                alt=""
              />`
                  : ``
              }
            </p>
            <p class="text-sm text-gray-400">${video.others.views} views</p>
          </div>

         </div>
        <button onclick=loadVideoDetails('${
          video.video_id
        }') class="btn btn-block">Show Details</button>
      </div>
    
    `;

        // append to the container
        videoContainer.appendChild(div);      
    });

}

// load music videos
const loadCategoriesVideos=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        displayVideos(data.category);
    })
}
 

loadCategories();