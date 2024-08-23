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

document.addEventListener('DOMContentLoaded', function () {
    // Toggle side navigation
    const menuBtn = document.getElementById('menuBtn');
    const sideNav = document.getElementById('sideNav');

    menuBtn.addEventListener('click', function () {  
        if (sideNav.style.display === 'flex') {
            sideNav.style.display = 'none';
        } else {
            sideNav.style.display = 'flex';
        }
    });

    // Toggle signup popup
    const signupPopup = document.getElementById('signup-popup');
    const closeBtn = document.querySelector('#signup-popup .close-btn');

    function showPopup() {
        signupPopup.classList.add('show-popup');
    }

    function hidePopup() {
        signupPopup.classList.remove('show-popup');
    }

    closeBtn.addEventListener('click', hidePopup);

    // For demonstration purposes, show the popup after 3 seconds
    setTimeout(showPopup, 3000);
});

document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent default form submission

        let query = this.value.trim(); // Get and trim the search query
        if (query) {
            // Replace the following with your actual search logic
            console.log('Searching for:', query);

            // Example redirect to a search results page (update URL as needed)
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    }
});
