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
            nameProduct:'Xe Hồng Kỳ H9',
        img1:'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-20/1587367928-566-xe-hong-ky-h9-cua-trung-quoc-ra-mat-canh-tranh-voi-rolls-royce-989--10--1587361690-width660height440.jpg',
        img2:'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-20/1587367928-11-xe-hong-ky-h9-cua-trung-quoc-ra-mat-canh-tranh-voi-rolls-royce-989--16--1587361690-width660height371.jpg',
        img3:'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-20/1587367928-762-xe-hong-ky-h9-cua-trung-quoc-ra-mat-canh-tranh-voi-rolls-royce-989--7--1587361690-width660height440.jpg',
        img4:'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-20/1587367928-942-xe-hong-ky-h9-cua-trung-quoc-ra-mat-canh-tranh-voi-rolls-royce-989--12--1587361690-width660height440.jpg',
        img5:'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-20/1587367929-852-xe-hong-ky-h9-cua-trung-quoc-ra-mat-canh-tranh-voi-rolls-royce-989--17--1587361690-width660height495.jpg',
        img6:'https://cdn.24h.com.vn/upload/2-2020/images/2020-04-20/1587367929-887-xe-hong-ky-h9-cua-trung-quoc-ra-mat-canh-tranh-voi-rolls-royce-989--11--1587361690-width660height440.jpg',
        priceCurrent:70000,
        bidIncrement:1000,
        description:'Xe Hồng Kỳ H9 : Siêu xe hiện đang cạnh tranh trực tiếp với RollRoice'
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