// Tourist Places Data
const touristData = {
    rajasthan: {
        name: "Rajasthan",
        description: "The Land of Kings, known for its royal heritage, magnificent palaces, and vibrant culture",
        places: [
            {
                id: 1,
                name: "Jaipur - The Pink City",
                description: "The capital city of Rajasthan, famous for its pink-colored buildings, magnificent palaces, and rich cultural heritage. Known as the Pink City, Jaipur is a perfect blend of ancient and modern India.",
                images: [
                    "https://images.unsplash.com/photo-1587474260584-136574528ed5",
                    "https://images.unsplash.com/photo-1605649487212-47bdab064bf7",
                    "https://images.unsplash.com/photo-1477587458883-47145ed94245"
                ],
                bestTime: "October to March (Cool and pleasant weather)",
                duration: "2-3 Days",
                rating: "4.6",
                category: "Heritage",
                budget: {
                    accommodation: "₹2,000 - ₹8,000 per night",
                    food: "₹500 - ₹1,500 per day",
                    transport: "₹1,000 - ₹3,000 per day",
                    attractions: "₹500 - ₹1,000 per day",
                    total: "₹8,000 - ₹27,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Jaipur, check-in hotel, visit City Palace, Jantar Mantar, local shopping at Johari Bazaar"
                    },
                    {
                        day: "Day 2", 
                        activities: "Early morning visit to Amber Fort, elephant ride, afternoon at Hawa Mahal, evening at Nahargarh Fort for sunset"
                    },
                    {
                        day: "Day 3",
                        activities: "Visit Jaigarh Fort, Albert Hall Museum, local cuisine experience, departure"
                    }
                ],
                location: "Jaipur is well connected by air, rail, and road. Jaipur Airport connects to major Indian cities.",
                mapCoords: "26.9124,75.7873"
            },
            {
                id: 2,
                name: "Udaipur - City of Lakes",
                description: "Known as the Venice of the East, Udaipur is famous for its beautiful lakes, royal palaces, and romantic ambiance. The city offers a perfect blend of history and natural beauty.",
                images: [
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
                    "https://images.unsplash.com/photo-1551782450-17144efb5c50",
                    "https://images.unsplash.com/photo-1609298971037-6aa5f95875e9"
                ],
                bestTime: "September to March (Pleasant weather for sightseeing)",
                duration: "2-3 Days",
                rating: "4.8",
                category: "Lakes & Palaces",
                budget: {
                    accommodation: "₹3,000 - ₹15,000 per night",
                    food: "₹600 - ₹2,000 per day", 
                    transport: "₹800 - ₹2,500 per day",
                    attractions: "₹600 - ₹1,200 per day",
                    total: "₹10,000 - ₹41,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Udaipur, visit City Palace complex, boat ride in Lake Pichola, sunset at Ambrai Ghat"
                    },
                    {
                        day: "Day 2",
                        activities: "Visit Jagdish Temple, Saheliyon ki Bari, Fateh Sagar Lake, Ropeway to Karni Mata Temple"
                    },
                    {
                        day: "Day 3",
                        activities: "Day trip to Eklingji and Nagda temples, local markets, traditional Rajasthani dinner"
                    }
                ],
                location: "Udaipur Airport connects to major cities. Well connected by trains and buses from Delhi, Mumbai, and Jaipur.",
                mapCoords: "24.5854,73.7125"
            },
            {
                id: 3,
                name: "Jaisalmer - The Golden City", 
                description: "Rising from the heart of the Thar Desert, Jaisalmer is known for its golden sandstone architecture, magnificent fort, and camel safaris in the desert dunes.",
                images: [
                    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
                    "https://images.unsplash.com/photo-1580146954423-cbfaa2ba1f0b",
                    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f"
                ],
                bestTime: "October to February (Cool desert weather)",
                duration: "2-3 Days",
                rating: "4.5",
                category: "Desert & Heritage",
                budget: {
                    accommodation: "₹1,500 - ₹12,000 per night",
                    food: "₹400 - ₹1,200 per day",
                    transport: "₹1,500 - ₹4,000 per day (including camel safari)",
                    attractions: "₹500 - ₹1,500 per day",
                    total: "₹7,000 - ₹37,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Jaisalmer, explore Jaisalmer Fort, Patwon Ki Haveli, local markets"
                    },
                    {
                        day: "Day 2",
                        activities: "Visit Salim Singh Ki Haveli, Nathmal Ki Haveli, afternoon camel safari to Sam Sand Dunes, overnight camping"
                    },
                    {
                        day: "Day 3",
                        activities: "Sunrise at dunes, return to city, visit Gadisar Lake, departure"
                    }
                ],
                location: "Jaisalmer Railway Station connects to major cities. Road connectivity via Jodhpur and Bikaner.",
                mapCoords: "26.9157,70.9083"
            }
        ]
    },
    kerala: {
        name: "Kerala",
        description: "God's Own Country, famous for its backwaters, hill stations, and Ayurvedic treatments",
        places: [
            {
                id: 4,
                name: "Alleppey - Venice of the East",
                description: "Famous for its intricate network of backwaters, houseboats, and serene canals. Experience the unique ecosystem of Kerala's backwaters with traditional houseboat stays.",
                images: [
                    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                ],
                bestTime: "November to February (Cool and dry weather)",
                duration: "2-3 Days",
                rating: "4.7",
                category: "Backwaters",
                budget: {
                    accommodation: "₹3,000 - ₹20,000 per night (Houseboat)",
                    food: "₹500 - ₹1,500 per day",
                    transport: "₹800 - ₹2,000 per day",
                    attractions: "₹300 - ₹800 per day",
                    total: "₹9,000 - ₹48,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Alleppey, board houseboat, cruise through backwaters, traditional Kerala lunch"
                    },
                    {
                        day: "Day 2",
                        activities: "Continue backwater cruise, visit local villages, fishing experience, Ayurvedic massage"
                    },
                    {
                        day: "Day 3",
                        activities: "Morning cruise, visit Alleppey Beach, local market shopping, departure"
                    }
                ],
                location: "Alleppey Railway Station connects to major Kerala cities. Cochin Airport (53km) is the nearest airport.",
                mapCoords: "9.4981,76.3388"
            },
            {
                id: 5,
                name: "Munnar - Hill Station Paradise",
                description: "A beautiful hill station known for its tea plantations, misty mountains, and cool climate. Perfect for nature lovers and those seeking tranquility.",
                images: [
                    "https://images.unsplash.com/photo-1596370743053-6a8acd9e5a1d",
                    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                ],
                bestTime: "September to March (Pleasant weather)",
                duration: "2-3 Days",
                rating: "4.6",
                category: "Hill Station",
                budget: {
                    accommodation: "₹2,000 - ₹10,000 per night",
                    food: "₹400 - ₹1,200 per day",
                    transport: "₹1,200 - ₹3,000 per day",
                    attractions: "₹400 - ₹1,000 per day",
                    total: "₹8,000 - ₹30,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Munnar, check-in hotel, visit Tea Museum, evening at local markets"
                    },
                    {
                        day: "Day 2",
                        activities: "Visit Eravikulam National Park, Mattupetty Dam, Echo Point, tea plantation walk"
                    },
                    {
                        day: "Day 3",
                        activities: "Early morning trek to Anamudi Peak, visit Kundala Lake, departure"
                    }
                ],
                location: "Cochin Airport (130km) is nearest. Well connected by road from Kochi and other Kerala cities.",
                mapCoords: "10.0889,77.0595"
            },
            {
                id: 6,
                name: "Kochi - Queen of Arabian Sea",
                description: "A historic port city that beautifully blends colonial architecture with modern development. Known for its Chinese fishing nets, spice markets, and cultural diversity.",
                images: [
                    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
                ],
                bestTime: "October to March (Pleasant weather)",
                duration: "2 Days",
                rating: "4.4",
                category: "Heritage & Culture",
                budget: {
                    accommodation: "₹1,500 - ₹8,000 per night",
                    food: "₹400 - ₹1,200 per day",
                    transport: "₹500 - ₹1,500 per day",
                    attractions: "₹300 - ₹800 per day",
                    total: "₹5,400 - ₹22,000 for 2 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Kochi, visit Fort Kochi, Chinese Fishing Nets, St. Francis Church, Dutch Palace"
                    },
                    {
                        day: "Day 2",
                        activities: "Spice market tour, Kathakali performance, Marine Drive, shopping at Lulu Mall, departure"
                    }
                ],
                location: "Cochin International Airport connects to major international and domestic destinations.",
                mapCoords: "9.9312,76.2673"
            }
        ]
    },
    himachal: {
        name: "Himachal Pradesh",
        description: "Land of Snow-Capped Mountains, offering adventure, spirituality, and natural beauty",
        places: [
            {
                id: 7,
                name: "Shimla - Queen of Hills",
                description: "The former summer capital of British India, known for its colonial architecture, toy train, and pleasant climate. A perfect hill station getaway.",
                images: [
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
                    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                ],
                bestTime: "March to June, September to November",
                duration: "2-3 Days",
                rating: "4.3",
                category: "Hill Station",
                budget: {
                    accommodation: "₹2,000 - ₹12,000 per night",
                    food: "₹500 - ₹1,500 per day",
                    transport: "₹1,000 - ₹3,000 per day",
                    attractions: "₹400 - ₹1,000 per day",
                    total: "₹8,000 - ₹35,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Shimla, visit Mall Road, Christ Church, Ridge, evening at Scandal Point"
                    },
                    {
                        day: "Day 2",
                        activities: "Day trip to Kufri, toy train ride to Kalka, visit Viceregal Lodge, local shopping"
                    },
                    {
                        day: "Day 3",
                        activities: "Visit Jakhu Temple, Summer Hill, Shimla State Museum, departure"
                    }
                ],
                location: "Shimla Airport (23km). Kalka-Shimla toy train. Well connected by road from Delhi and Chandigarh.",
                mapCoords: "31.1048,77.1734"
            },
            {
                id: 8,
                name: "Manali - Valley of Gods",
                description: "A popular hill station known for adventure sports, apple orchards, and snow-capped mountains. Gateway to Ladakh and Spiti Valley.",
                images: [
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
                    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                ],
                bestTime: "April to June, September to November",
                duration: "3-4 Days",
                rating: "4.5",
                category: "Adventure & Mountains",
                budget: {
                    accommodation: "₹1,500 - ₹10,000 per night",
                    food: "₹500 - ₹1,500 per day",
                    transport: "₹1,500 - ₹4,000 per day",
                    attractions: "₹500 - ₹2,000 per day",
                    total: "₹12,000 - ₹52,000 for 3-4 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Manali, visit Hadimba Temple, Van Vihar, Mall Road exploration"
                    },
                    {
                        day: "Day 2",
                        activities: "Day trip to Solang Valley, adventure activities (paragliding, zorbing), ropeway ride"
                    },
                    {
                        day: "Day 3",
                        activities: "Visit Rohtang Pass (if accessible), snow activities, hot springs at Vashisht"
                    },
                    {
                        day: "Day 4",
                        activities: "Old Manali exploration, Manu Temple, local café hopping, departure"
                    }
                ],
                location: "Bhuntar Airport (50km). Well connected by road from Delhi via Chandigarh and Shimla.",
                mapCoords: "32.2396,77.1887"
            }
        ]
    },
    goa: {
        name: "Goa", 
        description: "Tropical Beach Paradise known for its golden beaches, Portuguese heritage, and vibrant nightlife",
        places: [
            {
                id: 9,
                name: "North Goa - Beach Paradise",
                description: "Famous for its lively beaches, water sports, flea markets, and vibrant nightlife. Home to popular beaches like Baga, Calangute, and Anjuna.",
                images: [
                    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
                    "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
                    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f"
                ],
                bestTime: "November to February (Pleasant weather)",
                duration: "3-4 Days",
                rating: "4.4",
                category: "Beaches & Nightlife",
                budget: {
                    accommodation: "₹2,000 - ₹15,000 per night",
                    food: "₹600 - ₹2,000 per day",
                    transport: "₹800 - ₹2,500 per day",
                    attractions: "₹500 - ₹1,500 per day",
                    total: "₹12,000 - ₹63,000 for 3-4 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Goa, check-in hotel, relax at Calangute Beach, evening at Baga Beach"
                    },
                    {
                        day: "Day 2",
                        activities: "Water sports at Baga, visit Anjuna Beach, Saturday Night Market (if weekend)"
                    },
                    {
                        day: "Day 3",
                        activities: "Day trip to Arambol Beach, visit Chapora Fort, explore Mapusa Market"
                    },
                    {
                        day: "Day 4",
                        activities: "Beach hopping, last-minute shopping, departure"
                    }
                ],
                location: "Goa Airport (Dabolim) connects to major Indian cities. Well connected by train and road.",
                mapCoords: "15.5557,73.7672"
            },
            {
                id: 10,
                name: "South Goa - Peaceful Retreat", 
                description: "Known for serene beaches, luxury resorts, and peaceful ambiance. Perfect for those seeking relaxation and tranquility away from crowds.",
                images: [
                    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
                    "https://images.unsplash.com/photo-1559827260-dc66d52bef19"
                ],
                bestTime: "November to February (Perfect weather)",
                duration: "2-3 Days", 
                rating: "4.6",
                category: "Peaceful Beaches",
                budget: {
                    accommodation: "₹3,000 - ₹20,000 per night",
                    food: "₹600 - ₹2,000 per day",
                    transport: "₹800 - ₹2,000 per day",
                    attractions: "₹400 - ₹1,000 per day",
                    total: "₹9,000 - ₹50,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in South Goa, check-in resort, relax at Palolem Beach, beachside dinner"
                    },
                    {
                        day: "Day 2",
                        activities: "Visit Agonda Beach, Cabo de Rama Fort, sunset at Butterfly Beach"
                    },
                    {
                        day: "Day 3",
                        activities: "Colva Beach, visit local churches, spice plantation tour, departure"
                    }
                ],
                location: "Goa Airport is centrally located. South Goa is well connected by road and local transport.",
                mapCoords: "15.1394,74.1240"
            }
        ]
    },
    maharashtra: {
        name: "Maharashtra",
        description: "Land of Forts and Caves, offering rich history, vibrant cities, and natural beauty",
        places: [
            {
                id: 11,
                name: "Mumbai - City of Dreams",
                description: "The financial capital of India, known for Bollywood, bustling streets, and never-sleeping energy. A melting pot of cultures and dreams.",
                images: [
                    "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3",
                    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                ],
                bestTime: "November to February (Pleasant weather)",
                duration: "2-3 Days",
                rating: "4.2",
                category: "Metropolitan City",
                budget: {
                    accommodation: "₹2,500 - ₹15,000 per night",
                    food: "₹600 - ₹2,500 per day",
                    transport: "₹500 - ₹2,000 per day",
                    attractions: "₹500 - ₹1,500 per day",
                    total: "₹8,000 - ₹42,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Mumbai, visit Gateway of India, Elephanta Caves, Marine Drive evening walk"
                    },
                    {
                        day: "Day 2",
                        activities: "Bollywood studio tour, visit Dhobi Ghat, Crawford Market, Hanging Gardens"
                    },
                    {
                        day: "Day 3",
                        activities: "Juhu Beach, Siddhivinayak Temple, shopping at Linking Road, departure"
                    }
                ],
                location: "Chhatrapati Shivaji International Airport connects globally. Major railway junction.",
                mapCoords: "19.0760,72.8777"
            },
            {
                id: 12,
                name: "Ajanta & Ellora Caves",
                description: "UNESCO World Heritage Sites showcasing ancient Indian art and architecture. These rock-cut caves are masterpieces of Buddhist, Hindu, and Jain religious art.",
                images: [
                    "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3",
                    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                ],
                bestTime: "October to March (Cool and dry weather)",
                duration: "2 Days",
                rating: "4.7",
                category: "UNESCO Heritage", 
                budget: {
                    accommodation: "₹1,500 - ₹6,000 per night",
                    food: "₹400 - ₹1,200 per day",
                    transport: "₹1,500 - ₹4,000 per day",
                    attractions: "₹600 - ₹1,000 per day",
                    total: "₹8,000 - ₹24,000 for 2 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Aurangabad, visit Ellora Caves, explore Kailasa Temple, evening in Aurangabad"
                    },
                    {
                        day: "Day 2",
                        activities: "Day trip to Ajanta Caves, explore Buddhist monasteries and chaityas, return and departure"
                    }
                ],
                location: "Aurangabad Airport. Well connected by rail and road from Mumbai and Pune.",
                mapCoords: "20.0214,75.1816"
            }
        ]
    },
    karnataka: {
        name: "Karnataka",
        description: "Silicon Valley of India, known for its gardens, palaces, and technological advancement",
        places: [
            {
                id: 13,
                name: "Bangalore - Garden City",
                description: "India's Silicon Valley, known for its pleasant climate, gardens, pubs, and IT culture. A perfect blend of tradition and modernity.",
                images: [
                    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                ],
                bestTime: "October to February (Pleasant weather)",
                duration: "2-3 Days",
                rating: "4.3",
                category: "Metropolitan City",
                budget: {
                    accommodation: "₹2,000 - ₹12,000 per night",
                    food: "₹500 - ₹2,000 per day",
                    transport: "₹600 - ₹2,000 per day",
                    attractions: "₹400 - ₹1,200 per day",
                    total: "₹7,000 - ₹34,000 for 2-3 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Bangalore, visit Lalbagh Botanical Garden, Bangalore Palace, Brigade Road"
                    },
                    {
                        day: "Day 2",
                        activities: "Visit Cubbon Park, Vidhana Soudha, ISKCON Temple, Commercial Street shopping"
                    },
                    {
                        day: "Day 3",
                        activities: "Day trip to Nandi Hills for sunrise, Tipu Sultan's Summer Palace, departure"
                    }
                ],
                location: "Kempegowda International Airport connects to major global destinations.",
                mapCoords: "12.9716,77.5946"
            },
            {
                id: 14,
                name: "Mysore - Palace City",
                description: "Former royal capital known for its magnificent palace, silk sarees, and sandalwood. Rich in cultural heritage and architectural marvels.",
                images: [
                    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
                    "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3",
                    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                ],
                bestTime: "October to March (Pleasant weather)",
                duration: "2 Days",
                rating: "4.5",
                category: "Heritage & Culture",
                budget: {
                    accommodation: "₹1,500 - ₹8,000 per night",
                    food: "₹400 - ₹1,500 per day",
                    transport: "₹800 - ₹2,500 per day",
                    attractions: "₹400 - ₹1,000 per day",
                    total: "₹6,200 - ₹26,000 for 2 days"
                },
                itinerary: [
                    {
                        day: "Day 1",
                        activities: "Arrive in Mysore, visit Mysore Palace, Chamundi Hills, Brindavan Gardens evening"
                    },
                    {
                        day: "Day 2",
                        activities: "Visit St. Philomena's Cathedral, Mysore Zoo, Devaraja Market for silk shopping, departure"
                    }
                ],
                location: "Mysore Airport (10km). Well connected by rail and road from Bangalore and other cities.",
                mapCoords: "12.2958,76.6394"
            }
        ]
    }
};

