---------------------- create table
create table Nhom2_Category(
 ID int primary key,
 nameCategory nvarchar(1000),
);
create table Nhom2_Products(
ID int primary key identity(1,1),
nameProduct nvarchar(1000) not null,
img1 nvarchar(4000) not null,
img2 nvarchar(4000) not null,
img3 nvarchar(4000) ,
img4 nvarchar(4000),
img5 nvarchar(4000),
img6 nvarchar(4000),
priceCurrent money not null,
bidIntcrement money not null,
buyNow money ,
description ntext,
timeEnd_day int,
timeEnd_Hour int,
timeEnd_Min int,
timeEnd_Second int,
ID_Category  int foreign key references Nhom2_Category(ID)
);
drop table Nhom2_Products;
drop table Nhom2_Category;
-------------------------------------------------------------------chen data
insert into Nhom2_Category(ID,nameCategory) values
(1,N'Vehicles'),
(2,N'Jewelry'),
(3,N'Watches'),
(4,N'Coins & Bullion'),
(5,N'Real Estate'),
(6,N'Electronics');
select * from Nhom2_Category;
---------------
select * from Nhom2_Products;
truncate table Nhom2_Products;
insert into Nhom2_Products(nameProduct,img1,img2,img3,img4,img5,img6,priceCurrent,bidIntcrement,buyNow,description,timeEnd_day,timeEnd_Hour,timeEnd_Min,timeEnd_Second,ID_Category)
values
(N'Xe Lamborghini Raventado',
N'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg',
 N'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595098.jpg',
        N'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595104.jpg',
        N'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595107.jpg',
        N'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595097.jpg',
        N'https://media.laodong.vn/Storage/NewsPortal/2019/6/10/738354/595098.jpg',
		200000,
		10000,
		300000,
		N'The Lamborghini Reventón (Spanish pronunciation: [reβenˈton]) ',
		2,
		3,
		25,
		44,
		1),
