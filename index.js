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
    res.render('Products_Detail');
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