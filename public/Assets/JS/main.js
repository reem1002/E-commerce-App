
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




var swiperCategories = new Swiper(".categories__container", {
    navigation: {
    spaceBetween: 24,
    loop: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    

    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });


const tabs =document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');


tabs.forEach((tab)=> {
  tab.addEventListener("click",()=>{
  const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent)=> {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab)=>{
      tab.classList.remove("active-tab");
    })

    tab.classList.add("active-tab");
  })
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('sbtn');
    scrollButton.addEventListener('click', function() {
        var section2 = document.getElementById('vsec');
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});
const categories = [...new Set(products.map((item)=>
  {return item}))];

  let i = 0;
  let f =0;
  document.addEventListener('DOMContentLoaded', function () {
            
    const allProductsContainer = document.getElementById('prods__all');
    
    function createProductElement(product) {
        const card = document.createElement('div');
        card.classList.add('product__item');
        card.innerHTML = `
            <div class="product__banner">
                <a href="details.html" class="product__images">
                    <img src="${product.img}" alt="" class="product__img default"/>
                    <img src="${product.img}" alt="" class="product__img hover"/>
                </a>
                <div class="product__actions">
                    <!-- Add any specific actions for the product here -->
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
        return card;
    }

    
    function populateProductsContainer(container, products) {
        products.forEach(function (product) {
            const productElement = createProductElement(product);
            container.appendChild(productElement);
        });
    }

    
    populateProductsContainer(allProductsContainer, products.concat(polaroids));
});





var cart = [];

function addtocart(a){
  cart.push({...categories[a]});
  saveCartToLocalStorage();
  dissplaycart();
  
};
function delElement(a) {
  cart.splice(a, 1);
  saveCartToLocalStorage();
  dissplaycart();
}

function dissplaycart (a) {
  let j = 0, total=0;
  
  document.getElementById("cartCount").innerHTML=cart.length;
  if(cart.length==0){
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    

  }else{
    document.getElementById("cartItem").innerHTML = cart.map((items)=>
    { 
      
      var {img ,name ,price}=items;
      total+=price;
      document.getElementById("total").innerHTML= `Total: ${total}.00 L.E`;
      return`
      <div class="cart-item">
      <div class="row-img">
      <img class="rowing" src=${img}>
      </div>
      <h4 style="font-size:12px;">${name}</h4>
      <h4 style="font-size:15px;" id=prc> ${price} L.E</h4>`+`<i class="fi fi-rr-trash trashbtn" onclick="delElement(`+ (j++) +`)"></i></div>`
      

    }).join("");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  dissplaycart();
});

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}



// -------------------------------------------------------------------------------------------------//

var wish = [];

function addToWish(a) {
  wish.push({...categories[a]});
  saveWishToLocalStorage();
  displayWish();
}


function removeElementFromWish(a) {
  wish.splice(a, 1);
  saveWishToLocalStorage();
  displayWish();
}

function displayWish() {
  let j = 0

  document.getElementById("wishCount").innerHTML = wish.length;
  if (wish.length == 0) {
    document.getElementById("wishItem").innerHTML = "Your wish list is empty";
  } else {
    document.getElementById("wishItem").innerHTML = wish.map((item) => {
      var { img, name, price } = item;
      total += price;
      document.getElementById("total").innerHTML = `Total: ${total}.00 L.E`;
      return `
      <div class="wish-item">
        <div class="row-img">
          <img class="rowing" src=${img}>
        </div>
        <h4 style="font-size:12px;">${name}</h4>
        <h4 style="font-size:15px;" id=prc> ${price} L.E</h4>
        <i class="fi fi-rr-trash trashbtn" onclick="removeElementFromWish(${j++})"></i>
      </div>`;
    }).join("");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  wish = JSON.parse(localStorage.getItem('wish')) || [];
  displayWish();
});

function saveWishToLocalStorage() {
  localStorage.setItem('wish', JSON.stringify(wish));
}




