// JavaScript Document
var hamburger = document.querySelector('nav button');

hamburger.addEventListener('click', openmenu); 
function openmenu (){
  document.body.classList.toggle("isactive");
}



