// popup.js

function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
  }
  
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    window.location.href = "outra-pagina.html";
  }

var recusaPopUp = document.getElementById("popup")

popup.addEventListener("click", function(){
  popup.style.display = "none";
})