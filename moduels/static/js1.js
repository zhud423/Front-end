/**
 * Created by zhudong on 17-3-14.
 */
// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    // 通过 require 引入依赖

    // 通过 exports 对外提供接口
    //exports.d =function(){   //自定义方法
    //    console.log("ok");
    //};
    //exports.d1 =function(){   //自定义方法
    //    console.log("ok1");
    //};
    //exports.d2 =function(){   //自定义方法
    //    console.log("ok2");
    //};

    var a={};
    a.d =function(){
        console.log("ok");
    };
    a.d1 =function(){
        console.log("ok1");
    };
    a.d2 =function(){
        console.log("ok2");
    };
    //exports.a=a;    此法也能实现,但几个方法包含在对象a里面
    // 或者通过 module.exports 提供整个接口
    module.exports =a;

});