// DOM Elements
const statesSection = document.getElementById('states');
const placesSection = document.getElementById('places');
const selectedStateName = document.getElementById('selectedStateName');
const selectedStateDesc = document.getElementById('selectedStateDesc');
const placesGrid = document.getElementById('placesGrid');
const placeModal = document.getElementById('placeModal');
const loading = document.getElementById('loading');

// Modal elements
const modalPlaceName = document.getElementById('modalPlaceName');
const modalPlaceDescription = document.getElementById('modalPlaceDescription');
const modalMainImage = document.getElementById('modalMainImage');
const imageThumbnails = document.getElementById('imageThumbnails');
const modalBestTime = document.getElementById('modalBestTime');
const modalDuration = document.getElementById('modalDuration');
const modalRating = document.getElementById('modalRating');
const modalCategory = document.getElementById('modalCategory');
const modalItinerary = document.getElementById('modalItinerary');
const modalBudget = document.getElementById('modalBudget');
const modalLocation = document.getElementById('modalLocation');
const modalMap = document.getElementById('modalMap');

// Booking related variables
let currentPlace = null;
let currentBookingStep = 1;
let bookingData = {};
let currentImages = [];
let currentImageIndex = 0;

// Package pricing multipliers
const packagePricing = {
    budget: 1.0,
    standard: 1.5,
    luxury: 2.5,
    custom: 2.0
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateCurrentDate();
    addScrollEffects();
});

