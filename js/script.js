$(function(){
	new WOW().init();
});

   var typed = new Typed(".type", {
  strings: [
  "I am",
  "a developer",
  "a designer",
  "and an artist"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop:true,
  
});

document.getElementById("knowmorebtn").onclick = function(){
	location.href = "main.html";
}; 
document.getElementById("p2-viewsite").onclick = function(){
	location.href = "images/underconstruction.jpg";
};     
//--------------------------------------------- porfolio.js -------------------------------------//


