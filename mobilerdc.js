//small screen menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("side-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
//end of small screen menu

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['SI (Technical)','Engineer','Frontend Developer','Web Developer','Designer'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,
});
//end of typed js

//image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// end of image slideshow




// contact google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzsTqnGCtMNxxdtUUSNEYxUFHfvD_BNjSEaIVHFmgelo5DNPWwvYSD49Mo3XXLwWISQAA/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
            msg.innerHTML=""
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
//end of google sheets

// scroll reveal

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero-name1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero-name2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".hero-name3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".hero-social-icons", {
  ...scrollRevealOption,
  delay: 2000,
  origin: "bottom",
});
ScrollReveal().reveal(".hero-social-icons a", {
  ...scrollRevealOption,
  delay: 2000,
  interval: 500,
});
ScrollReveal().reveal(".intro-image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".intro-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".intro-content .section-subheader", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".intro-description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".intro-grid", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".intro-content h4", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".intro-flex div", {
  ...scrollRevealOption,
  delay: 3000,
  interval: 500,
});

ScrollReveal().reveal(".skill-container .section-header", {
  ...scrollRevealOption,
  delay: 250,
});
ScrollReveal().reveal(".skill-container .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".choose-card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 400,
});

ScrollReveal().reveal(".resume-container .section-header", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".resume-container .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".journey-grid > div > div", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 400,
});

ScrollReveal().reveal(".download-btn", {
  ...scrollRevealOption,
  delay: 3800,
  // delay: 1000,
});
ScrollReveal().reveal(".certifications-container .section-subheader", {
  ...scrollRevealOption,
  delay: 4000,
});
ScrollReveal().reveal(".slideshow-container",  {
  ...scrollRevealOption,
  delay: 4200,
});

ScrollReveal().reveal(".slideshow-dot",  {
  ...scrollRevealOption,
  delay: 4200,
});

ScrollReveal().reveal(".services-container .section-header", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".services-container .section-subheader", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".work-list > .work", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});



ScrollReveal().reveal(".contact-container .section-header", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".contact-container .lgscrview", {
  ...scrollRevealOption,
  delay: 750,
});

ScrollReveal().reveal(".contact-content-left > .info-item", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".contact-social-icons ", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".cont-btn ", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".smscrview", {
  ...scrollRevealOption,
  delay: 3250,
});
ScrollReveal().reveal(".contact-content-right", {
  ...scrollRevealOption,
  delay: 3500,
});
