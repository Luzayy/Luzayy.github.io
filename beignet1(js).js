var state1=0;
var state2=0;
var state3=0;
var state4=0;
var state5=0;
var state6=0;
var state7=0;


function visible1(){
if (state1==0){
document.getElementById("cacher1").style.display="block"
state1=1
}else{
document.getElementById("cacher1").style.display="none"
state1=0;
}
}
function visible2(){
if (state2==0){
document.getElementById("cacher2").style.display="block"
state2=1
}else{
document.getElementById("cacher2").style.display="none"
state2=0;
}
}
function visible3(){
if (state3==0){
document.getElementById("cacher3").style.display="block"
state3=1
}else{
document.getElementById("cacher3").style.display="none"
state3=0;
}
}

function visible4(){
if (state4==0){
document.getElementById("cacher4").style.display="block"
state4=1
}else{
document.getElementById("cacher4").style.display="none"
state4=0;
}
}

function visible5(){
if (state5==0){
document.getElementById("cacher5").style.display="block"
state5=1
}else{
document.getElementById("cacher5").style.display="none"
state5=0;
}
}

function visible6(){
if (state6==0){
document.getElementById("cacher6").style.display="block"
state6=1
}else{
document.getElementById("cacher6").style.display="none"
state6=0;
}
}

function visible7(){
if (state7==0){
document.getElementById("cacher7").style.display="block"
state7=1
}else{
document.getElementById("cacher7").style.display="none"
state7=0;
}
}








 var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
	 