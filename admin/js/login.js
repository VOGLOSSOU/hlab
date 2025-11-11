document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = loginForm.querySelector('button[type="submit"]');
    let errorDiv = document.getElementById('error-message');

    // Create error message container if it doesn't exist
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.className = 'mt-4 text-center text-red-400';
        loginForm.insertBefore(errorDiv, submitButton);
    }

    // DO NOT redirect if a token exists. This was causing the infinite loop.
    // The auth guard on other pages will handle redirection if the token is valid.

    // Handle session expiration message
    const params = new URLSearchParams(window.location.search);
    if (params.get('reason') === 'session_expired') {
        errorDiv.textContent = 'Votre session a expiré. Veuillez vous reconnecter.';
    }

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorDiv.textContent = ''; // Clear previous errors

        const email = emailInput.value;
        const password = passwordInput.value;

        // Basic validation
        if (!email || !password) {
            errorDiv.textContent = 'Veuillez remplir tous les champs.';
            return;
        }

        // Set loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Connexion en cours...';

        try {
            const response = await fetch('https://hlab-api.onrender.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || `Erreur ${response.status}`);
            }

            // --- NOUVELLE LOGIQUE ---
            console.log('✅ Connexion réussie, token reçu:', result.token ? 'OUI' : 'NON');
            
            // Stocker le token
            localStorage.setItem('authToken', result.token);
            localStorage.setItem('user', JSON.stringify(result.data));
            
            // ATTENDRE un peu pour être sûr que le token est stocké
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Vérifier que le token est bien stocké
            const verifyToken = localStorage.getItem('authToken');
            console.log('✅ Token vérifié dans localStorage:', verifyToken ? 'OUI' : 'NON');
            
            if (verifyToken) {
                // Rediriger SEULEMENT si le token est confirmé
                window.location.href = 'index.html';
            } else {
                console.error('❌ Token non stocké correctement');
                errorDiv.textContent = 'Erreur critique: Impossible de stocker la session.';
            }
            // --- FIN NOUVELLE LOGIQUE ---

        } catch (error) {
            // Handle error
            console.error('❌ Erreur connexion:', error);
            errorDiv.textContent = error.message;
        } finally {
            // Reset loading state
            submitButton.disabled = false;
            submitButton.textContent = 'Se connecter';
        }
    });
});