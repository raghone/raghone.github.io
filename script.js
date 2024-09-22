const form = document.querySelector('form');


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "raghavananandan1111@gmail.com",
        Password : "025CF9A0A8A6607FAF44A78388E02F7E80F8",
        To : 'raghavananandan1111@gmail.com',
        From : "raghavananandan1111@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit" ,(e) => {
    e.preventDefault();

    sendEmail();
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => { 
    sections.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navlinks.forEach(links => {
           links.classList.remove('active');
           document.querySelector('header nav a[href*='  + id + ']').classList.add('active');
        });
      }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}