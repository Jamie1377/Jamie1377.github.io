<?php
// Function to read the count from a text file
function getVisitorCount() {
    $count = intval(file_get_contents("visitor_count.txt"));
    return $count;
}

// Function to increment the count and save it to the text file
function incrementVisitorCount() {
    $count = getVisitorCount() + 1;
    file_put_contents("visitor_count.txt", $count);
    return $count;
}

// Increment the count and return it
$count = incrementVisitorCount();
echo $count;
?>
