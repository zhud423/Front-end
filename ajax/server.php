<?php  //标准方式
if(isset($_GET['name'])){
    echo "hello:".$_GET['name'];  //POST方式同样
}else{
    echo "args error"; //参数错误
}
