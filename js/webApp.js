   // 首先内容加载获取等比例值
   window.onload = function (){
       getRem(750,100)  //第一个值为作图的px值，第二个值作为与rem转换的等比例值 一般为100
   };
   //窗口大小值等比例
   window.onresize = function (){
       getRem(750,100)  //第一个值为作图的px值，第二个值作为与rem转换的等比例值 一般为100
   };
      function getRem (remWidth,getRem){
       // 拿到浏览器html中的html
       var html = document.getElementsByTagName("html")[0];
       // 拿到浏览器的可视口的宽度
       var owidth = document.body.clientWidth || document.documentElement.clientWidth; //第二种是为了兼容ie浏览器
       // 最后的html的font样式值
        html.style.fontSize = owidth/remWidth*getRem+"px";
      }
      //其中 remWidth,getRem中两个形参是getRem中的(750,100)。