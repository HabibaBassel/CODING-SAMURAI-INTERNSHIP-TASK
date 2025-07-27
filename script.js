document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
  this.reset();
});
