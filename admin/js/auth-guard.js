// --- ROBUST ASYNC AUTH GUARD ---
// This script must be included in the <head> of every admin page except login.html

(async function verifyTokenAndProtect() {
    const token = localStorage.getItem('authToken');

    // 1. If no token, redirect immediately.
    if (!token || token === 'undefined' || token === 'null') {
        // Allow access to login page without a token.
        if (!window.location.pathname.endsWith('/login.html')) {
            window.location.href = 'login.html?reason=no_token';
        }
        return;
    }

    // 2. If on login page with a valid token, redirect to dashboard.
    // This part runs only after we prove the token is valid.

    // 3. Verify token with the server by calling a protected endpoint.
    try {
        const response = await fetch('https://hlab-api.onrender.com/api/stats', { // Using /stats as a lightweight protected endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        // If response is OK, the token is valid.
        if (response.ok) {
            // If we are on the login page with a valid token, we should not be here.
            // Redirect to the main dashboard.
            if (window.location.pathname.endsWith('/login.html')) {
                window.location.href = 'index.html';
            }
            // Otherwise, we are on a protected page and the token is valid. Do nothing.
            return; 
        }

        // If we get 401/403, the token is invalid.
        if (response.status === 401 || response.status === 403) {
            throw new Error('Invalid or expired token');
        }

    } catch (error) {
        // This block catches fetch errors (e.g., network down) or auth errors.
        console.error('Auth check failed:', error.message);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        
        // Redirect to login, but only if we are not already there.
        if (!window.location.pathname.endsWith('/login.html')) {
            window.location.href = 'login.html?reason=invalid_token';
        }
    }
})();