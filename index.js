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
    res.send('Đây là trang chủ')
});
app.get('/productDetail',function (req,res){
    res.render('Products_Detail');
})