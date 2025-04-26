document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    const errorMessageDiv = document.getElementById('errorMessage');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const loginBtn = document.getElementById('login-btn');
    const settingsButton = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeButton = document.querySelector('.close-button');
    const soundToggle = document.getElementById('sound-toggle');
    const notificationsToggle = document.getElementById('notifications-toggle');
    const settingsDropdown = document.getElementById('settings-dropdown');
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const homeButton = document.getElementById('home-btn');
    const levelsButton = document.getElementById('levels-btn');
    const scoreButton = document.getElementById('score-btn');
    const profileButton = document.getElementById('profile-btn');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/login', { // Replace '/login' with your actual server endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Successful login - Redirect to the game or update UI
                console.log('Login successful:', data);
                window.location.href = 'index.html'; // Redirect to your main game page
                // Optionally, store a token or user info in localStorage or sessionStorage
            } else {
                // Login failed - Display an error message
                errorMessageDiv.textContent = data.message || 'Login failed. Please check your credentials.';
            }
        } catch (error) {
            console.error('Error during login:', error);
            errorMessageDiv.textContent = 'An error occurred during login.';
        }
    });
});

    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html'; // Redirect to the separate login page
    });

    

    settingsButton.addEventListener('click', function() {
        settingsDropdown.style.display = settingsDropdown.style.display === 'block' ? 'none' : 'block';
    });
    

    const savedSound = localStorage.getItem('soundEnabled');
    const savedNotifications = localStorage.getItem('notificationsEnabled');
    
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#settings-btn') && !event.target.closest('#settings-dropdown')) {
            settingsDropdown.style.display = 'none';
        }
    });
    

    profileButton.addEventListener('click', function() {
        window.location.href = 'profile.html'; // Replace with your actual profile page URL
    });
});

   

    if (savedSound === 'true') {
        soundToggle.checked = true;
        // Apply sound-on logic (e.g., set a global variable)
    } else {
        // Apply sound-off logic
    }

    if (savedNotifications === 'true') {
        notificationsToggle.checked = true;
        // Apply notifications-on logic
    } else {
        // Apply notifications-off logic
    }

    // Open the settings modal
    settingsButton.addEventListener('click', function() {
        settingsModal.style.display = 'block';
    });

    // Close the settings modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        settingsModal.style.display = 'none';
    });

    // Close the settings modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });

    // Handle sound setting change
    soundToggle.addEventListener('change', function() {
        localStorage.setItem('soundEnabled', this.checked);
        if (this.checked) {
            console.log('Sound enabled');
            // Implement your sound enabling logic here
        } else {
            console.log('Sound disabled');
            // Implement your sound disabling logic here
        }
    });

    // Handle notifications setting change
    notificationsToggle.addEventListener('change', function() {
        localStorage.setItem('notificationsEnabled', this.checked);
        if (this.checked) {
            console.log('Notifications enabled');
            // Implement your notification enabling logic here
        } else {
            console.log('Notifications disabled');
            // Implement your notification disabling logic here
        }
    });

    settingsButton.addEventListener('click', function() {
        settingsDropdown.style.display = settingsDropdown.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#settings-btn') && !event.target.closest('#settings-dropdown')) {
            settingsDropdown.style.display = 'none';
        }
    });

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Redirect to a search results page, passing the search term
            window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Please enter a search term.');
        }
    });

    // You can add similar event listeners for the navigation buttons
    homeButton.addEventListener('click', function() {
        // If already on the home page, maybe do nothing or reload
        console.log('Home button clicked');
        // If you want to navigate even if already here:
        // window.location.href = 'index.html';
    });

    levelsButton.addEventListener('click', function() {
        window.location.href = 'levels.html'; // Create a levels.html page
    });

    scoreButton.addEventListener('click', function() {
        window.location.href = 'score.html'; // Create a score.html page
    });

    profileButton.addEventListener('click', function() {
        window.location.href = 'profile.html'; // Create a profile.html page
    });