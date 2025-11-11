// API Configuration
const API_BASE = 'https://hlab-api.onrender.com/api';

// Fetch function
async function fetchPublicAPI(endpoint) {
    try {
        console.log(`Fetching: ${API_BASE}${endpoint}`);
        const response = await fetch(`${API_BASE}${endpoint}`);
        
        if (!response.ok) {
            console.warn(`API returned ${response.status} for ${endpoint}`);
            return null;
        }
        
        const data = await response.json();
        console.log(`Data received from ${endpoint}:`, data);
        
        // Ensure it's an array
        if (!Array.isArray(data)) {
            console.warn(`Expected array but got:`, typeof data);
            return null;
        }
        
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
}

// Load statistics
async function loadStats() {
    console.log('Loading statistics...');
    
    try {
        // Fetch data
        const [projects, partners] = await Promise.all([
            fetchPublicAPI('/projects'),
            fetchPublicAPI('/partners')
        ]);
        
        // Calculate stats
        const stats = {
            projectsCompleted: projects ? projects.filter(p => p.status === 'Réalisé').length : 0,
            projectsInProgress: projects ? projects.filter(p => p.status === 'En cours').length : 0,
            partners: partners ? partners.length : 0,
            awards: 12 // Static value
        };
        
        console.log('Calculated stats:', stats);
        
        // Update DOM with exact selectors from the HTML
        const projectsCompletedEl = document.querySelector('.stat-card:nth-child(1) [data-target]');
        const projectsInProgressEl = document.querySelector('.stat-card:nth-child(2) [data-target]');
        const partnersEl = document.querySelector('.stat-card:nth-child(3) [data-target]');
        const awardsEl = document.querySelector('.stat-card:nth-child(4) [data-target]');
        
        if (projectsCompletedEl) {
            projectsCompletedEl.textContent = stats.projectsCompleted;
            console.log('Updated projects completed');
        }
        
        if (projectsInProgressEl) {
            projectsInProgressEl.textContent = stats.projectsInProgress;
            console.log('Updated projects in progress');
        }
        
        if (partnersEl) {
            partnersEl.textContent = stats.partners;
            console.log('Updated partners');
        }
        
        if (awardsEl) {
            awardsEl.textContent = stats.awards;
            console.log('Updated awards');
        }
        
        console.log('Statistics updated successfully');
        
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing stats...');
    loadStats();
});