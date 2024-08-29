// Get the button element
const button = document.getElementById('toggle-dark-mode');

// Function to toggle dark mode
function toggleDarkMode() {
    // Check if the body has the class 'dark-mode'
    if (document.body.classList.contains('dark-mode')) {
        // If it does, remove 'dark-mode' and add 'light-mode'
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        // If it doesn't, remove 'light-mode' and add 'dark-mode'
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
}

// Add an event listener to the button to call the function on click
button.addEventListener('click', toggleDarkMode);