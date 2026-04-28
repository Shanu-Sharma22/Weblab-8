<?php
$host = "localhost";
$user = "root";       // default user
$pass = "";           // leave empty unless you set a password in phpMyAdmin
$db = "bookstore_db";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>