// Initialize all event listeners
function initializeEventListeners() {
    // State selection
    document.querySelectorAll('.state-card').forEach(card => {
        card.addEventListener('click', function() {
            const stateName = this.dataset.state;
            selectState(stateName);
        });
    });

    // Modal close events
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    placeModal.addEventListener('click', function(e) {
        if (e.target === placeModal) {
            closeModal();
        }
    });

    // Booking modal events
    document.querySelector('.close-booking-modal').addEventListener('click', closeBookingModal);
    document.getElementById('bookingModal').addEventListener('click', function(e) {
        if (e.target === document.getElementById('bookingModal')) {
            closeBookingModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeBookingModal();
        }
    });

    // Tab switching in modal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            switchTab(e.target.dataset.tab);
        }
    });

    // Image navigation
    document.addEventListener('click', function(e) {
        if (e.target.closest('.prev-img')) {
            changeImage(-1);
        } else if (e.target.closest('.next-img')) {
            changeImage(1);
        }
    });

    // Mobile navigation toggle
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Form field events for price calculation
    document.getElementById('bookingPackage').addEventListener('change', calculatePrice);
    document.getElementById('adults').addEventListener('change', calculatePrice);
    document.getElementById('children').addEventListener('change', calculatePrice);
    document.getElementById('checkInDate').addEventListener('change', calculatePrice);
    document.getElementById('checkOutDate').addEventListener('change', calculatePrice);

    // Payment method selection
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Payment method selected:', this.value);
        });
    });

    // Set minimum date for booking
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkInDate').min = today;
    document.getElementById('checkOutDate').min = today;
}

