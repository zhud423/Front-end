/**
 * Created by zhudong on 17-3-14.
 */
$("body").ready(function () {
    var t=setTimeout(loadFragment,2000);
    function loadFragment() {
        //1、加载htm文档,htm文档可以存非正规的html内容
        $("body").load("box.htm",function (r,status,xhr) {
            //.load(url,data,function(response,status,xhr))
            //其中data和function可选,
            // 其中,status有"success", "notmodified", "error", "timeout" 或 "parsererror"几种状态
            console.log(status);
            if (status=="error"){
                $("body").text("碎片加载失败")
            }
        });
        //2、加载script,并执行script中的函数
        $.getScript("hello.js").complete(function () {
            hello();
        })
    }
});