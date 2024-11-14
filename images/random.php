<?php

srand((float) microtime() *10000000);

//IMAGES TO BE DISPLAYED
$imagefiles = array("street.jpg","lense.jpg","street.jpg","lense.jpg");

$imagefiles = $imagefiles[rand(0,count($imagefiles)-1)];
$path = "/images/" . $imagefiles;

header("Content-type: image/jpeg");

$jpeg = fopen($path,"r");

$image = fread($jpeg,filesize($path));

echo $image;
?>