// Update current date
function updateCurrentDate() {
    const currentDate = document.getElementById('currentDate');
    if (currentDate) {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        currentDate.textContent = today.toLocaleDateString('en-US', options);
    }
}

// Smooth scroll to states section
function scrollToStates() {
    document.getElementById('states').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll effects
function addScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Select state and show places
function selectState(stateName) {
    showLoading();
    
    setTimeout(() => {
        const stateData = touristData[stateName];
        if (stateData) {
            selectedStateName.textContent = `Tourist Places in ${stateData.name}`;
            selectedStateDesc.textContent = stateData.description;
            
            displayPlaces(stateData.places);
            
            statesSection.style.display = 'none';
            placesSection.style.display = 'block';
            
            // Smooth scroll to places section
            placesSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
        hideLoading();
    }, 1000);
}

// Display places grid
function displayPlaces(places) {
    placesGrid.innerHTML = '';
    
    places.forEach(place => {
        const placeCard = createPlaceCard(place);
        placesGrid.appendChild(placeCard);
    });
}

// Create place card element
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.onclick = () => openPlaceModal(place);
    
    card.innerHTML = `
        <img src="${place.images[0]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="${place.name}" loading="lazy">
        <div class="place-card-content">
            <h3>${place.name}</h3>
            <p>${place.description.substring(0, 120)}...</p>
            <div class="place-meta">
                <div class="place-rating">
                    <i class="fas fa-star"></i>
                    <span>${place.rating}</span>
                </div>
                <div class="place-type">${place.category}</div>
            </div>
        </div>
    `;
    
    return card;
}

// Open place modal with details
function openPlaceModal(place) {
    currentPlace = place; // Set the current place for booking
    
    modalPlaceName.textContent = place.name;
    modalPlaceDescription.textContent = place.description;
    
    // Set destination for trip planning
    const tripDestination = document.getElementById('tripDestination');
    if (tripDestination) {
        tripDestination.textContent = place.name;
    }
    
    // Set main image
    currentImages = place.images;
    currentImageIndex = 0;
    updateMainImage();
    
    // Create thumbnails
    createThumbnails();
    
    // Fill overview tab
    modalBestTime.textContent = place.bestTime;
    modalDuration.textContent = place.duration;
    modalRating.textContent = place.rating;
    modalCategory.textContent = place.category;
    
    // Fill itinerary tab
    displayItinerary(place.itinerary);
    
    // Fill budget tab
    displayBudget(place.budget);
    
    // Fill location tab
    displayLocation(place.location, place.mapCoords);
    
    // Show modal
    placeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset to overview tab
    switchTab('overview');
}

// Update main image
function updateMainImage() {
    if (currentImages.length > 0) {
        modalMainImage.src = `${currentImages[currentImageIndex]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
        modalMainImage.alt = `Image ${currentImageIndex + 1}`;
    }
}

// Create image thumbnails
function createThumbnails() {
    imageThumbnails.innerHTML = '';
    currentImages.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Thumbnail ${index + 1}">`;
        thumbnail.onclick = () => {
            currentImageIndex = index;
            updateMainImage();
            updateThumbnails();
        };
        imageThumbnails.appendChild(thumbnail);
    });
}

