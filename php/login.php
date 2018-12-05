<?php
	//引入public.php文件
	include "public.php";
	
	//第一步：接收数据
	$utel = $_POST["tel"];
	$upwd = $_POST["pwd"];
	//第二步：处理数据
	
	$sql = "select * from user where `utel`='$utel'";
	$res = mysql_query( $sql );
	//执行select查询操作时，返回的结果是一个资源类型  需要通过mysql_fetch_array()  得到资源类型中的数据
	$arr = mysql_fetch_array( $res );
	//mysql_fetch_array() 每执行一次，只取出资源类型中的一条数据  并返回一个数组
	
	//判断数组是否存在   如果存在，说明用户名存在
	if( $arr ){
		if( $upwd == $arr["upwd"] ){ //如果用户名存在  判断密码是否相等
			echo "<script>alert('登录成功');location.href='../index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='login.html';</script>";
		}
	}else{
		echo "<script>alert('该用户不存在');location.href='login.html';</script>";
	}
	//第三步：返回结果
	//echo $res;
?>