<?php 

require 'db.php';


$query = $dbh->query('SELECT * from users order by id');




$user = json_decode(file_get_contents('php://input')); //get user from json headers



if($user->email == 'admin' && $user->pass == 'admin'):
    print 'login success';
else:
    print 'login not success';
endif;



?>