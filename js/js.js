$(document).ready(function() {
    // var storeArray=[
    //    {
    //         name:'閣菱餐酒館 bistro',
    //         eng:'nineninebistro',
    //         location:'大安區',
    //         landing:'https://forms.gle/QyQLvRvb7AYk2AzHA',
    //         fill:false,
    //     },{
    //         name:'Hush Taipei 餐酒館',
    //         eng:'hush',
    //         location:'大安區',
    //         landing:'https://forms.gle/YRgbaowwc6cHHh8SA',
    //         fill:false,
    //     },{
    //         name:'銀河堂讚岐烏龍麵',
    //         eng:'gingadoudon',
    //         location:'大安區',
    //         landing:'https://forms.gle/NEMsqK3iNPY2cPPi9',
    //         fill:false,
    //     },{
    //         name:'男子漢燒肉霸',
    //         eng:'nangihann',
    //         location:'中山區',
    //         landing:'https://forms.gle/h87JxMv9MdkJvyR59',
    //         fill:false,
    //     },{
    //         name:'Style Steak<br>世代歐陸牛排西餐廳',
    //         eng:'stylesteak',
    //         location:'松山區',
    //         landing:'https://forms.gle/39wBeiXt1edMz5XBA',
    //         fill:false,
    //     },{
    //         name:'林家潁精緻麵店',
    //         eng:'linJiaYing',
    //         location:'萬華區',
    //         landing:'https://forms.gle/KMqCtPYZDpAEgqZCA',
    //         fill:false,
    //     },{
    //         name:'姑媽咪GoodMommy&Co',
    //         eng:'GoodMommy',
    //         location:'大安區',
    //         landing:'https://forms.gle/VujKfB1DYW1JoYxw9',
    //         fill:false,
    //     },{
    //         name:'極鮮流精緻活海鮮涮涮鍋',
    //         eng:'gokusennryu',
    //         location:'松山區',
    //         landing:'https://forms.gle/6Nq6wbntykxWpYGp9',
    //         fill:false,
    //     },{
    //         name:'韓之棧',
    //         eng:'hanZhiZhan',
    //         location:'中山區',
    //         landing:'https://forms.gle/3xwEoKin1x6MC7cz7',
    //         fill:false,
    //     },{
    //         name:'HOMELESS BISTRO<br>吾家可歸餐酒館',
    //         eng:'HOMELESS',
    //         location:'大安區',
    //         landing:'https://forms.gle/Z2M9BE2qqJTFtEyC8',
    //         fill:false,
    //     },{
    //         name:'丸家複合式餐酒館',
    //         eng:'bistroMaru',
    //         location:'大安區',
    //         landing:'https://forms.gle/dw2CLUnA35T3Lcbp9',
    //         fill:false,
    //     },{
    //         name:'K.D Bistro Taipei',
    //         eng:'KDBistroTaipei',
    //         location:'大安區',
    //         landing:'https://forms.gle/EZHYUo1qxQtKcnJbA',
    //         fill:false,
    //     }
    // ];

    function addList(num,i){
        var item = $('<li class="store__list">')
        var imgurl = 'url(img/store/'+num.eng+'.jpg)'
        item.css('background-image',imgurl);
        if(num.fill==true){
            item.append("<div class='overray--full'>未開放</div>");
        }else{
            item.append('<a href="'+num.landing+'" class="link" target="_blank" ></a>');
        }
        item.append("<div class='overray'></div>");
        item.append("<h3>"+num.name+"</h3>");
        item.append("<h4>"+num.location+"</h4>");



        $('ul#js_store').append(item);
    }
    for(var i =0;i<storeArray.length;i++){
        addList(storeArray[i],i);

    }
    

});

/* <li class="store__list" style="background-image: url(img/store/store1.png);">
<a href="yahoo.com" class="link"></a>
<div class="overray"></div>
<h3>LIFE KITCHEN<br>生活倉廚|大安門市</h3>
<h4>大安區</h4>
</li> */