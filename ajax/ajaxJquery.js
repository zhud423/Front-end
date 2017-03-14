/**
 * Created by zhudong on 17-3-10.
 */
$(document).ready(function(){          //文档加载完毕后触发函数,所以一般把其他jquery的事件放在它之前
    $("#btn").on("click",function(){
        $("#result").text("请求数据中,请稍后。。。");
        var t=setTimeout(aJ,1000);
        function aJ() {
            $.get("server.php",{name:$("#inputValue").val()},function(data){
                //.请求方式{服务器名,从后端获取返回值,触发事件}
                //jquery中封装ajax,只需用get方式就可以直接访问
                //$("").val()在jquery使用
                //gerelementby ().value原生,不能混用
                $("#result").text(data);
            }).error(function () {
                $("#result").text("通讯有问题");
            })
        }

    })
});