// Update thumbnail active state
function updateThumbnails() {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Change image (next/previous)
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }
    updateMainImage();
    updateThumbnails();
}

// Display itinerary
function displayItinerary(itinerary) {
    modalItinerary.innerHTML = '';
    itinerary.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'itinerary-day';
        dayElement.innerHTML = `
            <h5>${day.day}</h5>
            <p>${day.activities}</p>
        `;
        modalItinerary.appendChild(dayElement);
    });
}

// Display budget breakdown
function displayBudget(budget) {
    modalBudget.innerHTML = '';
    
    Object.entries(budget).forEach(([key, value]) => {
        if (key !== 'total') {
            const budgetItem = document.createElement('div');
            budgetItem.className = 'budget-item';
            budgetItem.innerHTML = `
                <span style="text-transform: capitalize;">${key.replace(/([A-Z])/g, ' $1')}</span>
                <span>${value}</span>
            `;
            modalBudget.appendChild(budgetItem);
        }
    });
    
    // Add total
    const totalElement = document.createElement('div');
    totalElement.className = 'budget-item budget-total';
    totalElement.innerHTML = `
        <span><strong>Total Estimated Cost</strong></span>
        <span><strong>${budget.total}</strong></span>
    `;
    modalBudget.appendChild(totalElement);
}

