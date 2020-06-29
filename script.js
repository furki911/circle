var slide_index = 1;  

displaySlides(slide_index);  
function nextSlide(n) {  
   displaySlides(slide_index += n);  
}  
   
function currentSlide(n) {  
   displaySlides(slide_index = n);  
}  
   
function displaySlides(n) {  
   var i;  
   var slides = document.getElementsByClassName("showSlide");  
   if (n > slides.length) { slide_index = 1 }  
   if (n < 1) { slide_index = slides.length }  
   for (i = 0; i < slides.length; i++) {  
      slides[i].style.display = "none";  
   }  
   slides[slide_index - 1].style.display = "block";  
} 

var element = document.querySelector('.navbar__links'); 
var btn = document.querySelector('.navbar__links--item--btn');

var boolean = true;

function clicked() {
      var flag = window.matchMedia('(max-width: 37.5em)').matches;
      if (flag) {
         element.classList.toggle('display');
         setAtt(boolean);
      }
};

(clicked)();

function setAtt() {

   if (!boolean) {
      btn.setAttribute('name', 'active');
      boolean = true;
   } else {
      btn.setAttribute('name', 'inactive');
      boolean = false;
   }
};