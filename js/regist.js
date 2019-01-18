$(function(){
    $("input").eq(0).blur(function(){
        var val = $(this).val();
        //http://47.104.244.134:8080/
        
        $.get("http://47.104.244.134:8080/username.do",{username:val},function(data){
            if(data.code==0){
              alert("用户名已被占用");
            }
        })
        
    })
    $("input").eq(2).blur(function(){
        var val = $(this).val();
        //http://47.104.244.134:8080/
        
        $.get("http://47.104.244.134:8080/useremail.do",{password:val},function(data){
            if(data.code==0){
                alert("邮箱已被占用");
            }
        })
        
    })
    
    $("button").eq(0).click(function(){
        var p =Math.random()*8; 
        console.log(p)
        $.post("http://47.104.244.134:8080/usersave.do",{
            username:$("input").eq(0).val(),
            password:$("input").eq(1).val(),
            email:p,
            sex:1
        },function(data){
           if(data.code==0){
               console.log("该用户已经注册")
           }
        })
    })
    $("button").eq(1).click(function(){
        location.href="login.html"
    })
})