// Display location and map
function displayLocation(location, mapCoords) {
    modalLocation.innerHTML = `<p>${location}</p>`;
    
    // Simple map placeholder (you can integrate Google Maps API here)
    modalMap.innerHTML = `
        <div style="text-align: center; color: #666; padding: 2rem;">
            <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
            <p>Interactive Map</p>
            <p style="font-size: 0.9rem;">Coordinates: ${mapCoords}</p>
            <button onclick="openGoogleMaps('${mapCoords}')" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer;">
                View on Google Maps
            </button>
        </div>
    `;
}

// Open Google Maps
function openGoogleMaps(coords) {
    const [lat, lng] = coords.split(',');
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
}

// Switch tabs in modal
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Close modal
function closeModal() {
    placeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Back to states
function backToStates() {
    placesSection.style.display = 'none';
    statesSection.style.display = 'block';
    
    // Smooth scroll to states section
    statesSection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Show loading
function showLoading() {
    loading.style.display = 'flex';
}

// Hide loading
function hideLoading() {
    loading.style.display = 'none';
}

// Open booking modal
function openBookingModal() {
    if (!currentPlace) return;
    
    const bookingModal = document.getElementById('bookingModal');
    const bookingDestination = document.getElementById('bookingDestination');
    const tripDestination = document.getElementById('tripDestination');
    
    // Set destination name
    bookingDestination.value = currentPlace.name;
    tripDestination.textContent = currentPlace.name;
    
    // Reset form and step
    resetBookingForm();
    currentBookingStep = 1;
    showBookingStep(1);
    
    // Show modal
    bookingModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Calculate initial price
    setTimeout(calculatePrice, 100);
}

// Close booking modal
function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    resetBookingForm();
}

// Reset booking form
function resetBookingForm() {
    document.getElementById('tripDetailsForm').reset();
    document.getElementById('personalInfoForm').reset();
    currentBookingStep = 1;
    bookingData = {};
    
    // Reset progress steps
    document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    document.querySelector('[data-step="1"]').classList.add('active');
    
    // Reset booking steps
    document.querySelectorAll('.booking-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('bookingStep1').classList.add('active');
}

// Show specific booking step
function showBookingStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.booking-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    document.getElementById(`bookingStep${stepNumber}`).classList.add('active');
    
    // Update progress
    updateBookingProgress(stepNumber);
    
    currentBookingStep = stepNumber;
}

// Update booking progress
function updateBookingProgress(currentStep) {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNum < currentStep) {
            step.classList.add('completed');
        } else if (stepNum === currentStep) {
            step.classList.add('active');
        }
    });
}

// Next booking step
function nextBookingStep() {
    if (validateCurrentStep()) {
        if (currentBookingStep < 3) {
            if (currentBookingStep === 1) {
                saveTripDetails();
            } else if (currentBookingStep === 2) {
                savePersonalInfo();
                updatePaymentSummary();
            }
            showBookingStep(currentBookingStep + 1);
        }
    }
}

// Previous booking step
function prevBookingStep() {
    if (currentBookingStep > 1) {
        showBookingStep(currentBookingStep - 1);
    }
}

// Validate current step
function validateCurrentStep() {
    if (currentBookingStep === 1) {
        return validateTripDetails();
    } else if (currentBookingStep === 2) {
        return validatePersonalInfo();
    }
    return true;
}

