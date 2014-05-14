<?php 
$user = json_decode(file_get_contents('php://input')); //get user from json headers

$name = $user->name;
$email = $user->email;
$pass = $user->pass;

$con=mysqli_connect("localhost","root","passw0rd321","soupkitchen");
// Check connection
if (mysqli_connect_errno()) {
  print 'mysql connection error';
}


$query = mysqli_query($con,"INSERT INTO users (name, email, password)
VALUES ('$name', '$email','$pass')");

if(isset($query)){
	print 'success';
}
else {
	print 'error';
}

mysqli_close($con);

?>