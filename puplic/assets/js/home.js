// fixed header
var he=document.getElementById('header-bottom');
function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
        var y = window.scrollY;
        if (y > 150) {
            he.classList.add("scroll");
        } else {
            he.classList.remove("scroll");
        }
    }
};
onScroll();
//cart-button
var cart=document.getElementById('cart-button');
var cart_sidebar=document.getElementById('cart-sidebar-area');
var overLay=document.getElementById('overlay');
var close_cart=document.getElementById('close-btn')
function openCart(){
    cart.classList.add('active');
    cart_sidebar.classList.add('active');
    overLay.classList.add('active')
}
function closeButton(){
    cart.classList.remove('active');
    cart_sidebar.classList.remove('active');
    overLay.classList.remove('active');
};
