<?
$imglist='';

$img_folder = "images/bg/";

mt_srand((double)microtime()*1000);

//use the directory class
$imgs = dir($img_folder);

//read all files from the directory, checks if are images and ads them to a list (see below how to display flash banners)
while ($file = $imgs->read()) {
if (eregi("gif", $file) || eregi("jpg", $file) || eregi("png", $file))
$imglist .= "$file ";

} closedir($imgs->handle);

//put all images into an array
$imglist = explode(" ", $imglist);
$no = sizeof($imglist)-2;

//generate a random number between 0 and the number of images
$random = mt_rand(0, $no);
$image = $imglist[$random];

//display image
echo 'style="background-image:url('.$img_folder.$image.'); background-attachment: fixed"';
?>