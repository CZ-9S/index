var a = prompt("请输入今天周几");
aa=parseInt(a);
switch (a) {
    case "1":
        alert("新的周一开始了");
        break;
    case "2":
        alert("新的周二开始了");
        break;
    case "3":
        alert("新的周三开始了");
        break;
    case "4":
        alert("新的周四开始了");
        break;
    case "5":
        alert("新的周五开始了");
        break;
    case "6":
        alert("新的周六开始了");
        break;
    case "7":
        document.write("新的周日开始了");
        // document.write()是用来向页面输出可以包含html标签的内容
        break;
}
function showHello(count) {
        for(var i=0;i<count;i++){
            document.writeln("Hello<br>"+i);
            // 从上到下从里到外
        }
}
function cllls() {
    var flag=confirm("确认删除？");
    if(flag===true){
        alert("删除成功！");
    }else{
        alert("取消删除！");
    }
}
function tanchu() {
    open("弹出的新窗口.html");//"弹出的窗口.html"，"窗口名称"，"窗口特征"
}

function dingshi() {
    // var nou = 5;
    // setInterval("if (nou==0){location.href='弹出的新窗口.html';}else{nou=nou-1; document.writeln(nou.toString())}",1000);
    document.write("5秒之后执行");
    setTimeout("location.href='弹出的新窗口.html'",5000);
    // setTimeout("调用的函数名称",等待的毫秒数);5000==5秒 50000==50秒
    // setTimeout()只调用一次而    setInterval("调用的函数名称",间隔时间毫秒);会重复调用
}
function shijian() {
    var today = new Date();
    var hh = today.getHours();
        // switch (hh>12) {
        //
        // }
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    document.getElementById("shijian2").innerHTML="现在的时间是："+hh+":"+mm+":"+ss;
    setInterval("shijian()",1000);
}
function bingdu() {
   var ko= prompt();
   var flag=confirm("是否确认弹出？");
   if(flag==true){
       for (var i=0;i<=ko;i++){
           open("笑脸男.html","1234","height=123 width=123");
       }
   }
}
