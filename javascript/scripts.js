


(function() {

  let hamburger = document.getElementById("hamburger");
  let navMenu = document.getElementById("nav-menu");
  let colour = document.getElementById("bars");
  let text1 = document.getElementById("b1")
  let text2 = document.getElementById("b2")
  let text3 = document.getElementById("b3")
  let text4 = document.getElementById("b4")
  let toggle = false;
  hamburger.addEventListener("click", toggleMenu);



  
  function toggleMenu(){
    if (navMenu.classList.contains('show-menu')) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      colour.classList.remove("fa-active");
      text1.classList.remove("hideblock1");
      text2.classList.remove("hideblock2");
      text3.classList.remove("hideblock3");
      text4.classList.remove("hideblock4");

      toggle = false
    }

    else{
      navMenu.classList.add("show-menu"), // show it
      colour.classList.add("fa-active");
      text1.classList.add("hideblock1");
      text2.classList.add("hideblock2");
      text3.classList.add("hideblock3");
      text4.classList.add("hideblock4");
      toggle = true
    }
  }

}
)();

(function() {
  let d = document;

  function init() {
    //Links 
    let about  = d.getElementById('anchorpoint1');
    let roles  = d.getElementById('anchorpoint2');
    let education  = d.getElementById('anchorpoint3');
    let portfolio  = d.getElementById('anchorpoint4');
    let contact  = d.getElementById('anchorpoint5');
    let navMenu = document.getElementById("nav-menu");
    let colour = document.getElementById("bars");
    let text1 = document.getElementById("b1")
    let text2 = document.getElementById("b2")
    let text3 = document.getElementById("b3")
    let text4 = document.getElementById("b4")

    //Anchors
    let anchor1      = d.getElementById('about');
    let anchor2      = d.getElementById('roles');
    let anchor3      = d.getElementById('education');
    let anchor4      = d.getElementById('portfolio');
    let anchor5      = d.getElementById('contact');
    
    about.addEventListener('click', (e) => { scrollTo(anchor1, e) }, false);
    roles.addEventListener('click', (e) => { scrollTo(anchor2, e) }, false);
    education.addEventListener('click', (e) => { scrollTo(anchor3, e) }, false);
    portfolio.addEventListener('click', (e) => { scrollTo(anchor4, e) }, false);
    contact.addEventListener('click', (e) => { scrollTo(anchor5.offsetTop, e) }, false);
    about.addEventListener("click", toggleMenu);
    roles.addEventListener("click", toggleMenu);
    education.addEventListener("click", toggleMenu);
    portfolio.addEventListener("click", toggleMenu);
    contact.addEventListener("click", toggleMenu);

    let toggle = true;
      function toggleMenu(){
      if (navMenu.classList.contains('show-menu')) { // true: it's visible
        navMenu.classList.remove("show-menu"), // hide it
        colour.classList.remove("fa-active");
        text1.classList.remove("hideblock1");
        text2.classList.remove("hideblock2");
        text3.classList.remove("hideblock3");
        text4.classList.remove("hideblock4");

        toggle = false
      }
    }
  }
      var requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  function scrollTo(to, callback, duration = 1500) { 

    
    if (isDomElement(to)) {
      to = to.offsetTop;
    }

    function move(amount) {
      document.documentElement.scrollTop = amount;
      document.body.parentNode.scrollTop = amount;
      document.body.scrollTop = amount;
    }

    function position() {
      return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
    }
    
    var start = position(),
      change = to - start,
      currentTime = 0,
      increment = 20;
    
    var animateScroll = function() {
      // increment the time
      currentTime += increment;
      // find the value with the quadratic in-out easing function
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      // move the document.body
      move(val);
      // do the animation unless its over
      if (currentTime < duration) {
        requestAnimFrame(animateScroll);
      }
      else {
        if (callback && typeof(callback) === 'function') {
          // the animation is done so lets callback
          callback();
        }
      }
    };
    
    animateScroll();
  }

  init();
}
)();
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
  let tc = (t /= d) * t * t;
  return b + c * (tc);
};

Math.inOutQuintic = function(t, b, c, d) {
  let ts = (t /= d) * t,
    tc = ts * t;
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

function isDomElement(obj) {
    return obj instanceof Element;
}

function isMouseEvent(obj) {
    return obj instanceof MouseEvent;
}

function findScrollingElement(element) { 
  do {
    if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
      return element;
    }
  } while (element = element.parentNode);
}
