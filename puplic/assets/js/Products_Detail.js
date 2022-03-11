
// start slide
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
//start number change
var active=document.getElementById('counter1');//number1
var actives=setInterval(activeD,30)
var n=0;
function activeD(){
    active.innerHTML=n;
    n++;
    if (n==69){
        clearInterval(actives)
    }
}
var active2=document.getElementById('counter2');//number2
var active2s=setInterval(activeD2,10)
var k=0;
function activeD2(){
    active2.innerHTML=k;
    k++;
    if (k==223){
        clearInterval(active2s)
    }
}
var active3=document.getElementById('counter3');//number2
var active3s=setInterval(activeD3,30)
var h1=0;
function activeD3(){
    active3.innerHTML=h1;
    h1++;
    if (h1==90){
        clearInterval(active3s)
    }
}
// hien thi thong tin
function show(a){
    var des=document.getElementById('discription');
    var deli=document.getElementById('Delivery-options');
    var bid=document.getElementById('bid-history');
    var que=document.getElementById('question');
    if(a==1){
        deli.style.display='none';
        bid.style.display='none';
        que.style.display='none';
        des.style.display='block';
    }
    else if (a==2){
        deli.style.display='block';
        bid.style.display='none';
        que.style.display='none';
        des.style.display='none';
    }
    else if (a==3){
        deli.style.display='none';
        bid.style.display='block';
        que.style.display='none';
        des.style.display='none';
    }
    else if (a==4){
        deli.style.display='none';
        bid.style.display='none';
        que.style.display='block';
        des.style.display='none';
    }
};



