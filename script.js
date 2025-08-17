document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  document.getElementById("feedback").innerText = 
      `Merci ${nom}, votre message a été envoyé !`;

  this.reset();
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let nom = document.getElementById("nom").value;
  document.getElementById("feedback").innerText = 
      `Merci ${nom}, votre message a été envoyé !`;
  this.reset();
});