(N'Huyndai Sonata 2018 New', -- name product
N'https://anh.24h.com.vn/upload/1-2017/images/2017-03-09/1489042359-148904035627142-01.jpg',--img1
 N'https://dailyhyundaigialai.com/wp-content/uploads/2018/02/Hyundai-Sonata-2018-noi-that.jpg',--img2
        N'https://cms-i.autodaily.vn/du-lieu/2017/08/16/2018-hyundai-sonata-20t-limited-front-three-quarter-in-motion-05.jpg',--img3
        N'https://tuvanmuaxe.vn/upload/upload_img/images/Hyundai-Sonata-2018-chi-tiet-tuvanmuaxe_vn-3.jpg',--img4
        N'https://tuvanmuaxe.vn/upload/upload_img/images/Hyundai-Sonata-2018-chi-tiet-tuvanmuaxe_vn-4.jpg',--img5
        N'https://tuvanmuaxe.vn/upload/upload_img/images/Hyundai-Sonata-2018-chi-tiet-tuvanmuaxe_vn-6.jpg',--img6
		50000,--priceCurrent
		2000,--bidIncrement
		100000,----buyNow
		N'HuyDai Sonata 2018 is best car.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		1 ),--ID_Category
(N'2018 Nissan Rogue', -- name product
N'https://welovecar.vn/wp-content/uploads/2017/10/2018-nissan-x-trail-rear-wallpapers.jpg',--img1
 N'https://f1.media.brightcove.com/8/1078702682/1078702682_5425990432001_5425970515001-vs.jpg?pubId=1078702682&videoId=5425970515001',--img2
        N'https://www.irvingnissan.com/inventoryphotos/8553/jn1bj1cp4hw032126/ip/1.jpg',--img3
        N'https://blogmedia.dealerfire.com/wp-content/uploads/sites/376/2017/05/2017-NIssan-Rogue-Sport-Monarch-Orange-ext-side-1075x375_o.jpg',--img4
        N'https://images.hgmsites.net/hug/2017-nissan-rogue-sport_100588719_h.jpg',--img5
        N'https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/a/f3/af38c26b-1a52-5eb7-be91-3ce4c25c1fb5/59d7aed79ff89.image.jpg?crop=1567%2C1175%2C98%2C0&resize=1567%2C1175&order=crop%2Cresize',--img6
		100000,--priceCurrent
		10000,--bidIncrement
		150000,----buyNow
		N'HuyDai Sonata 2018 is best car.',--description
		1,--timeEnd_day
		4,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		1 ),--ID_Category
(N'Posche 911', -- name product
N'https://vcdn-vnexpress.vnecdn.net/2019/12/09/Porsche-911-992-3078-1575907348.jpg',--img1
 N'https://cdn.dailyxe.com.vn/image/anh-chi-tiet-porsche-911-carrera-s-2020-gia-9-6-ty-dong-tai-viet-nam-1-87865j.jpg?time=20191104183700',--img2
        N'https://cms-i.autodaily.vn/du-lieu/2019/11/04/Porsche/p23.jpg',--img3
        N'https://image.thanhnien.vn/w660/Uploaded/2022/kpqkcwvo/2019_08_28/porsche%20911/porsche-911-carrera-992-2019_ellw.jpg',--img4
        N'https://static1.cafeauto.vn/cafeautoData/upload/tintuc/thitruong/2018/12/tuan-03/porsche911carrera9922019-3-1545067829.jpg',--img5
        N'https://cms-i.autodaily.vn/du-lieu/2019/10/31/bd3873ad-2020-porsche-911-9.jpg',--img6
		10000,--priceCurrent
		10000,--bidIncrement
		150000,----buyNow
		N'Posche 911 is best car.',--description
		1,--timeEnd_day
		23,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		1 ),--ID_Category
		(N'Mercedex-Benz E-Class Sedan', -- name product
N'https://www.mercedes-benz.com.vn/vi/passengercars/content-pool/marketing-pool/stage-landingpages/e-class-saloon-w213-campaign-stage/_jcr_content/par/stageelementcampaign.MQ6.0.20210402105134.jpeg',--img1
 N'https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl/offers-and-services/_jcr_content/notificationboxes/notificationbox_128966351/image.MQ6.12.20200713085407.jpeg',--img2
        N'https://www.mercedes-benz.com.au/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl/explore/design-teaser/_jcr_content/par/teaserbox/teaserelement1/teaserelement/image.MQ6.6.20200818080625.jpeg',--img3
        N'https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210312075904.jpeg',--img4
        N'https://vnews24h.com/wp-content/uploads/2020/03/mercedes-benz-e-class.jpg',--img5
        N'https://autoblog.md/media/2021/05/Mercedes-Benz-E-Class-W214_1.png',--img6
		10000,--priceCurrent
		10000,--bidIncrement
		150000,----buyNow
		N'Mercedex-Benz E-class is best car.',--description
		1,--timeEnd_day
		23,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		1 ),--ID_
		----End Vehicle**************************************************************************************************************************************************************************************************************

				(N'Gold Ring with Clear Stones', -- name product
N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/dvEyi0DMaSol7BkSNire191DzOxvaUfQNBTCD3mE.jpeg',--img1
 N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img2
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/UgVRUtW5Gst249cKXqUuTGUQedBd4BWd0A2rzA2F.jpeg',--img3
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/v3heTlF9pHi5HNl4rTOKrpRdRSt4bMQbuiCGbnBZ.jpeg',--img4
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/zrmPMgXyl8CPJ2wI1Sh8jQJlFo4qVpNrBht6g1w8.jpeg',--img5
        N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Gold Ring with Clear Stones is best Ring.',--description
		2,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		2),--ID
		
				(N' Ring with Clear Stone Accents', -- name product
N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/Ry30aLDuK7yoBYklAQA9aunyylMPg9ngGauLKU6E.jpeg',--img1
 N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img2
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/UgVRUtW5Gst249cKXqUuTGUQedBd4BWd0A2rzA2F.jpeg',--img3
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/v3heTlF9pHi5HNl4rTOKrpRdRSt4bMQbuiCGbnBZ.jpeg',--img4
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/zrmPMgXyl8CPJ2wI1Sh8jQJlFo4qVpNrBht6g1w8.jpeg',--img5
        N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Gold Ring with Clear Stones is best Ring.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		2),--ID
						(N' Stunning Filigree Gold And Kundan Finger Ring', -- name product
N'https://staticimg.titan.co.in/Tanishq/Catalog/512714FCPAAP3_2.jpg?impolicy=pqmed&imwidth=640',--img1
 N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img2
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/UgVRUtW5Gst249cKXqUuTGUQedBd4BWd0A2rzA2F.jpeg',--img3
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/v3heTlF9pHi5HNl4rTOKrpRdRSt4bMQbuiCGbnBZ.jpeg',--img4
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/zrmPMgXyl8CPJ2wI1Sh8jQJlFo4qVpNrBht6g1w8.jpeg',--img5
        N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Stunning Filigree Gold And Kundan Finger Ring is best Ring.',--description
		3,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		2),--ID
		(N' Vintage 22 Karat Gold And Kundan Glass Floral Ring', -- name product
N'https://staticimg.titan.co.in/Tanishq/Catalog/512016FBCAAP3_1.jpg?impolicy=pqmed&imwidth=640',--img1
 N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img2
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/UgVRUtW5Gst249cKXqUuTGUQedBd4BWd0A2rzA2F.jpeg',--img3
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/v3heTlF9pHi5HNl4rTOKrpRdRSt4bMQbuiCGbnBZ.jpeg',--img4
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/zrmPMgXyl8CPJ2wI1Sh8jQJlFo4qVpNrBht6g1w8.jpeg',--img5
        N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Vintage 22 Karat Gold And Kundan Glass Floral Ring is best Ring.',--description
		3,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		2),--ID
				(N' Beguiling 22 Karat Yellow Gold Floral Finger Ring', -- name product
N'https://staticimg.titan.co.in/Tanishq/Catalog/511194FTDAA00_1.jpg?impolicy=pqmed&imwidth=640',--img1
 N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img2
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/UgVRUtW5Gst249cKXqUuTGUQedBd4BWd0A2rzA2F.jpeg',--img3
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/v3heTlF9pHi5HNl4rTOKrpRdRSt4bMQbuiCGbnBZ.jpeg',--img4
        N'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/zrmPMgXyl8CPJ2wI1Sh8jQJlFo4qVpNrBht6g1w8.jpeg',--img5
        N'http://pixner.net/sbidu/main/assets/images/auction/jewelry/auction-1.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Beguiling 22 Karat Yellow Gold Floral Finger Ring is best Ring.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		2),--ID
		----End jewelry products**********************************************************************************************************************************
				(N' Rolex GMT-MASTER II ', -- name product
N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-front-facing/landscape_assets/m126711chnr-0002_modelpage_front_facing_landscape.png',--img1
 N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-laying-down/landscape_assets/m126711chnr-0002_modelpage_laying_down_landscape.png',--img2
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-in-box/landscape_assets/m126711chnr-0002_modelpage_in_box_landscape.jpg',--img3
        N'https://rolex.dafc.com.vn/vi/dong-ho-rolex/rolex-gmt-master-ii/m126711chnr-0002',--img4
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-front-facing/landscape_assets/m126711chnr-0002_modelpage_front_facing_landscape.png',--img5
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-laying-down/landscape_assets/m126711chnr-0002_modelpage_laying_down_landscape.png',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Rolex is best Watches.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		3),--ID
				(N' Rolex ROLEX GMT-MASTER II 126710BLRO ', -- name product
N'https://bossluxurywatch.vn/uploads/san-pham/rolex/gmt-master/thumbs/645x0/rolex-gmt-master-ii-126710blro.png',--img1
 N'https://bossluxurywatch.vn/uploads/review-san-pham/rolex-gmt-master-ii-126710blro/rolex-gmt-master-ii-126710blro-5.jpg',--img2
        N'https://bossluxurywatch.vn/uploads/review-san-pham/rolex-gmt-master-ii-126710blro/rolex-gmt-master-ii-126710blro-4.jpg',--img3
        N'https://bossluxurywatch.vn/uploads/review-san-pham/rolex-gmt-master-ii-126710blro/rolex-gmt-master-ii-126710blro-1.jpg',--img4
        N'https://bossluxurywatch.vn/uploads/san-pham/rolex/gmt-master/thumbs/645x0/rolex-gmt-master-ii-126710blro.png',--img5
        N'https://bossluxurywatch.vn/uploads/san-pham/rolex/gmt-master/thumbs/645x0/rolex-gmt-master-ii-126710blro.png',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Rolex ROLEX GMT-MASTER II 126710BLRO is best Watches.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		3),--ID
				(N' Rolex SUBMARINER ', -- name product
N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-on-wrist/landscape_assets/m124060-0001_modelpage_on_wrist_landscape.jpg',--img1
 N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-laying-down/landscape_assets/m124060-0001_modelpage_laying_down_landscape.png',--img2
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-in-box/landscape_assets/m124060-0001_modelpage_in_box_landscape.jpg',--img3
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-in-tray/landscape_assets/m124060-0001_modelpage_on_tray_landscape.jpg',--img4
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-on-wrist/landscape_assets/m124060-0001_modelpage_on_wrist_landscape.jpg',--img5
        N'https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-laying-down/landscape_assets/m124060-0001_modelpage_laying_down_landscape.png',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Rolex SUBMARINER is best Watches.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		35,--timeEnd_minute
		44,--timeEnd_second
		3),--ID
		
				(N' Pre-Owned Rolex  ', -- name product
               N'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prero/prero3001627598/prero3001627598_q1_2-2.jpg',--img1
        N'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prero/prero3001627598/prero3001627598_q2_2-0.jpg',--img2
        N'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prero/prero3001627598/prero3001627598_q3_2-1.jpg',--img3
        N'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prero/prero3001627598/prero3001627598_q2_2-0.jpg',--img4
        N'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prero/prero3001627598/prero3001627598_q1_2-2.jpg',--img5
        N'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prero/prero3001627598/prero3001627598_q2_2-0.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Rolex is best Watches.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		3),--ID
				(N' Pre-Owned Rolex  ', -- name product
               N'https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tissot-tcomplication-squelette-mens-watch-t0704051641100-t0704051641100.jpg?width=546&height=546',--img1
        N'https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tissot-tcomplication-squelette-mens-watch-t0704051641100-t0704051641100_2.jpg?width=546&height=546',--img2
        N'https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tissot-tcomplication-squelette-mens-watch-t0704051641100-t0704051641100_3.jpg?width=546&height=546',--img3
        N'https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tissot-tcomplication-squelette-mens-watch-t0704051641100-t0704051641100_4.jpg?width=546&height=546',--img4
        N'https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tissot-tcomplication-squelette-mens-watch-t0704051641100-t0704051641100.jpg?width=546&height=546',--img5
        N'https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tissot-tcomplication-squelette-mens-watch-t0704051641100-t0704051641100_2.jpg?width=546&height=546',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Rolex is best Watches.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		3),--ID
		---End Watches******************************************************************************************************************************************************
		(N' Coin LIBERTY 1804  ', -- name product
               N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img1
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img2
        N'https://thumbor.granitemedia.com/1839-gobrecht-silver-dollar-jud-88-restrike/LOjxzUvvBU5WIoNK2vo-YDreWV4=/800x800/filters:format(webp):quality(80)/granite-web-prod/c2/f2/c2f27f6434a94f72801574a338381b40.jpeg',--img3
        N'https://thumbor.granitemedia.com/back-of-1839-gobrecht-silver-dollar-jud-88-restrike/dkQepIAbX5jr9lOUJgmsyudklW8=/800x800/filters:format(webp):quality(80)/granite-web-prod/34/37/343789be74764d568d9e9f936530aab5.jpeg',--img4
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img5
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Coin LIBERTY 1984 is old coin.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		4),--ID
		(N' Coin Italy 1224  ', -- name product
               N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjLyBvM39dH0JDVSw0QzI8pJ3Fj3ut1CAHg&usqp=CAU',--img1
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img2
        N'https://thumbor.granitemedia.com/1839-gobrecht-silver-dollar-jud-88-restrike/LOjxzUvvBU5WIoNK2vo-YDreWV4=/800x800/filters:format(webp):quality(80)/granite-web-prod/c2/f2/c2f27f6434a94f72801574a338381b40.jpeg',--img3
        N'https://thumbor.granitemedia.com/back-of-1839-gobrecht-silver-dollar-jud-88-restrike/dkQepIAbX5jr9lOUJgmsyudklW8=/800x800/filters:format(webp):quality(80)/granite-web-prod/34/37/343789be74764d568d9e9f936530aab5.jpeg',--img4
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img5
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Coin Italy 1984 is old coin.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		4),--ID
				(N' Coin Italy 1224  ', -- name product
               N'http://pixner.net/sbidu/main/assets/images/auction/coins/auction-1.jpg',--img1
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img2
        N'https://thumbor.granitemedia.com/1839-gobrecht-silver-dollar-jud-88-restrike/LOjxzUvvBU5WIoNK2vo-YDreWV4=/800x800/filters:format(webp):quality(80)/granite-web-prod/c2/f2/c2f27f6434a94f72801574a338381b40.jpeg',--img3
        N'https://thumbor.granitemedia.com/back-of-1839-gobrecht-silver-dollar-jud-88-restrike/dkQepIAbX5jr9lOUJgmsyudklW8=/800x800/filters:format(webp):quality(80)/granite-web-prod/34/37/343789be74764d568d9e9f936530aab5.jpeg',--img4
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img5
        N'https://thumbor.granitemedia.com/1804-silver-dollar-worth-millions-of-dollars/6loTaUPPwiy8zyrDfi0KnOJl8P8=/800x783/filters:format(webp):quality(80)/granite-web-prod/95/7e/957e0dbe1fff4216b5e0f30454a96676.jpeg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Coin Italy 1984 is old coin.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		4),--ID
		(N' Yuna Best Coin  ', -- name product
               N'https://cdn-amz.fadoglobal.io/images/I/71trlhw5G1L.jpg',--img1
        N'https://cdn-amz.fadoglobal.io/images/I/716AlhNocjL.jpg',--img2
        N'https://cdn-amz.fadoglobal.io/images/I/71DBahjxlmL.jpg',--img3
        N'https://cdn-amz.fadoglobal.io/images/I/612IqQKdcgL.jpg',--img4
        N'https://cdn-amz.fadoglobal.io/images/I/71trlhw5G1L.jpg',--img5
        N'https://cdn-amz.fadoglobal.io/images/I/716AlhNocjL.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Coin Italy 1984 is old coin.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		4),--ID
		-------end coin & bullinon****************************************************
		(N' Aside Apartment in HaNoi,Viet Nam  ', -- name product
               N'https://jamadecor.vn/wp-content/uploads/2019/12/THE-VIEW-RIVIERA-POINT-2PN-ANH-CURTIS-CHANG-1-scaled.jpg',--img1
        N'https://cdn.vietnambiz.vn/2020/2/26/cd-15826897012081215793790.jpg',--img2
        N'https://photo.rever.vn/photo/v2/get/hE2UjfSkTE6OjyZmNQ7vHWYVvdgvxXK_CiXdzbZU5bg=/750x500/image.jpg',--img3
        N'https://file4.batdongsan.com.vn/2020/09/11/JGcIp0rf/20200911212202-8407.jpg',--img4
        N'https://asahijapan.com/wp-content/uploads/2021/09/can-ho-chung-cu-2.jpg',--img5
        N'https://static1.cafeland.vn/cafelandData/upload/tintuc/tuvanhoidap/2019/08/tuan-02/chungcu-1565431471.jpg',--img6
		1000,--priceCurrent
		100,--bidIncrement
		1500,----buyNow
		N'Coin Italy 1984 is old coin.',--description
		1,--timeEnd_day
		3,--timeEnd_hour
		25,--timeEnd_minute
		44,--timeEnd_second
		5),--ID
		--- end Real Estate
