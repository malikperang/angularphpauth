<?php
$user = 'root';
$pass = 'passw0rd321';

try {
    $dbh = new PDO('mysql:host=localhost;dbname=soupkitchen', $user, $pass);
    //foreach($dbh->query('SELECT * from users') as $row) {
    //    print_r($row);
    //}
    //$dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>