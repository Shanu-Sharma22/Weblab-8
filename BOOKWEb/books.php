<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Books</title>
</head>
<body>
    <h2>Available Books</h2>
    <?php
    $result = mysqli_query($conn, "SELECT * FROM books");
    while($row = mysqli_fetch_assoc($result)) {
        echo "<div style='margin:20px;'>";
        echo "<img src='images/".$row['image']."' width='100'>";
        echo "<h3>".$row['title']."</h3>";
        echo "<p>Author: ".$row['author']."</p>";
        echo "<p>Price: $".$row['price']."</p>";
        echo "<a href='book_details.php?id=".$row['id']."'>View Details</a>";
        echo "</div>";
    }
    ?>
</body>
</html>
