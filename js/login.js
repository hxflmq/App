$(function () {
    $("button").on("click", function () {
        var val = $("#text").val();
        var paw = $("#paw").val();
        console.log(val,paw)
        if(val.length>=2 && paw.length>=2){
             $.post("http://47.104.244.134:8080/userlogin.do", { "name": val, "password": paw }, function (data) {
            //成功时 存到cokie里
            if (data.code == 0) {
                var take = data.data;
                 $.cookie("token",take.token,{"expires":7,"path":"/"})
                  location.href = "index.html";
            }if(data.code==1){
             alert("用户名或者密码错误！")
            }
        });
        }
       
    })

})