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
    res.render('home',{
        products:products
    })
});app.get('/contact_Us',function (req,res){
    res.render('contact_Us');
});
app.get('/auction',function (req,res){
    res.render('auction');
});
app.get('/Sign_In',function (req,res){
    res.render('Sign_In');
});
app.get('/Sign_Up',function (req,res){
    res.render('Sign_Up');
});
app.get('/Dashboard',function (req,res){
    res.render('Dashboard');
});
app.get('/profile',function (req,res){
    res.render('profile');
});
app.get('/MyBids',function (req,res){
    res.render('MyBids');
});
app.get('/Winning-Bid',function (req,res){
    res.render('Winning-Bid');
});
var products=[
    {ID:0,
        item:0,
        nameProduct:'Xe Lamborghini Raventado',
        img1:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg',
        img2:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595098.jpg',
        img3:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595104.jpg',
        img4:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595107.jpg',
        img5:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg',
        img6:'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595098.jpg',
        priceCurrent:2000000,
        bidIncrement:10000,
        description:'Siêu xe duy nhất trên thế giới không có chiếc thứ 2',
        timeEnd:{
            day:10,
            hour:3,
            min:25,
            second:44
        }
    },
    {ID:1,
        item:1,
        nameProduct:'Huyndai Sonata 2018 New',
        img1:'https://anh.24h.com.vn/upload/1-2017/images/2017-03-09/1489042359-148904035627142-01.jpg',
        img2:'https://dailyhyundaigialai.com/wp-content/uploads/2018/02/Hyundai-Sonata-2018-noi-that.jpg',
        img3:'https://cms-i.autodaily.vn/du-lieu/2017/08/16/2018-hyundai-sonata-20t-limited-front-three-quarter-in-motion-05.jpg',
        img4:'https://tuvanmuaxe.vn/upload/upload_img/images/Hyundai-Sonata-2018-chi-tiet-tuvanmuaxe_vn-3.jpg',
        img5:'https://tuvanmuaxe.vn/upload/upload_img/images/Hyundai-Sonata-2018-chi-tiet-tuvanmuaxe_vn-4.jpg',
        img6:'https://tuvanmuaxe.vn/upload/upload_img/images/Hyundai-Sonata-2018-chi-tiet-tuvanmuaxe_vn-6.jpg',
        priceCurrent:50000,
        bidIncrement:2000,
        description:'Xe Huyndai Sonata 2018 New : Dòng xe hot nhất trên thị trường hiện nay',
        timeEnd:{
            day:10,
            hour:3,
            min:25,
            second:44
        }
    },
];
//mssql
app.get('/productDetail',function (req,res){
    var timeEnd='2022-3-27 15:23:46';
    res.render('Products_Detail',{
        product: products[0],
        timeEnd: timeEnd
    });
});
app.get('/productDetail/:ID',function (req,res){
    console.log(req.params.ID);
    var i= parseInt(req.params.ID);
    var timeEnd='2022-3-27 15:23:46';
    res.render('Products_Detail',{
        product : products[i],
        timeEnd: timeEnd

    });
});