$(function(){
    var take = $.cookie("token");
    $.get("http://47.104.244.134:8080/cartlist.do", {"token":take}, function (data) {
           var str = ""
           console.log(data)
           for (var i in data) {
                          //展示商品的所有信息
            str+="<li data-gid="+data[i].gid+" data-id="+data[i].id+"><h2>"+data[i].goods.name+"</h2><strong>您选中的商品价格为:</strong><p>"+data[i].goods.price+"元</p><span>您选中的商品数量为:</span><i id='pre'>"+data[i].count+"</i><input class='btn' type='button' data-id='"+data[i].id+"' value='清除此购物'></li>"
               // console.log(data[i].goods.name,data[i].goods.picurl,data[i].goods.price)
    }  
          console.log(data)
        $(".content ul").html(str);
})
 //删除购物车
 $(document).on("click","input",function(){
    var goodsId = this.getAttribute("data-id");
    $.get("http://47.104.244.134:8080/cartupdate.do",{"token":take,"id":goodsId,"gid":goodsId,"num":0 }, 
       function (data){
           //打印id
        // console.log(goodsId) 
    }) ;
    //重新加载页面
    window.location.href = "details.html";
  }); 
})
