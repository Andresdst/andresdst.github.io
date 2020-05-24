let btnMenu = document.querySelector(".btn-menu");
let listContainer = document.querySelector(".list-container"); //menu
let menu = document.querySelector(".menu"); //contanier menu
let goTop = document.querySelector(".go-top"); //contanier menu

const csscolor = "#00909e";
let activador = true;

//menu nav responsive

btnMenu.addEventListener("click", () => {
  document.querySelector(".btn-menu i").classList.toggle("fa-times"); //cambio de icono

  if (activador) {
    //editando css
    listContainer.style.left = "0";
    listContainer.style.transition = "0.5s";

    activador = false;
  } else {
    listContainer.style.left = "-100%";
    listContainer.style.transition = "0.5s";
    activador = true;
  }
});

//nav enlaces

let enlaces = document.querySelectorAll(".lists li a");
let blog = document.querySelector(".lists li #blog");
blog.addEventListener("click", function () {
  alert("en construccion");
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    enlaces.forEach((link) => {
      link.classList.remove("active");
    });

    event.target.classList.add("active");
  });
});

//efecto scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menu.style.top = "0px";
    menu.style.transition = "0.5s";
  } else {
    menu.style.top = "-60px";
    menu.style.transition = "0.5s";
  }

  if (currentScrollPos <= 709) {
    menu.style.borderBottom = "none";
    goTop.style.right = "-50px";
  } else {
    menu.style.borderBottom = "3px solid " + csscolor;
    menu.style.transition = "1s";
    goTop.style.right = "50px";
  }
  prevScrollPos = currentScrollPos;
};

goTop.addEventListener("click", () => {
  document.body.scrollTop = 0; //safari
  document.documentElement.scrollTop = 0; //otros navegadores
});
