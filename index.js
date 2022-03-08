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
//mysql
var mysql=require('mysql');
var db_config = {
    host:'remotemysql.com',
    user:'XqPN07sBqS',
    password:'69BMdT2EOc',
    database:'XqPN07sBqS',
    port:3306,
    stream:false,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }
};

var conn;

function handleDisconnect() {
    conn = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.

    conn.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }
        else console.log('connected to database')// to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    conn.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();
//end connect to database
app.get('/Vehicle',function (req,res){
    var sql1="select  * from Nhom2_Products\n" +
        "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID\n" +
        "where nameCategory like 'Vehicles'order by timeEnd asc\n" +
        "limit 3;";
    var product_top3;
    conn.query(sql1,function (err,rs){
        if(err) console.log(err)
        else
             product_top3=rs;
    });

    var sql2="select  * from Nhom2_Products\n" +
        "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID\n" +
        "where nameCategory like 'Vehicles'";
    conn.query(sql2,function (err,rs){
        if(err) console.log(err)
        else
            res.render('Vehicle',{
                product_bottom: rs,
                product_top3: product_top3
            })
    });
})
