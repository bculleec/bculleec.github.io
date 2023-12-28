const aboutMeCard = document.querySelector('.about-me-card');
const projectsCard = document.querySelector('.projects-card');
const cursor = document.querySelector(".cursor");
let aboutMeOpened = false;
let projectsOpened = false;

function peekAboutMe() {
    if (!aboutMeOpened) {
        aboutMeCard.style.left = '-600px';
    }
}

function peekOutAboutMe() {
    if (!aboutMeOpened) {
        aboutMeCard.style.left = '-1000px';
    }
    
}

function showAboutMe() {
    aboutMeCard.style.left = '5px';
    aboutMeOpened = true;
}

function peekprojects() {
    if (!projectsOpened) {
        projectsCard.style.right = '-600px';
    }
}

function peekOutprojects() {
    if (!projectsOpened) {
        projectsCard.style.right = '-1500px';
    }
    
}

function showprojects() {
    projectsCard.style.right = '75px';
    projectsOpened = true;
}

document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
});

function OpenBoidsProject() {
    window.open('https://bculleec.github.io/boids-simulation/', '_blank');
}

function OpenToDoProject() {
    window.open('https://bculleec.github.io/todo-list/', '_blank');
}

function OpenThemeProject() {
    window.open('https://github.com/bculleec/cozybeige-theme', '_blank');
}