// Validate trip details
function validateTripDetails() {
    const package = document.getElementById('bookingPackage').value;
    const checkIn = document.getElementById('checkInDate').value;
    const checkOut = document.getElementById('checkOutDate').value;
    const adults = document.getElementById('adults').value;
    
    if (!package) {
        showNotification('Please select a package type', 'error');
        return false;
    }
    
    if (!checkIn || !checkOut) {
        showNotification('Please select check-in and check-out dates', 'error');
        return false;
    }
    
    if (new Date(checkOut) <= new Date(checkIn)) {
        showNotification('Check-out date must be after check-in date', 'error');
        return false;
    }
    
    if (!adults) {
        showNotification('Please select number of adults', 'error');
        return false;
    }
    
    return true;
}

// Validate personal information
function validatePersonalInfo() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const termsAccepted = document.getElementById('termsAccepted').checked;
    
    if (!firstName || !lastName) {
        showNotification('Please enter your full name', 'error');
        return false;
    }
    
    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    if (!phone || !isValidPhone(phone)) {
        showNotification('Please enter a valid phone number', 'error');
        return false;
    }
    
    if (!address) {
        showNotification('Please enter your address', 'error');
        return false;
    }
    
    if (!termsAccepted) {
        showNotification('Please accept the terms and conditions', 'error');
        return false;
    }
    
    return true;
}

// Validation helpers
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\+]?[0-9\s\-\(\)]{10,}$/.test(phone);
}

// Save trip details
function saveTripDetails() {
    bookingData.destination = document.getElementById('bookingDestination').value;
    bookingData.package = document.getElementById('bookingPackage').value;
    bookingData.checkIn = document.getElementById('checkInDate').value;
    bookingData.checkOut = document.getElementById('checkOutDate').value;
    bookingData.adults = parseInt(document.getElementById('adults').value);
    bookingData.children = parseInt(document.getElementById('children').value);
    bookingData.specialRequests = document.getElementById('specialRequests').value;
    bookingData.totalAmount = calculateTotalAmount();
}

// Save personal information
function savePersonalInfo() {
    bookingData.firstName = document.getElementById('firstName').value.trim();
    bookingData.lastName = document.getElementById('lastName').value.trim();
    bookingData.email = document.getElementById('email').value.trim();
    bookingData.phone = document.getElementById('phone').value.trim();
    bookingData.address = document.getElementById('address').value.trim();
    bookingData.emergencyContact = document.getElementById('emergencyContact').value.trim();
    bookingData.emergencyPhone = document.getElementById('emergencyPhone').value.trim();
    bookingData.newsletter = document.getElementById('newsletter').checked;
}

// Calculate price based on selections
function calculatePrice() {
    const package = document.getElementById('bookingPackage').value;
    const adults = parseInt(document.getElementById('adults').value) || 1;
    const children = parseInt(document.getElementById('children').value) || 0;
    const checkIn = document.getElementById('checkInDate').value;
    const checkOut = document.getElementById('checkOutDate').value;
    
    if (!package || !checkIn || !checkOut) {
        return;
    }
    
    // Calculate number of days
    const days = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    
    if (days <= 0) {
        return;
    }
    
    // Base price calculation (using place's budget as reference)
    let basePrice = 0;
    if (currentPlace && currentPlace.budget && currentPlace.budget.total) {
        // Extract number from budget string (e.g., "₹8,000 - ₹27,000 for 2-3 days")
        const budgetMatch = currentPlace.budget.total.match(/₹([\d,]+)/);
        if (budgetMatch) {
            basePrice = parseInt(budgetMatch[1].replace(/,/g, ''));
        }
    }
    
    // If no budget info, use default
    if (basePrice === 0) {
        basePrice = 15000; // Default base price
    }
    
    // Calculate based on package and guests
    const packageMultiplier = packagePricing[package] || 1.0;
    const guestMultiplier = adults + (children * 0.5);
    const dayMultiplier = Math.max(1, days / 3); // Normalize to 3-day base
    
    const calculatedBasePrice = Math.round(basePrice * dayMultiplier * guestMultiplier);
    const packageModifier = Math.round(calculatedBasePrice * (packageMultiplier - 1));
    const totalAmount = calculatedBasePrice + packageModifier;
    
    // Update UI
    document.getElementById('basePrice').textContent = `₹${calculatedBasePrice.toLocaleString()}`;
    document.getElementById('packageModifier').textContent = `₹${packageModifier.toLocaleString()}`;
    document.getElementById('totalAmount').textContent = `₹${totalAmount.toLocaleString()}`;
    document.getElementById('finalAmount').textContent = `₹${totalAmount.toLocaleString()}`;
    
    return totalAmount;
}

// Get total amount for booking
function calculateTotalAmount() {
    const totalText = document.getElementById('totalAmount').textContent;
    return parseInt(totalText.replace(/[₹,]/g, '')) || 0;
}

