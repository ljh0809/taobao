<?php
header("content-type:text/html;charset=utf8");
$username = $_POST["username"];
$password = $_POST["password"];
$con=mysqli_connect("localhost","root","root","test");
$sql="select * from tab where username='$username' and '$password' ";
$res=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);
if($row){
    $arr=[
        "msg"=>"登陆成功！",
        "status"=>200
    ];
}
else{
    $arr=[
        "msg"=>"用户名或密码错误！",
        "status"=>4
    ];
}
echo json_encode($arr);