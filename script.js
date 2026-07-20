// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Scroll reveal animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{
    observer.observe(section);
});


// Highlight active navigation link

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// Back to top button

const button=document.createElement("button");

button.innerHTML="↑";

button.id="topBtn";

document.body.appendChild(button);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        button.style.display="block";

    }else{

        button.style.display="none";

    }

});

button.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
