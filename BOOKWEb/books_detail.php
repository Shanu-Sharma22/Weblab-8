<?php include 'db.php'; ?>
<?php
$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM books WHERE id=$id");
$row = mysqli_fetch_assoc($result);
?>
<!DOCTYPE html>
<html>
<head>
    <title><?php echo $row['title']; ?></title>
</head>
<body>
    <h2><?php echo $row['title']; ?></h2>
    <p>Author: <?php echo $row['author']; ?></p>
    <p><?php echo $row['description']; ?></p>
    <p>Price: $<?php echo $row['price']; ?></p>
    <form method="post" action="cart.php">
        <input type="hidden" name="book_id" value="<?php echo $row['id']; ?>">
        <button type="submit">Add to Cart</button>
    </form>
</body>
</html>
