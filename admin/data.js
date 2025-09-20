// Fake data simulation for H-Lab Admin Panel
// In a real application, this would be API calls to the backend

const fakeData = {
    videos: [
        {
            id: 1,
            titre: "Introduction à l'IoT",
            description: "Découvrez les fondamentaux de l'Internet des Objets et ses applications dans l'industrie moderne.",
            url_video: "https://example.com/video1.mp4",
            date_ajout: "2024-01-15",
            admin_id: 1
        },
        {
            id: 2,
            titre: "H-Lab : Notre Vision",
            description: "Présentation de la vision et des valeurs de H-Lab dans l'écosystème IoT français.",
            url_video: "https://example.com/video2.mp4",
            date_ajout: "2024-02-20",
            admin_id: 1
        }
    ],

    formations: [
        {
            id: 1,
            titre: "IoT Fondamentaux",
            description: "Introduction complète aux concepts de l'Internet des Objets, protocoles de communication et architectures.",
            duree: 40,
            objectifs: ["Comprendre les concepts IoT", "Maîtriser les protocoles", "Concevoir des architectures"],
            prerequis: ["Bases en électronique", "Notions de programmation"],
            prix: 1200,
            image: "formation-iot.jpg",
            date_ajout: "2024-01-10",
            admin_id: 1
        },
        {
            id: 2,
            titre: "Arduino Avancé",
            description: "Maîtrisez la programmation Arduino pour des projets IoT complexes avec capteurs et actionneurs.",
            duree: 30,
            objectifs: ["Programmation Arduino avancée", "Intégration de capteurs", "Projets complexes"],
            prerequis: ["Bases Arduino", "Programmation C/C++"],
            prix: 950,
            image: "formation-arduino.jpg",
            date_ajout: "2024-01-12",
            admin_id: 1
        },
        {
            id: 3,
            titre: "Réseaux IoT",
            description: "Approfondissez les protocoles de communication IoT : LoRaWAN, Sigfox, WiFi, Bluetooth et 5G.",
            duree: 25,
            objectifs: ["LoRaWAN", "Sigfox", "WiFi/Bluetooth", "5G"],
            prerequis: ["Bases réseaux", "Connaissances IoT"],
            prix: 750,
            image: "formation-reseaux.jpg",
            date_ajout: "2024-01-14",
            admin_id: 1
        }
    ],

    produits: [
        {
            id: 1,
            nom: "Kit Arduino Uno IoT",
            description: "Kit complet avec Arduino Uno, capteurs et guide de démarrage pour vos premiers projets IoT.",
            prix: 89,
            images: ["arduino-kit-1.jpg", "arduino-kit-2.jpg"],
            caracteristiques: ["Arduino Uno", "Capteurs divers", "Câbles", "Guide démarrage"],
            whatsapp_numero: "+33123456789",
            categorie: "Kits de développement",
            disponibilite: true,
            date_ajout: "2024-01-05",
            admin_id: 1
        },
        {
            id: 2,
            nom: "Capteur Multisensoriel",
            description: "Capteur intelligent combinant température, humidité, pression et qualité de l'air.",
            prix: 156,
            images: ["capteur-multi-1.jpg"],
            caracteristiques: ["Température", "Humidité", "Pression", "Qualité air"],
            whatsapp_numero: "+33123456789",
            categorie: "Capteurs",
            disponibilite: true,
            date_ajout: "2024-01-08",
            admin_id: 1
        },
        {
            id: 3,
            nom: "Module WiFi Pro",
            description: "Module WiFi haute performance avec antenne intégrée pour connexions IoT stables.",
            prix: 45,
            images: ["wifi-module-1.jpg"],
            caracteristiques: ["WiFi 6", "Antenne intégrée", "Faible consommation"],
            whatsapp_numero: "+33123456789",
            categorie: "Modules communication",
            disponibilite: true,
            date_ajout: "2024-01-10",
            admin_id: 1
        },
        {
            id: 4,
            nom: "Gateway Sécurisé",
            description: "Passerelle IoT avec chiffrement avancé et gestion centralisée des appareils connectés.",
            prix: 299,
            images: ["gateway-1.jpg", "gateway-2.jpg"],
            caracteristiques: ["Chiffrement avancé", "Gestion centralisée", "Sécurité renforcée"],
            whatsapp_numero: "+33123456789",
            categorie: "Gateways",
            disponibilite: false,
            date_ajout: "2024-01-12",
            admin_id: 1
        }
    ],

    partenaires: [
        {
            id: 1,
            nom: "TechCorp",
            logo: "techcorp-logo.png",
            description: "Leader européen en solutions technologiques industrielles.",
            type: "client",
            date_ajout: "2024-01-01",
            admin_id: 1
        },
        {
            id: 2,
            nom: "InnoLab",
            logo: "innolab-logo.png",
            description: "Centre de recherche et développement en innovation numérique.",
            type: "partenaire",
            date_ajout: "2024-01-03",
            admin_id: 1
        },
        {
            id: 3,
            nom: "SmartCity",
            logo: "smartcity-logo.png",
            description: "Spécialiste des solutions IoT pour les villes intelligentes.",
            type: "client",
            date_ajout: "2024-01-05",
            admin_id: 1
        }
    ],

    temoignages: [
        {
            id: 1,
            nom: "Marie Dupont",
            logo: "techstart-logo.png",
            description: "H-Lab a transformé notre vision en réalité. Leur expertise technique et leur accompagnement ont été déterminants pour le succès de notre projet IoT.",
            type: "client",
            date_ajout: "2024-01-20",
            admin_id: 1
        },
        {
            id: 2,
            nom: "Jean Martin",
            logo: "ecole-ingenieurs-logo.png",
            description: "Les formations H-Lab m'ont donné les compétences pratiques nécessaires pour exceller dans le domaine de l'IoT. Approche pédagogique excellente !",
            type: "client",
            date_ajout: "2024-01-22",
            admin_id: 1
        },
        {
            id: 3,
            nom: "Sophie Laurent",
            logo: "megacorp-logo.png",
            description: "Partenaire de confiance depuis 3 ans, H-Lab nous accompagne dans nos projets les plus ambitieux avec un professionnalisme remarquable.",
            type: "partenaire",
            date_ajout: "2024-01-25",
            admin_id: 1
        }
    ],

    equipe: [
        {
            id: 1,
            nom: "Alexandre",
            prenom: "Dubois",
            poste: "CEO & Co-fondateur",
            bio: "Ingénieur Télécom ParisTech, 15 ans d'expérience dans l'IoT industriel. Visionnaire et stratège de l'innovation technologique.",
            photo: "alexandre-dubois.jpg",
            reseaux_sociaux: {
                linkedin: "https://linkedin.com/in/alexandre-dubois",
                twitter: "https://twitter.com/alexandre_dubois"
            },
            specialites: ["Stratégie IoT", "Innovation", "Leadership"],
            date_ajout: "2024-01-01",
            admin_id: 1
        },
        {
            id: 2,
            nom: "Marie",
            prenom: "Chen",
            poste: "CTO & Co-fondatrice",
            bio: "Docteure en informatique, spécialiste en IA et machine learning. Architecte des solutions techniques les plus avancées de H-Lab.",
            photo: "marie-chen.jpg",
            reseaux_sociaux: {
                linkedin: "https://linkedin.com/in/marie-chen",
                github: "https://github.com/marie-chen"
            },
            specialites: ["IA", "Machine Learning", "Architecture logicielle"],
            date_ajout: "2024-01-01",
            admin_id: 1
        },
        {
            id: 3,
            nom: "Thomas",
            prenom: "Rodriguez",
            poste: "Lead Developer",
            bio: "Expert en développement full-stack et architectures microservices. Passionné par les technologies émergentes et l'optimisation.",
            photo: "thomas-rodriguez.jpg",
            reseaux_sociaux: {
                linkedin: "https://linkedin.com/in/thomas-rodriguez",
                github: "https://github.com/thomas-rodriguez"
            },
            specialites: ["Full-stack", "Microservices", "DevOps"],
            date_ajout: "2024-01-15",
            admin_id: 1
        },
        {
            id: 4,
            nom: "Sarah",
            prenom: "Johnson",
            poste: "Hardware Engineer",
            bio: "Ingénieure en électronique, spécialiste des circuits intégrés et des systèmes embarqués. Créatrice des solutions hardware les plus innovantes.",
            photo: "sarah-johnson.jpg",
            reseaux_sociaux: {
                linkedin: "https://linkedin.com/in/sarah-johnson"
            },
            specialites: ["Électronique", "Systèmes embarqués", "IoT Hardware"],
            date_ajout: "2024-01-10",
            admin_id: 1
        },
        {
            id: 5,
            nom: "David",
            prenom: "Kim",
            poste: "Data Scientist",
            bio: "Expert en analyse de données et machine learning. Transforme les données IoT en insights stratégiques pour nos clients.",
            photo: "david-kim.jpg",
            reseaux_sociaux: {
                linkedin: "https://linkedin.com/in/david-kim",
                github: "https://github.com/david-kim"
            },
            specialites: ["Data Science", "Machine Learning", "Analytics"],
            date_ajout: "2024-01-12",
            admin_id: 1
        },
        {
            id: 6,
            nom: "Emma",
            prenom: "Wilson",
            poste: "UX/UI Designer",
            bio: "Designer experte en expérience utilisateur. Crée des interfaces intuitives qui rendent la technologie accessible à tous.",
            photo: "emma-wilson.jpg",
            reseaux_sociaux: {
                linkedin: "https://linkedin.com/in/emma-wilson"
            },
            specialites: ["UX Design", "UI Design", "Design Thinking"],
            date_ajout: "2024-01-08",
            admin_id: 1
        }
    ],

    projets: [
        {
            id: 1,
            titre: "SmartCity Sensors",
            description_courte: "Réseau de capteurs intelligents pour la surveillance environnementale urbaine.",
            description_complete: "Un réseau complet de capteurs intelligents déployé dans plusieurs villes pour surveiller la qualité de l'air, le niveau sonore, la température et l'humidité en temps réel. Cette solution permet aux municipalités de prendre des décisions éclairées pour améliorer la qualité de vie urbaine.",
            image_principale: "smartcity-main.jpg",
            images_gallery: ["smartcity-1.jpg", "smartcity-2.jpg", "smartcity-3.jpg"],
            technologies_utilisees: ["LoRaWAN", "Node.js", "MongoDB", "React", "AWS IoT"],
            date_realisation: "2024-01-30",
            client: "Ville de Paris",
            categorie: "Smart City",
            defis: ["Déploiement à grande échelle", "Fiabilité des capteurs", "Intégration données"],
            solutions: ["Réseau maillé LoRaWAN", "Capteurs auto-alimentés", "Plateforme centralisée"],
            resultats: ["Couverture de 5 quartiers", "Réduction pollution de 25%", "Données temps réel"],
            lien_demo: "https://demo.smartcity.h-lab.fr",
            date_ajout: "2024-01-15",
            admin_id: 1
        },
        {
            id: 2,
            titre: "Industrial IoT Platform",
            description_courte: "Plateforme de gestion centralisée pour l'industrie 4.0 avec analytics avancés.",
            description_complete: "Plateforme complète de gestion IoT pour l'industrie 4.0, intégrant l'analytics prédictif, la maintenance préventive et l'optimisation des processus de production.",
            image_principale: "industrial-main.jpg",
            images_gallery: ["industrial-1.jpg", "industrial-2.jpg"],
            technologies_utilisees: ["Python", "TensorFlow", "Kubernetes", "PostgreSQL", "Grafana"],
            date_realisation: "2024-02-15",
            client: "Manufacture Plus",
            categorie: "Industrie 4.0",
            defis: ["Intégration legacy", "Sécurité données", "Performance temps réel"],
            solutions: ["API adaptateurs", "Chiffrement end-to-end", "Architecture microservices"],
            resultats: ["75% projets terminés", "Réduction downtime 40%", "ROI 300%"],
            lien_demo: null,
            date_ajout: "2024-01-20",
            admin_id: 1
        },
        {
            id: 3,
            titre: "Smart Home Hub",
            description_courte: "Hub central pour la domotique avec contrôle vocal et intelligence artificielle.",
            description_complete: "Hub central intelligent pour la domotique moderne, intégrant contrôle vocal, intelligence artificielle et compatibilité avec tous les protocoles IoT.",
            image_principale: "smarthome-main.jpg",
            images_gallery: ["smarthome-1.jpg", "smarthome-2.jpg", "smarthome-3.jpg"],
            technologies_utilisees: ["ARM Cortex", "Zigbee", "WiFi 6", "Bluetooth 5.0", "Edge AI"],
            date_realisation: "2024-01-20",
            client: "H-Lab (produit propre)",
            categorie: "Domotique",
            defis: ["Compatibilité protocoles", "Traitement edge", "Sécurité domotique"],
            solutions: ["Protocoles multiples", "IA embarquée", "Chiffrement local"],
            resultats: ["Produit commercialisé", "5000+ unités", "Note 4.8/5"],
            lien_demo: "https://smarthome.h-lab.fr",
            date_ajout: "2024-01-10",
            admin_id: 1
        },
        {
            id: 4,
            titre: "Agricultural Monitoring",
            description_courte: "Système de surveillance agricole intelligent pour optimiser les rendements.",
            description_complete: "Système complet de surveillance agricole utilisant des capteurs IoT pour optimiser l'irrigation, surveiller la santé des cultures et prédire les rendements.",
            image_principale: "agriculture-main.jpg",
            images_gallery: ["agriculture-1.jpg", "agriculture-2.jpg"],
            technologies_utilisees: ["LoRa", "Solar Power", "Machine Learning", "Weather API", "Mobile App"],
            date_realisation: "2024-02-01",
            client: "AgriTech Solutions",
            categorie: "Agriculture",
            defis: ["Conditions extêmes", "Autonomie énergétique", "Couverture réseau"],
            solutions: ["Capteurs solaires", "Transmission satellite", "IA prédictive"],
            resultats: ["200+ exploitations", "Économie eau 30%", "Rendements +15%"],
            lien_demo: null,
            date_ajout: "2024-01-18",
            admin_id: 1
        },
        {
            id: 5,
            titre: "Blockchain IoT Security",
            description_courte: "Solution de sécurité blockchain pour l'authentification des dispositifs IoT.",
            description_complete: "Solution révolutionnaire de sécurité basée sur la blockchain pour l'authentification et la protection des dispositifs IoT.",
            image_principale: "blockchain-main.jpg",
            images_gallery: ["blockchain-1.jpg"],
            technologies_utilisees: ["Ethereum", "Solidity", "IPFS", "Web3.js", "Hyperledger"],
            date_realisation: null,
            client: "SecureIoT Corp",
            categorie: "Sécurité",
            defis: ["Authentification décentralisée", "Performance blockchain", "Intégration IoT"],
            solutions: ["Smart contracts", "Zero-knowledge proofs", "API blockchain"],
            resultats: ["Prototype validé", "Tests sécurité OK", "3 partenariats"],
            lien_demo: "https://blockchain-demo.h-lab.fr",
            date_ajout: "2024-01-25",
            admin_id: 1
        },
        {
            id: 6,
            titre: "Wearable Health Monitor",
            description_courte: "Dispositif portable pour le monitoring continu des signes vitaux.",
            description_complete: "Dispositif portable de nouvelle génération pour le monitoring continu des signes vitaux, intégrant des capteurs avancés et l'intelligence artificielle.",
            image_principale: "wearable-main.jpg",
            images_gallery: ["wearable-1.jpg", "wearable-2.jpg"],
            technologies_utilisees: ["ARM M4", "Bluetooth LE", "PPG Sensors", "ECG", "Machine Learning"],
            date_realisation: null,
            client: "MediTech",
            categorie: "Santé",
            defis: ["Précision médicale", "Autonomie batterie", "Conformité CE"],
            solutions: ["Capteurs médicaux", "Optimisation énergie", "Certification clinique"],
            resultats: ["Prototype avancé", "Tests cliniques OK", "Certification en cours"],
            lien_demo: null,
            date_ajout: "2024-01-28",
            admin_id: 1
        }
    ],

    admin: [
        {
            id: 1,
            nom: "Admin",
            prenom: "Principal",
            email: "admin@h-lab.fr",
            password: "hashed_password",
            date_creation: "2024-01-01"
        }
    ]
};

// Utility functions for data management
function getData(entity) {
    return JSON.parse(localStorage.getItem(`hlab_${entity}`)) || fakeData[entity] || [];
}

function saveData(entity, data) {
    localStorage.setItem(`hlab_${entity}`, JSON.stringify(data));
}

function addItem(entity, item) {
    const data = getData(entity);
    item.id = Date.now(); // Simple ID generation
    item.date_ajout = new Date().toISOString().split('T')[0];
    item.admin_id = 1; // Current admin
    data.push(item);
    saveData(entity, data);
    return item;
}

function updateItem(entity, id, updates) {
    const data = getData(entity);
    const index = data.findIndex(item => item.id == id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updates };
        saveData(entity, data);
        return data[index];
    }
    return null;
}

function deleteItem(entity, id) {
    const data = getData(entity);
    const filtered = data.filter(item => item.id != id);
    saveData(entity, filtered);
    return filtered;
}

function getItemById(entity, id) {
    const data = getData(entity);
    return data.find(item => item.id == id) || null;
}

// Export for use in other files
window.AdminData = {
    get: getData,
    save: saveData,
    add: addItem,
    update: updateItem,
    delete: deleteItem,
    getById: getItemById
};