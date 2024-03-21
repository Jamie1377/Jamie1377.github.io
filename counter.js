// Check if the visitor count is stored in localStorage
if (localStorage.getItem('visitorCount')) {
    // If yes, get the count from localStorage
    var count = parseInt(localStorage.getItem('visitorCount'));
    updateCount(count);
} else {
    // If not, initialize count to 0
    var count = 0;
}

// Update the count on the page
function updateCount(count) {
    document.getElementById('visitorCount').textContent = count;
}

// Increment the count and update localStorage
function incrementCount() {
    count++;
    updateCount(count);
    localStorage.setItem('visitorCount', count);
}

// Call incrementCount() when the page loads
window.onload = incrementCount;
