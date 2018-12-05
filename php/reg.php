<?php
    header("content-type:text/html;charset=utf-8");
    //第一步 ： 接收客户端请求的数据
    $utel = $_POST["tel"];
    $upwd = $_POST["pwd"];
    //echo $username , $userpwd;
    //第二步 ： 处理数据   php操作mysql
    //一、连接数据源  返回连接的数据源  返回值后面会用
    $db = mysql_connect("localhost","root","root");
    //二、选择数据库
    mysql_select_db( "plan" , $db );
    //三、设置字符编码  
    mysql_query("set names utf8");
    //四、编写sql语句  在mysql编辑器下写好执行后没有问题了 粘贴过来
    $sql = "insert into user(`utel`,`upwd`) values('$utel','$upwd')";
    //五、执行sql语句--执行insert 返回受影响的行数
    $row = mysql_query( $sql );
    //第三步 ： 返回结果
    if( $row ){
    	echo "<script>alert('注册用户成功');location.href='../2.html';</script>";
    }else{
    	echo "<script>alert('注册用户失败');location.href='../1.html';</script>";
    }
?>