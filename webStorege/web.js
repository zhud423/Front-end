/**
 * Created by zhudong on 16-3-13.
 */
//function savestorge(id){
//    var target=document.getElementById(id);
//    var str=target.value;
//    //save data: key value
//    sessionStorage.setItem("message",str);
//}
//
//
//function loadtorge(id){
//    var target=document.getElementById(id);
//    //load data
//    var msg=sessionStorage.getItem("message");
//   target.innerHTML=msg;
//}


function savestorge(id){
    var target=document.getElementById(id);
    var str=target.value;
    //save data: key value
    localStorage.setItem("message",str);
}


function loadtorge(id){
    var target=document.getElementById(id);
    //load data
    var msg=localStorage.getItem("message");
    target.innerHTML=msg;
}
