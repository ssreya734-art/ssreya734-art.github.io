// ======================================
// PORTFOLIO JAVASCRIPT
// Sreya S Portfolio
// ======================================

// ===============================
// THEME TOGGLE
// ===============================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }

    else{

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});

// ===============================
// MOBILE MENU
// ===============================

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.querySelector(".typing");

const words = [

    "MCA Student",

    "Aspiring Full Stack Developer",

    "Python Django Developer",

    "Java Programmer",

    "Web Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 110);

}

typeEffect();

// ===============================
// SCROLL TO TOP
// ===============================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollTopBtn.style.display="flex";

    }

    else{

        scrollTopBtn.style.display="none";

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(

".section,.glass-card,.project-card,.skill-card"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// ===============================
// HERO IMAGE PARALLAX
// ===============================

const heroImage = document.querySelector(".glass-circle");

window.addEventListener("mousemove",(e)=>{

    let x =

    (window.innerWidth/2 - e.clientX)/40;

    let y =

    (window.innerHeight/2 - e.clientY)/40;

    heroImage.style.transform =

    `rotateY(${-x}deg) rotateX(${y}deg)`;

});

window.addEventListener("mouseleave",()=>{

    heroImage.style.transform =

    "rotateY(0deg) rotateX(0deg)";

});

// ===============================
// SMOOTH FADE
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});