// Update payment summary
function updatePaymentSummary() {
    const checkInDate = new Date(bookingData.checkIn).toLocaleDateString();
    const checkOutDate = new Date(bookingData.checkOut).toLocaleDateString();
    const guestCount = bookingData.adults + bookingData.children;
    
    document.getElementById('summaryDestination').textContent = bookingData.destination;
    document.getElementById('summaryPackage').textContent = bookingData.package.charAt(0).toUpperCase() + bookingData.package.slice(1) + ' Package';
    document.getElementById('summaryDates').textContent = `${checkInDate} - ${checkOutDate}`;
    document.getElementById('summaryGuests').textContent = `${bookingData.adults} Adults${bookingData.children > 0 ? `, ${bookingData.children} Children` : ''}`;
    document.getElementById('summaryTotal').textContent = `₹${bookingData.totalAmount.toLocaleString()}`;
}

// Initiate payment process
function initiatePayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Show loading state
    const payButton = document.querySelector('.pay-now-btn');
    payButton.classList.add('loading');
    payButton.innerHTML = '<i class="fas fa-lock"></i> Processing Payment...';
    
    // Simulate payment processing
    setTimeout(() => {
        if (paymentMethod === 'upi') {
            initiateUPIPayment();
        } else if (paymentMethod === 'card') {
            initiateCardPayment();
        } else if (paymentMethod === 'netbanking') {
            initiateNetBankingPayment();
        }
    }, 1000);
}

// UPI Payment Integration (using Razorpay)
function initiateUPIPayment() {
    // In a real implementation, you would initialize Razorpay here
    // For demo purposes, we'll simulate the payment flow
    
    const options = {
        key: 'rzp_test_1234567890', // Replace with your Razorpay key
        amount: bookingData.totalAmount * 100, // Amount in paisa
        currency: 'INR',
        name: 'Discover India',
        description: `Trip to ${bookingData.destination}`,
        order_id: generateOrderId(),
        handler: function(response) {
            handlePaymentSuccess(response);
        },
        prefill: {
            name: `${bookingData.firstName} ${bookingData.lastName}`,
            email: bookingData.email,
            contact: bookingData.phone
        },
        theme: {
            color: '#FF6B35'
        },
        method: {
            upi: true,
            card: false,
            netbanking: false,
            wallet: false
        }
    };
    
    // For demo purposes, simulate successful payment
    setTimeout(() => {
        const mockResponse = {
            razorpay_payment_id: 'pay_' + Math.random().toString(36).substr(2, 9),
            razorpay_order_id: options.order_id,
            razorpay_signature: 'mock_signature'
        };
        handlePaymentSuccess(mockResponse);
    }, 2000);
}

// Card Payment
function initiateCardPayment() {
    // Similar implementation for card payments
    setTimeout(() => {
        const mockResponse = {
            payment_id: 'card_' + Math.random().toString(36).substr(2, 9),
            order_id: generateOrderId()
        };
        handlePaymentSuccess(mockResponse);
    }, 3000);
}

// Net Banking Payment
function initiateNetBankingPayment() {
    // Similar implementation for net banking
    setTimeout(() => {
        const mockResponse = {
            payment_id: 'nb_' + Math.random().toString(36).substr(2, 9),
            order_id: generateOrderId()
        };
        handlePaymentSuccess(mockResponse);
    }, 2500);
}

// Handle successful payment
function handlePaymentSuccess(response) {
    // Generate booking ID
    const bookingId = 'DI' + Date.now().toString().slice(-8);
    
    // Store booking data (in real app, send to server)
    const completedBooking = {
        ...bookingData,
        bookingId: bookingId,
        paymentId: response.payment_id || response.razorpay_payment_id,
        orderId: response.order_id || response.razorpay_order_id,
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
    };
    
    // Save to localStorage (in real app, save to database)
    saveBookingToStorage(completedBooking);
    
    // Close booking modal
    closeBookingModal();
    
    // Show success modal
    showPaymentSuccess(bookingId);
    
    // Send confirmation email (simulate)
    sendConfirmationEmail(completedBooking);
}

// Save booking to local storage
function saveBookingToStorage(booking) {
    let bookings = JSON.parse(localStorage.getItem('indiaBookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('indiaBookings', JSON.stringify(bookings));
}

// Show payment success modal
function showPaymentSuccess(bookingId) {
    document.getElementById('bookingId').textContent = bookingId;
    document.getElementById('paymentSuccessModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close success modal
function closeSuccessModal() {
    document.getElementById('paymentSuccessModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Download booking PDF (simulate)
function downloadBookingPDF() {
    showNotification('Booking details downloaded successfully!', 'success');
    // In real implementation, generate and download PDF
}

// Send confirmation email (simulate)
function sendConfirmationEmail(booking) {
    console.log('Sending confirmation email to:', booking.email);
    // In real implementation, call backend API to send email
}

// Generate order ID
function generateOrderId() {
    return 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Open terms and conditions
function openTerms() {
    alert('Terms & Conditions would open here in a real implementation');
}

// Open privacy policy
function openPrivacy() {
    alert('Privacy Policy would open here in a real implementation');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.state-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Search functionality (future enhancement)
function searchPlaces(query) {
    // Implementation for search functionality
    console.log('Searching for:', query);
}

// Favorites functionality (future enhancement)
function toggleFavorite(placeId) {
    // Implementation for favorites
    console.log('Toggle favorite for place:', placeId);
}

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Discover India - Tourist Guide',
            text: 'Explore amazing destinations across India!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    }
} 