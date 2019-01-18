//轮播图
$(function(){
    var obj={};
    var i=0;
    neirong (0);
    function neirong (i) {
        $("#img li").eq(i).siblings().css("opacity","0");
        $("#img li").eq(i).css("opacity","1")       
        $("#nav1 ul li").eq(i).siblings().removeClass("select");
        $("#nav1 ul li").eq(i).addClass("select");
    }		    	
    lunbo();
    function lunbo(){
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
        i++;
        if(i>4){
            i=0;
        }
        if(i<0){
            i=0;
        }
        neirong(i)		    					    		   		
        },3000)
    }
    $("#nav1 ul li").on("click",function(){
        i=$(this).index();
        neirong(i);	    		
    })
    $(".conright").on("mouseenter",function(){
        clearInterval(obj.timer);
    })
    $(".conright").on("mouseout",function(){
        lunbo();
    })
    $(".lift").on("click",function(){
        i=i-1;
        if(i<0){
            i=4
        }
        neirong(i);
    })
    $(".lirh").on("click",function(){
        i=i+1;
        if(i>4){
            i=0;
        }
        neirong(i);
    })
})
//内容区域
$(function () {
    //list content获取数据
    $.get("http://47.104.244.134:8080/goodsbytid.do", { "tid": 13, "page": 1, "limit": 13 }, function (data) {
        //console.log(data)
        var data = data.data;
        var str = "";
        for (var i = 0; i < data.length; i++) {
            str += "<li data-id="+data[i].id+" data-gid="+data[i].gid+"><a href ='details.html?id="+data[i].id+"'> <img id='addcar' src='" + data[i].picurl + "'/></a><span>"+data[i].name+"</span><i>售价:¥</i> <p>" + data[i].price + "</p> <input id='but' type='button' value='加入购物车' data-id="+data[i].id+" data-gid="+data[i].gid+"/><a id='car1' href ='details.html?id="+data[i].id+"'>查看购物车</a> </li>"
        }
        $("#content ul").html(str);
    });
     //添加购物车
$("#content").on("click","input",function(){
    //拿到对应的商品id
    var goodsId = this.getAttribute("data-id");
    var take = $.cookie("token");
    console.log(goodsId)
   //添加对应id的购物车
    $.get("http://47.104.244.134:8080/cartsave.do",{ "gid":goodsId, "token":take }, 
    function (data){
     // console.log(data);
  })  
        })
    var ok = true;
   $(".head-left").on("click",function(){
       if(ok){
           $("#bide").css({
               "width":"4rem",
               "display":"block"
           });
           $(".context").css("margin-left","4rem")
           ok=false;
       }else{
        $("#bide").css({
            "display":"none"
        });
        $(".context").css("margin-left","0rem")
        ok=true;
       }
   })
})
