function showMessage(){
  alert("Email: raj385039@gmail.com");
}

/* EMAILJS */

(function(){
  emailjs.init("fCb09Jcm7PyeEls5d");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
     "service_kce6jkn",
    "template_rmkmf56",
    this
  ).then(function(){

    alert("Message Sent Successfully ✅");

  }, function(error){

    alert("Failed ❌");

  });

});
// ACTIVE NAV HIGHLIGHT ON SCROLL

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});
