// Script pour charger et afficher les paramètres de l'entreprise
const API_BASE_URL = 'https://hlab-api.onrender.com/api'; // URL de l'API en production
const SETTINGS_API = `${API_BASE_URL}/company-settings`;
let companySettings = {};

// Charger les paramètres depuis l'API
async function loadCompanySettings() {
    try {
        const response = await fetch(`${API_BASE_URL}/company-settings`);
        if (!response.ok) return;
        companySettings = await response.json();
        applySettings();
    } catch (error) {
        console.error('Erreur lors du chargement des paramètres:', error);
    }
}

// Appliquer les paramètres aux éléments du DOM
function applySettings() {
    // Téléphone
    document.querySelectorAll('[data-setting="phone"]').forEach(el => {
        el.textContent = companySettings.contact_phone || '';
        if (el.tagName === 'A') {
            el.href = `tel:${(companySettings.contact_phone || '').replace(/\s/g, '')}`;
        }
    });

    // Email
    document.querySelectorAll('[data-setting="email"]').forEach(el => {
        el.textContent = companySettings.contact_email || '';
        if (el.tagName === 'A') {
            el.href = `mailto:${companySettings.contact_email}`;
        }
    });

    // Adresse
    document.querySelectorAll('[data-setting="address"]').forEach(el => {
        el.textContent = companySettings.contact_address || '';
    });

    // Réseaux sociaux
    const socials = ['twitter', 'linkedin', 'github', 'facebook']; // Ajoutez 'instagram' si nécessaire
    socials.forEach(social => {
        const socialLink = companySettings[`social_${social}`];
        document.querySelectorAll(`[data-setting="social-${social}"]`).forEach(el => {
            if (socialLink && socialLink.trim() !== '' && socialLink.trim() !== '#') {
                el.href = socialLink;
                el.classList.remove('hidden'); // Assure que l'élément est visible
            } else {
                el.classList.add('hidden'); // Cache l'élément si le lien est invalide
            }
        });
    });

    // GPS pour Leaflet (si la carte existe)
    if (typeof window.initMap === 'function') {
        const lat = parseFloat(companySettings.contact_gps_lat);
        const lng = parseFloat(companySettings.contact_gps_lng);

        // Préparer le contenu HTML pour le popup de la carte
        const popupContent = `
            <div class="text-center p-1" style="font-family: sans-serif;">
                <strong class="text-md" style="color: #0066FF;">H-Lab</strong>
                <p class="text-sm text-gray-700 my-1">${companySettings.contact_address || 'Adresse non disponible'}</p>
                <hr class="my-2">
                <p class="text-xs text-gray-500">Lat: ${lat}, Lng: ${lng}</p>
            </div>
        `;

        if (!isNaN(lat) && !isNaN(lng)) {
            window.initMap(lat, lng, popupContent);
        }
    }
}

// Charger au chargement de la page
document.addEventListener('DOMContentLoaded', loadCompanySettings);