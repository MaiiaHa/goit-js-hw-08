!function(){var t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];console.log(t);var o=document.querySelector(".gallery"),a=t.map((function(t){var o=t.preview,a=t.original,e=t.description;return'\n      <div class="gallery__item">\n        <a class="gallery__link" href="'.concat(a,'">\n          <img\n          class="gallery__image"\n          src="').concat(o,'"\n          data-source="').concat(a,'"\n          alt="').concat(e,'"\n          />\n        </a>\n     </div>')})).join("");o.insertAdjacentHTML("beforeend",a),o.addEventListener("click",(function(t){if(t.preventDefault(),!t.target.classList.contains("gallery__image"))return;t.target.src=t.target.dataset.source;var a=basicLightbox.create('\n  <img src="'.concat(t.target.src,'" width="800" height="600">\n  '));a.show(),o.addEventListener("keydown",(function(t){"Escape"===t.code&&a.close()}),{once:!0})}));var e=document.querySelectorAll(".gallery__image");e.forEach((function(t){t.loading="lazy",t.height="240px"})),console.log(e);var i=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting,t.target.src=t.target.dataset.source,i.unobserve(t.target)}))}));e.forEach((function(t){i.observe(t)}))}();
//# sourceMappingURL=01-gallery.d77f927e.js.map
