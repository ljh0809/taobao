<?php
header("content-type:text/html;charset=utf8");
$username=$_POST["username"];
$password=$_POST["password"];
$con=mysqli_connect("localhost","root","root","test");
$sql="select * from tab where username='$username'";
$res=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);
if($row){
    $arr=[
        "msg"=>"该用户已被注册！",
        "status"=>3
    ];
}else{
    $sql="insert tab(username,password) values ('$username','$password')";
    $res=mysqli_query($con,$sql);
    if($res){
        $arr=[
            "msg"=>"注册成功！",
            "status"=>200
        ];
    }
    else{
        $arr=[
            "msg"=>"注册失败！",
            "status"=>4
        ];
    }
}
echo json_encode($arr);