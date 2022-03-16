const  express=require('express');
const app=express();
const port= process.env.PORT || 1402;

app.listen(port,function (err){
    console.log('Serve is running. To check please access browser on : localhost:1402');
});

app.use(express.static('puplic'));
app.set('view engine','ejs');
app.set('views','./views');
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
    // the old one cannot be reused.

    conn.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }// to avoid a hot loop, and to allow our node script to
        else console.log('Connected to database')// to avoid a hot loop, and to allow our node script to
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


        app.get('/',function (req,res) {
            let sql = "SELECT * FROM Nhom2_Products";
            let products;
            conn.query(sql, function (err, rs) {
                    if (err) console.log(err)
                    else {
                        products = rs;// rslaf  mot mang
                    }
                }
            );
            let sqlVehicle = "select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Vehicles'order by timeEnd asc\n" +
                "limit 3;";
            let productsVehicle ;
            conn.query(sqlVehicle, function (err, rs){
                if (err)console.log(err)
                else {
                    res.render('home',{
                        sql_productTop3:rs,
                        products:products
                    })
                }
            });

        });
        app.get('/productDetail/:ID',function (req,res){
            let id= parseInt(req.params.ID);
            let sql="select * from Nhom2_Products where ID="+id+"";
            let product,timeEnd;
            conn.query(sql,function (err,rs){
                if (err) console.log(err)
                else{ product=rs[0];
                    timeEnd=rs[0].timeEnd;
                    res.render('Products_Detail',{
                        product : product,
                        timeEnd: timeEnd
                    });
                    }
            })
        });

        app.get('/contact_Us',function (req,res){
            res.render('contact_Us');
        });
        app.get('/auction',function (req,res){
            let sql = "SELECT * FROM Nhom2_Products";
            let products;
            conn.query(sql, function (err, rs) {
                    if (err) console.log(err)
                    else {
                        res.render('auction',{
                            products:rs
                        })
                    }
                }
            );
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
        app.get('/aboutus',function (req,res){
            res.render('aboutUs');
        });

        app.get('/Vehicle',function (req,res){

                let sql1="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Vehicles'order by timeEnd asc\n" +
                "limit 3;";
            conn.query(sql1,function (err,rs){
                if(err) console.log(err)
                else
                    product_top3=rs;
                {   let sql2="select  * from Nhom2_Products\n" +
                    "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                    "where nameCategory like 'Vehicles'";
                    conn.query(sql2,function (err,rs1){
                        if(err) console.log(err)
                        else
                            res.render('showCategory',{
                                product_bottom: rs1,
                                product_top3: rs
                            })
                    });}
            });

        });

        app.get('/Jewelry',function (req,res){
            let sql1="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Jewelry'order by timeEnd asc\n" +
                "limit 3;";
            let product_top3;
            conn.query(sql1,function (err,rs){
                if(err) console.log(err)
                else
                    product_top3=rs
            });

            var sql2="select  * from Nhom2_Products\n" +
            "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
            "where nameCategory like 'Jewelry'";
            conn.query(sql2,function (err,rs){
                if(err) console.log(err)
                else
                    res.render('showCategory',{
                        product_bottom: rs,
                        product_top3: product_top3
                    })
            });
        })
        app.get('/Watches',function (req,res){
            let sql1="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Watches'order by timeEnd asc\n" +
                "limit 3;";
            let product_top3;
            conn.query(sql1,function (err,rs){
                if(err) console.log(err)
                else
                    product_top3=rs;
            });

            let sql2="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Watches'";
            conn.query(sql2,function (err,rs){
                if(err) console.log(err)
                else
                    res.render('showCategory',{
                        product_bottom: rs,
                        product_top3: product_top3
                    })
            });
        });
        app.get('/Coin&Bullion',function (req,res){
            let sql1="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Coins & Bullion'order by timeEnd asc\n" +
                "limit 3;";
            let product_top3;
            conn.query(sql1,function (err,rs){
                if(err) console.log(err)
                else
                    product_top3=rs;
            });

            let sql2="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Coins & Bullion'";
            conn.query(sql2,function (err,rs){
                if(err) console.log(err)
                else
                    res.render('showCategory',{
                        product_bottom: rs,
                        product_top3: product_top3
                    })
            });
        })
        app.get('/RealEstate',function (req,res){
            let sql1="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Real Estate'order by timeEnd asc\n" +
                "limit 3;";
            let product_top3;
            conn.query(sql1,function (err,rs){
                if(err) console.log(err)
                else
                    product_top3=rs;
            });

            let sql2="select  * from Nhom2_Products\n" +
                "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                "where nameCategory like 'Real Estate'";
            conn.query(sql2,function (err,rs){
                if(err) console.log(err)
                else

                        res.render('showCategory',{
                            product_bottom: rs,
                            product_top3: product_top3
                        })
                    });
            })
        app.get('/Electronics',function (req,res){
                let sql1="select  * from Nhom2_Products\n" +
                    "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                    "where nameCategory like 'Electronics'order by timeEnd asc\n" +
                    "limit 3;";
                let product_top3;
                conn.query(sql1,function (err,rs){
                    if(err) console.log(err)
                    else
                        product_top3=rs;
                });

                let sql2="select  * from Nhom2_Products\n" +
                    "inner join Nhom2_Category on Nhom2_Products.ID_Category=Nhom2_Category.ID_Category\n" +
                    "where nameCategory like 'Electronics'";
                conn.query(sql2,function (err,rs){
                    if(err) console.log(err)
                    else
                        res.render('showCategory',{
                            product_bottom: rs,
                            product_top3: product_top3
                        })
                });
            })
        app.get('/SearchResults',function (req,res){
            var params= req.query.search;
            let sql2="SELECT * FROM `Nhom2_Products` WHERE nameProduct LIKE '%"+params+"%'";
            conn.query(sql2,function (err,rs){
                if(err) console.log(err)
                else
                    res.render('SearchResults',{
                        product_top3: rs,
                    })
            });
        });
        //create localstorage for product