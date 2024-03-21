// Function to update the count on the page
function updateCount(count) {
    document.getElementById('visitorCount').textContent = count;
}

// Function to make an AJAX request to the PHP script
function getVisitorCount() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'counter.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var count = parseInt(xhr.responseText);
            updateCount(count);
        }
    };
    xhr.send();
}

// Call getVisitorCount() when the page loads
window.onload = getVisitorCount;

