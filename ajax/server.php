<?php  //标准方式
if(isset($_GET['name'])){
    echo "hello:".$_GET['name'];  //.参数
}else{
    echo "args error"; //参数错误
}
