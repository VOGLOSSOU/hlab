
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button'); // Assuming a logout button with this ID exists

    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Clear session
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');

            // Redirect to login
            window.location.href = 'login.html';
        });
    }
});
