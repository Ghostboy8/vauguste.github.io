let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Developpeur informatique', 'Designer', 'Freelancer','Mentor informatique'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function SendMail(){
    
    var params ={
        from_name : document.getElementById('fullName').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_scveumi","template_qso6m7b",params).then(function(res){
        alert("success" +" "+ res.status);
    })
}

// Get the elements
const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

// Add event listener to the "Read More" button
readMoreBtn.addEventListener("click", function() {
    // Toggle the display of the additional text
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Lire moins"; // Change button text to "Read Less"
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "En savoir plus"; // Change button text back to "Read More"
    }
});
