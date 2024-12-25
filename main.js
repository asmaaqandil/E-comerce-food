let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle('fa-times') 
  navbar.classList.toggle('active') 
}

// Toggle Search Form
let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");
let closeSearch = document.querySelector("#close-search");

// Toggle Cart Items
let cartIcon = document.querySelector(".fa-shopping-cart");
let cartItems = document.querySelector(".cart-items");
let closeCart = document.querySelector("#close-cart");

searchIcon.onclick = () => {
    searchForm.classList.add("active");
    cartItems.classList.remove("active"); 
};

closeSearch.onclick = () => {
    searchForm.classList.remove("active");
};

cartIcon.onclick = () => {
    cartItems.classList.add("active");
    searchForm.classList.remove("active"); 
};

closeCart.onclick = () => {
    cartItems.classList.remove("active");
};


let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, 
        once: false,   
    });
});
 




