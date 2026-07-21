// ================================
// Mohammed Faiz Shootariya Portfolio
// ================================

// Typing Effect
const text = [
    "Final-Year BSc Information Technology Student",
    "Aspiring Software Developer",
    "Artificial Intelligence Enthusiast",
    "Machine Learning Enthusiast",
    "Cybersecurity Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const current = text[textIndex];

    if (!deleting) {

        typingElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % text.length;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();


// ================================
// Scroll Reveal
// ================================

const sections = document.querySelectorAll("section");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ================================
// Active Navigation Link
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Navbar Shadow on Scroll
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    }

});


// ================================
// Smooth Fade-In on Page Load
// ================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
// ================================
// Back To Top Button
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
