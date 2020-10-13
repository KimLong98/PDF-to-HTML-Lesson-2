const menuOpen = document.querySelector(".menu__collapse");
const menuClose = document.querySelector(".menu__close");
const headerMenu = document.querySelector(".header .menu");
const menuitem = document.querySelector(".menu__list");

menuOpen.addEventListener("click", function() {
    headerMenu.classList.add("is-open");
  });
   
  menuClose.addEventListener("click", function() {
    headerMenu.classList.remove("is-open");
  });

  menuitem.addEventListener("click",function(){
    headerMenu.classList.remove("is-open");
  })

  document.addEventListener("click", function(event) {
    if (
      !headerMenu.contains(event.target) && // headerMenu không chưa element khi click
      !event.target.matches(".menu__collapse") // element khi click không phải là menuOpen
    ) {
      headerMenu.classList.remove("is-open");
    }
  });