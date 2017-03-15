/**
 * Created by zhudong on 17-3-15.
 */
define(["require","js2"], function(require) {
    var b= function () {
        console.log("js2 b")
    };
    return b;  //注意此处必须返回一下,跟seajs有区别
});