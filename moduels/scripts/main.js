/**
 * Created by zhudong on 17-3-15.
 */
//模块中不含依赖,只有键值对
/*define(function () {
    //Do setup work here

    return {
        color: "black",
        size: "unisize"
    }
});*/

//含依赖
//define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.})
//模块函数以参数"cart"及"inventory"使用这两个以"./cart"及"./inventory"名称指定的模块。
//// 在这两个模块加载完毕之前，模块函数不会被调用。
define(["require","main"], function(require) {
    require(["js1","js2"],function(js1,js2){
        //console.log(js2);没有()打印出来的就是整个函数,包括function(){}
        console.log(js2());//注意js2()的括号,这样是执行函数
        console.log(js1.a1());
        //console.log(a.a1());
        // 此种写法错误,主模块main只能调用模块js1,而不能直接调用其内部的变量a,但可以调用js.a1这个内部函数
    })
 });