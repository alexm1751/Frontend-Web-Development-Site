


(function() {

  let hamburger = document.getElementById("hamburger");
  //let cross = document.getElementById("cross");
  let navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", toggleMenu);
  //cross.addEventListener("click", toggleMenu);


  let toggle = false;
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }


  // function hideB(){
  //   let ham = document.getElementById('hamberger');
  //   if (ham.style.display !== 'none') {
  //       ham.style.display = 'none';
  //   }
  //   else {

  //     ham.style.display= "block";
  //    }
  //  }
  // function hideC(){
  //       let cross = document.getElementById('cross');
  //   if (cross.style.display !== 'none') {
  //       cross.style.display = 'none';
  //   }
  //   else {

  //     cross.style.display= "block";
  //    }
  //   }
  // function showB(){
  //       let ham = document.getElementById('hamberger');
  //   if (ham.style.display !== 'block') {
  //       ham.style.display = 'block';
  //   }
  //   else {

  //     ham.style.display= "none";
  //    }
  //  }
  // function showC(){
  //       let cross = document.getElementById('cross');
  //   if (cross.style.display !== 'block') {
  //       cross.style.display = 'block';
  //   }
  //   else {

  //     cross.style.display= "none";
  //    }
  //   }
}
)();

