
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
//time down
var t=document.getElementById("time")
var d=2,h=23,m=55,s=22;
var timeout=setInterval(counDown,1000)
function counDown(){
    t.innerHTML=(d+'D:'+h+'H:'+m+'M:'+s+'S')
    s--;
    if(s<0){
        m--;
        s=60
    }else if (m<0){
        h--;
        m=60
    }
    else if(h<0){
        d--;
        h=24
    }
    else if(d<0||d==null||h==null||m==null||s==null) {
        clearImmediate(timeout)
        t.innerHTML="Time Ended";
    }
}
//end timedown
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
var h=0;
function activeD3(){
    active3.innerHTML=h;
    h++;
    if (h==90){
        clearInterval(active3s)
    }
}

