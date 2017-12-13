


(function() {

  let hamburger = document.getElementById("hamburger");
  let navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", toggleMenu);



  let toggle = false;
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      hamburger.classList.remove("contrast"),
      hamburger.classList.add("hamburger"),
      toggle = false
    }

    else{
      navMenu.classList.add("show-menu"), // show it
      hamburger.classList.remove("hamburger"),
      hamburger.classList.add("contrast"),
      toggle = true
    }
  }

}
)();

