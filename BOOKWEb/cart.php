<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $book_id = $_POST['book_id'];
    $_SESSION['cart'][] = $book_id;
}

echo "<h2>Your Cart</h2>";
if (!empty($_SESSION['cart'])) {
    foreach ($_SESSION['cart'] as $book_id) {
        $result = mysqli_query($conn, "SELECT * FROM books WHERE id=$book_id");
        $row = mysqli_fetch_assoc($result);
        echo "<p>".$row['title']." - $".$row['price']."</p>";
    }
} else {
    echo "<p>Cart is empty.</p>";
}
?>
