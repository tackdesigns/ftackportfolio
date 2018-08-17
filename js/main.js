const menuBtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector("#branding");
const menu = document.querySelector("#menu-nav");
const header = document.querySelector("#menu-hdr");
const scrollIcon = document.querySelector("#scroll-icon");
const navLinks = document.querySelectorAll(".nav-link");

// Set variables
let showMenu = false;
let isScrolled = false;

// Add event Listener to the menu button
menuBtn.addEventListener("click", toggleMenu);

// onLoad function
(function() {
  // Set Click Event for first button
  navLinks[0].addEventListener("click", function() {
    scrollTo(document.documentElement, 0, 500);
    console.log("Firdt button clicked");
  });

  // Set Click Event for second button
  navLinks[1].addEventListener("click", function() {
    scrollTo(document.documentElement, 725, 500);
    console.log("Second button clicked");
  });

  // Set Click Event for third button
  navLinks[2].addEventListener("click", function() {
    scrollTo(document.documentElement, 1800, 500);
    console.log("Third button clicked");
  });

  // Set Click Event for last button
  navLinks[3].addEventListener("click", function() {
    scrollTo(document.documentElement, 2810, 500);
    console.log("Last button clicked");
  });
})();

// Toggle menu function
function toggleMenu() {
  if (!showMenu) {
    // Add the classes
    menuBtn.classList.add("close");
    if (!isScrolled) {
      menuBranding.classList.add("show");
    }
    menu.classList.add("show");

    // Set the boolean of showMenu
    showMenu = true;
  } else {
    // Remove the classes
    menuBtn.classList.remove("close");
    if (!isScrolled) {
      menuBranding.classList.remove("show");
    }
    menu.classList.remove("show");

    // Set the boolean of showMenu
    showMenu = false;
  }
}

// Check for scrolling event
window.addEventListener("scroll", function() {
  scrollpos = window.scrollY;
  if (scrollpos >= 150) {
    // Check if the navigation is opened
    if (!showMenu) {
      header.classList.add("scrolled");
      menuBranding.classList.add("show");
    }

    // Hide the scroll icon from the first section
    scrollIcon.classList.add("hide");

    // Set isScrolled to true
    isScrolled = true;
  } else {
    if (!showMenu) {
      header.classList.remove("scrolled");
      menuBranding.classList.remove("show");
    }
    scrollIcon.classList.remove("hide");
    isScrolled = false;
  }

  // Check for the menu
  checkMenu(scrollpos);
});

function removeAllActives() {
  for (i = 0; i < navLinks.length; ++i) {
    navLinks[i].classList.remove("active");
  }
}

function checkMenu(pos) {
  if (pos > 150 && pos < 1220) {
    removeAllActives();
    navLinks[1].classList.add("active");
  } else if (pos >= 1220 && pos < 2350) {
    removeAllActives();
    navLinks[2].classList.add("active");
  } else if (pos >= 2350) {
    removeAllActives();
    navLinks[3].classList.add("active");
  } else {
    removeAllActives();
    navLinks[0].classList.add("active");
  }
}

// SCROLL ANIMATION
function scrollTo(element, to, duration) {
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
