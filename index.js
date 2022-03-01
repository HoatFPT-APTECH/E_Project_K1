const  express=require('express');
const app=express();
const port=8080;
app.listen(port,function (err){
    console.log('Serve is running. To check please access browser on : localhost:8080')
});
app.use(express.static('puplic'));
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',function (req,res){
    res.render('home')
});
app.get('/productDetail',function (req,res){
    var products=[
        {ID:132325456,
            item:45551,
            nameProduct:'Xe Lamborghini Raventado',
        img1:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg',
        img2:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595098.jpg',
        img3:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595104.jpg',
        img4:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595107.jpg',
        img5:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg',
        img6:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595098.jpg',
        priceCurrent:2000000,
        bidIncrement:10000,
        description:'Siêu xe duy nhất trên thế giới không có chiếc thứ 2'
        }
    ]
    res.render('Products_Detail',{
        products: products
    });
});
app.get('/contact_Us',function (req,res){
    res.render('contact_Us');
});
app.get('/Sign_In',function (req,res){
    res.render('Sign_In');
});
app.get('/Sign_Up',function (req,res){
    res.render('Sign_Up');
});