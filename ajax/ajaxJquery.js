/**
 * Created by zhudong on 17-3-10.
 */
$(document).ready(function(){
    $("#btn").on("click",function(){
        $.get("server.php",{name:$("#inputValue").val()},function(data){
            //.请求方式{服务器名,获取返回值,触发事件}
            //jquery中封装ajax,只需用get方式就可以直接访问
            //$("").val()在jquery使用
            //gerelementby ().value原生,不能混用
            $("#result").text(data);
        })
    })
});