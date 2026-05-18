function showMessage(){

  alert("Email: raj385039@gmail.com");

}
// SCROLL ANIMATION

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      el.classList.add('show');
    }
  });
});
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(function(){
    alert("Message Sent ✅");
  }, function(){
    alert("Failed ❌");
  });

});
