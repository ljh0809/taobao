<?php
header("content-type:text/html;charset=utf8");
$con = mysqli_connect('localhost','root','root','test');
$sql = "select * from  project";
$res = mysqli_query($con,$sql);
$arr=[];
while($row=mysqli_fetch_assoc($res)){
    $arr[]=$row;
}
echo json_encode($arr);