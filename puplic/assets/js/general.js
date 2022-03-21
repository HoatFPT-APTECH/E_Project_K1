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
///


//add to cart
 var products=JSON.parse(window.localStorage.getItem('products'));
 //{id: 1, img: 'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg', name: 'Xe Lamborghini Raventado', price: 300000}
for (var i=0;i<products.length;i++){  //hien thi localstorge
    var cart=document.querySelector('.cart-products');
       var creatdiv=document.createElement('div');

       var divContent=' <div class="single-product-item"> <div class="thumb"> <a href="#0"><img src="'+products[i].img+'" alt="shop"></a> </div> <div class="content"> <h4 class="title"><a href="#0">'+products[i].name+'</a></h4> <div class="price"><span class="pprice">$'+products[i].price+'</span> </div> <button class="remove-cart">Remove</button> </div> </div>'
       creatdiv.innerHTML=divContent;
       cart.append(creatdiv);
}
function removeItem(nameRemove){  // data tranfers and detele item from localstorge
      function check(c){
          return c.name==nameRemove
      };
       var pR=products.find(check);
       console.log(pR)
       products=products.filter(function (i){
           return i!=pR
       })
       window.localStorage.setItem('products',JSON.stringify(products));
}
function removeItemClient(){  // delete item from display and send name of product to function removeItem
    var itemRemove=document.querySelectorAll('.remove-cart');
    itemRemove.forEach(function (btn,index){
        btn.addEventListener('click',function (evn){
            var itemRemove= evn.target.parentElement;
            console.log(evn.target.parentElement)
            var nameRemove=itemRemove.querySelector('.content>.title>a').innerHTML;
            removeItem(nameRemove);
            itemRemove.parentElement.style.display='none';
            amount();
        })
    });
}
function amount(){ //display number products bought
    document.querySelector('.amount').innerHTML=JSON.parse(window.localStorage.getItem('products')).length;
}
removeItemClient();
amount();




