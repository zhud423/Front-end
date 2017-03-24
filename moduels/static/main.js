/**
 * Created by zhudong on 17-3-14.
 */
// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    // 通过 require 引入依赖
    var jquery=require('../sea-modules/jquery/jquery/1.10.1/jquery.js');
    //var js1=require.async("./js1",function(js1_callback){
    //    alert(js1_callback.doSomething());
    //上下两种写法都行
        var js1=require.async("./js1",function(js1){   //seajs遵循CMD,默认同步,改为异步
            console.log(js1);

    });
    // 通过 exports 对外提供接口
    //exports.doSomething = ...

    // 或者通过 module.exports 提供整个接口
    //module.exports = ...

});
