<?php
header("content-type:text/html;charset=utf8");
$ids=$_POST["ids"];
$con=mysqli_connect("localhost","root","root","test");
$sql="select * from project where id in ($ids)";
$res=mysqli_query($con,$sql);
$arr =[];
while($row=mysqli_fetch_assoc($res)){
    $arr[]=$row;
}
if(count($arr)>0){
    $result=[
        "status"=>200,
        "msg"=>"ok",
        "data"=>$arr
    ];
}else{
    $result=[
        "status"=>404,
        "msg"=>"data not found",
    ];
}
echo json_encode($result);