<?php
header("content-type:text/html;charset=utf8");
$id=$_POST["id"];
$con=mysqli_connect("localhost","root","root","test");
$sql="select * from project where id=$id";
$res=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);
if($row){
    $arr=[
        "msg"=>"ok",
        "status"=>200,
        "data"=>$row
    ];
}
else{
    $arr=[
        "msg"=>"data not found",
        "status"=>404
    ];
}
echo json_encode($arr);