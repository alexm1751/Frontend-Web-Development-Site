(function() {

    /*Similar to the lab work this simply replaces element id for nav bar
   to show the menu on the event handler of the hamburger button*/

    /*List variables*/
    let hamburger = document.getElementById("hamburger");
    let navMenu = document.getElementById("nav-menu");
    let colour = document.getElementById("bars");
    let toggle = false;
    hamburger.addEventListener("click", toggleMenu);

    function toggleMenu() {
        if (navMenu.classList.contains('show-menu')) {
            // true: it's visible
            navMenu.classList.remove("show-menu"),
            // hide it
            colour.classList.remove("fa-active");
            // remove white hamburger css

            toggle = false
        }
        else {
            navMenu.classList.add("show-menu"),
            // show it
            colour.classList.add("fa-active");
            // add white hamburger css

            toggle = true
        }
    }

}
)();

(function() {
    let d = document;

    /*This functions a little more complex but encorperates part of the toggle function so when we click a menu item link
  retracts the menu screen, during testing the screen would move to the correct location but the menu would
  remain shown*/

    function init() {

        /*Listing the anchor points in the menu bar as variables which the scroll to method will move to*/

        //Links 
        let about = d.getElementById('anchorpoint1');
        let roles = d.getElementById('anchorpoint2');
        let education = d.getElementById('anchorpoint3');
        let portfolio = d.getElementById('anchorpoint4');
        let contact = d.getElementById('anchorpoint5');
        let navMenu = document.getElementById("nav-menu");
        let colour = document.getElementById("bars");

        /*These are the ID's to the anchors on the HTML where the anchor points above will point to*/
        //Anchors
        let anchor1 = d.getElementById('about');
        let anchor2 = d.getElementById('roles');
        let anchor3 = d.getElementById('education');
        let anchor4 = d.getElementById('portfolio');
        let anchor5 = d.getElementById('contact');

        /*The user could press any button on the menu screen, therefor every one has to have an eventlistner*/

        /*First of all, these eventlisteners tell the scrollTo function which anchor to scroll to*/
        about.addEventListener('click', (e)=>{
            scrollTo(anchor1, e)
        }
        , false);
        /*Example: Here anchorpoint1 in the HTML has been 
        clicked, pass anchor1 also known as the about section.*/
        roles.addEventListener('click', (e)=>{
            scrollTo(anchor2, e)
        }
        , false);
        education.addEventListener('click', (e)=>{
            scrollTo(anchor3, e)
        }
        , false);
        portfolio.addEventListener('click', (e)=>{
            scrollTo(anchor4, e)
        }
        , false);
        contact.addEventListener('click', (e)=>{
            scrollTo(anchor5.offsetTop, e)
        }
        , false);

        /*Second, the menu must disapear showing the display again to display the scroll. There for we call togglemenu again
    which is set to true before entering the function preventing the script from ever getting stuck.*/
        about.addEventListener("click", toggleMenu);
        roles.addEventListener("click", toggleMenu);
        education.addEventListener("click", toggleMenu);
        portfolio.addEventListener("click", toggleMenu);
        contact.addEventListener("click", toggleMenu);

        /*Same as above function but this one always removes the display menu*/
        let toggle = true;
        function toggleMenu() {
            if (navMenu.classList.contains('show-menu')) {
                // true: it's visible
                navMenu.classList.remove("show-menu"),
                // hide it
                colour.classList.remove("fa-active");

                toggle = false
            }
        }
    }

    /*This function informs the browser that an animation is going to be performed/called before the next repaint.
  The function takes a callback as its argument this calls the method when the user is requesting the animation to happen on
  screen.*/
    let requestAnimFrame = (function() {
        return window.requestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
        ;
    }
    )();

    /*This function takes in two arguements the anchor I have stated above and finally the element that has triggered the callback
  finally a duration is set to allow for calculation time during the event.*/
    function scrollTo(to, callback, duration=1500) {

        /*Gives to the distance relative to the top of the parent node, this is later passed into change bellow to understand the distance
    needed to be calculated.*/
        if (isDomElement(to)) {
            to = to.offsetTop;
        }

        /*This function detects all scrolling elements and moves all of them instead of finding individual elements*/
        function move(amount) {
            document.documentElement.scrollTop = amount;
            document.body.parentNode.scrollTop = amount;
            document.body.scrollTop = amount;
        }

        function position() {
            return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
        }

        let start = position()
          , change = to - start
          , /*The offsettop minus the start to calculate the distance of change*/
        currentTime = 0
          , increment = 20;
        /*This time changes the speed of the animation once it is entered into the bellow equation*/

        let animateScroll = function() {
            /*increment the time*/
            currentTime += increment;
            /*call the the quadratic function to calculate the value for in-out easing animation*/
            let val = Math.easeInOutQuad(currentTime, start, change, duration);
            /*move the document.body*/
            move(val);
            /*Checking whether the animation has run otherwise run it, this is a failsafe for the animation*/
            if (currentTime < duration) {
                requestAnimFrame(animateScroll);
            } else {
                if (callback && typeof (callback) === 'function') {
                    /*This is informing the script that the animation has been completed sending a callback to repaint*/
                    callback();
                }
            }
        };

        animateScroll();
    }

    init();
}
)();

/*Because of the JavaScript call to the menu bar, css does not have time to use normal animations to elements
Here we used JavaScript animation functions instead so that the script executes the animation before closing.*/

/*t = The Current Time*/
/*d = The Duration of the animation*/
/*c = the change in value*/
/*b = finally the starting value*/

Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
;

function isDomElement(obj) {
    return obj instanceof Element;
}
