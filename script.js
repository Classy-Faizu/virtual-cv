// ==========================
// Typing Animation
// ==========================

const text = [
    "Final-Year BSc Information Technology Student",
    "Aspiring Software Developer",
    "AI & Machine Learning Enthusiast",
    "Cybersecurity Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            erase();

        },1500);

        return;

    }

    setTimeout(type,70);

})();

function erase(){

    letter = currentText.slice(0,--index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === 0){

        count++;

        setTimeout(type,300);

        return;

    }

    setTimeout(erase,35);

}


// ==========================
// Scroll Reveal
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>observer.observe(section));
particlesJS("particles-js", {

    particles: {

        number: {
            value: 60
        },

        color: {
            value: "#38bdf8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            }

        }

    }

});
// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
