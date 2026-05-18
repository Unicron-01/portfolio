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
