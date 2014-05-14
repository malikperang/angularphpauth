<?php
include 'db.php';
$users = json_decode(file_get_contents('php://input'));

if($users){
	$lat = $users->latitude;
	$lng = $users->longitude;
	$query = "INSERT INTO locations (latitude,longitude) VALUES ('$lat','$lng')";
	$dbh->query($query);
	
	print 'success';
}
else{
	print 'error';
}


?>