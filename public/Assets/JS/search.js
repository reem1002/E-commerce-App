const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose =  document.getElementById("nav-close");


if(navToggle) {
  navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show-menu")
  }
)};
if(navClose) {
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu")
  }
)};

function toggleCart() {
    const sidebarElement = document.getElementById('cart-barside');
    sidebarElement.classList.toggle('cart-visible');
  }
  
  function toggleWish() {
    const sidebarElement = document.getElementById('wish-barside');
    sidebarElement.classList.toggle('wish-visible');
  }

  const categories = [...new Set(products.map((item)=>
    {return item}))];
  
    let i = 0;
    let f =0;

function displayProductCards(filteredProducts) {
    const container = document.getElementById('searchProds');
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product__item');
        card.innerHTML = `
            <div class="product__banner">
                <a href="details.html" class="product__images">
                    <img src="${product.img}" alt="" class="product__img default"/>
                    <img src="${product.img}" alt="" class="product__img hover"/>
                </a>
                <div class="product__actions">
                    
                    
                    
                </div>
                <div class="product__badge light-green">${product.type[(product.type.length)-1]}</div>
            </div>
            <div class="product__content">
                <span class="product__category">${product.catgory}</span>
                <a href="details.html">
                    <h3 class="product__title">${product.name}</h3>
                </a>
                <div class="product__price flex">
                    <span class="new__price">${product.price} L.E</span>
                </div>
                <button href="#" class="action__btn cart__btn" onclick="addtocart(`+(i++)+`)" aria-label="Add To Cart"><i class="fi fi-rr-shopping-cart-add"></i></button>
                <button href="#" class="action__btn fav__btn wishlist-btn" onclick="addToWish(`+(f++)+`)"" aria-label="Add To Favorites"><i class="fi fi-rr-heart"></i></button>
            </div>
        `;

        container.appendChild(card);
    });
}

function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.type.some(type => type.toLowerCase().includes(searchTerm))
    );

    
    displayProductCards(filteredProducts);

   
    const searchResultsTitle = document.getElementById('search-results-title');
    searchResultsTitle.textContent = `Search Results for "${searchTerm}"`;
}


if (window.location.pathname.endsWith('search.html')) {
   
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('searchTerm');

   
    if (searchTerm) {
        document.getElementById('search-field').value = searchTerm;
        filterProducts(searchTerm);
    }
}


const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-field').value.toLowerCase();
        window.location.href = `search.html?searchTerm=${searchTerm}`;
    });
}






// -------------------------------------------------------------------------------------------------//
