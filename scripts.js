var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    }
    else {
        sideNav.style.right = "-250px"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('signup-popup');
    const form = document.getElementById('signup-form');
    const closeButton = document.querySelector('.close-btn');

    // Function to show the popup
    function showPopup() {
        // Check if the user has previously closed the popup
        const hasClosed = localStorage.getItem('hasClosedPopup');
        if (!hasClosed) {
            popup.classList.add('show-popup');
        }
    }

    // Function to hide the popup
    function hidePopup() {
        popup.classList.remove('show-popup');
        // Set a flag in localStorage indicating the popup has been closed
        localStorage.setItem('hasClosedPopup', 'true');
    }

    // Form submission handling
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate saving data (e.g., send to server)
        console.log('User Data:', { name, email, password });

        // Hide the popup after successful sign up and set flag
        hidePopup();

        // Optionally, you can display a success message or redirect
        // alert('Sign up successful!');
    });

    // Close button handling
    closeButton.addEventListener('click', hidePopup);

    // Show the popup on page load if conditions are met
    showPopup();
});
