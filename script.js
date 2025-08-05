// India Tourism Website - MakeMyTrip Style JavaScript

// Tourist data with destinations
const tourismData = {
    rajasthan: {
        name: "Rajasthan",
        places: [
            {
                name: "Jaipur",
                price: "₹15,000",
                duration: "3 Days",
                rating: "4.5",
                image: "https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400",
                description: "Pink City with magnificent palaces and forts"
            },
            {
                name: "Udaipur",
                price: "₹18,000",
                duration: "3 Days", 
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
                description: "City of Lakes with stunning architecture"
            },
            {
                name: "Jodhpur",
                price: "₹12,000",
                duration: "2 Days",
                rating: "4.3",
                image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400", 
                description: "Blue City with Mehrangarh Fort"
            }
        ]
    },
    kerala: {
        name: "Kerala",
        places: [
            {
                name: "Alleppey",
                price: "₹12,000",
                duration: "2 Days",
                rating: "4.6",
                image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400",
                description: "Backwater cruise in houseboats"
            },
            {
                name: "Munnar",
                price: "₹10,000", 
                duration: "2 Days",
                rating: "4.4",
                image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
                description: "Hill station with tea gardens"
            },
            {
                name: "Kochi",
                price: "₹8,000",
                duration: "2 Days", 
                rating: "4.2",
                image: "https://images.unsplash.com/photo-1581550289-d4144ee6f724?w=400",
                description: "Historic port city with colonial charm"
            }
        ]
    },
    goa: {
        name: "Goa",
        places: [
            {
                name: "North Goa",
                price: "₹8,000",
                duration: "3 Days",
                rating: "4.3",
                image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
                description: "Beaches, nightlife and water sports"
            },
            {
                name: "South Goa", 
                price: "₹9,000",
                duration: "3 Days",
                rating: "4.5",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
                description: "Peaceful beaches and luxury resorts"
            }
        ]
    },
    himachal: {
        name: "Himachal Pradesh",
        places: [
            {
                name: "Shimla",
                price: "₹12,000",
                duration: "3 Days",
                rating: "4.2",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                description: "Queen of Hills with colonial architecture"
            },
            {
                name: "Manali",
                price: "₹15,000",
                duration: "4 Days", 
                rating: "4.6",
                image: "https://images.unsplash.com/photo-1571115764595-644406f4b8f4?w=400",
                description: "Adventure sports and snow-capped mountains"
            }
        ]
    }
};

// Current selected state
let currentState = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showHomePage();
});

// Event listeners
function setupEventListeners() {
    // State card clicks
    document.querySelectorAll('.state-card').forEach(card => {
        card.addEventListener('click', function() {
            const state = this.dataset.state;
            selectState(state);
        });
    });

    // Navigation
    document.querySelector('.nav-toggle')?.addEventListener('click', toggleMobileNav);
    
    // Search functionality
    document.getElementById('searchBtn')?.addEventListener('click', performSearch);
    document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Back button
    document.addEventListener('click', function(e) {
        if (e.target.closest('.back-btn')) {
            showHomePage();
        }
    });

    // Book now buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.book-btn')) {
            const placeName = e.target.closest('.destination-card').querySelector('h3').textContent;
            openBookingModal(placeName);
        }
    });
}

// Select state and show destinations
function selectState(state) {
    currentState = state;
    const stateData = tourismData[state];
    
    if (!stateData) {
        console.error('State data not found:', state);
        return;
    }

    // Hide home sections
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.states-section').style.display = 'none';
    document.querySelector('.stats-section').style.display = 'none';
    
    // Show destinations section
    const placesSection = document.querySelector('.places-section');
    placesSection.style.display = 'block';
    
    // Update section title
    document.getElementById('selectedStateName').textContent = `${stateData.name} Destinations`;
    document.getElementById('selectedStateDesc').textContent = `Explore the best places to visit in ${stateData.name}`;
    
    // Generate destination cards
    const placesGrid = document.getElementById('placesGrid');
    placesGrid.innerHTML = stateData.places.map(place => `
        <div class="destination-card">
            <div class="destination-image">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <div class="destination-badge">
                    <span class="rating">
                        <i class="fas fa-star"></i>
                        ${place.rating}
                    </span>
                </div>
            </div>
            <div class="destination-content">
                <h3>${place.name}</h3>
                <p class="destination-desc">${place.description}</p>
                <div class="destination-details">
                    <div class="price">
                        <span class="amount">${place.price}</span>
                        <small>per person</small>
                    </div>
                    <div class="duration">
                        <i class="fas fa-clock"></i>
                        ${place.duration}
                    </div>
                </div>
                <button class="book-btn">
                    <i class="fas fa-calendar-check"></i>
                    Book Now
                </button>
            </div>
        </div>
    `).join('');
    
    // Scroll to destinations
    placesSection.scrollIntoView({ behavior: 'smooth' });
}

// Show home page
function showHomePage() {
    // Show home sections
    document.querySelector('.hero').style.display = 'flex';
    document.querySelector('.states-section').style.display = 'block';
    document.querySelector('.stats-section').style.display = 'block';
    
    // Hide destinations section
    document.querySelector('.places-section').style.display = 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Back to states
function backToStates() {
    showHomePage();
}

// Scroll to states section
function scrollToStates() {
    document.querySelector('.states-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Toggle mobile navigation
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Search functionality
function performSearch() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase();
    if (!searchTerm) return;
    
    // Simple search through all destinations
    let searchResults = [];
    
    Object.keys(tourismData).forEach(stateKey => {
        const state = tourismData[stateKey];
        state.places.forEach(place => {
            if (place.name.toLowerCase().includes(searchTerm) || 
                place.description.toLowerCase().includes(searchTerm) ||
                state.name.toLowerCase().includes(searchTerm)) {
                searchResults.push({
                    ...place,
                    state: state.name,
                    stateKey: stateKey
                });
            }
        });
    });
    
    // Show search results
    displaySearchResults(searchResults, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    // Hide home sections
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.states-section').style.display = 'none';
    document.querySelector('.stats-section').style.display = 'none';
    
    // Show destinations section with search results
    const placesSection = document.querySelector('.places-section');
    placesSection.style.display = 'block';
    
    // Update section title
    document.getElementById('selectedStateName').textContent = `Search Results for "${searchTerm}"`;
    document.getElementById('selectedStateDesc').textContent = `Found ${results.length} destinations matching your search`;
    
    // Generate search result cards
    const placesGrid = document.getElementById('placesGrid');
    
    if (results.length === 0) {
        placesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No results found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
        return;
    }
    
    placesGrid.innerHTML = results.map(place => `
        <div class="destination-card">
            <div class="destination-image">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <div class="destination-badge">
                    <span class="rating">
                        <i class="fas fa-star"></i>
                        ${place.rating}
                    </span>
                </div>
            </div>
            <div class="destination-content">
                <h3>${place.name}</h3>
                <p class="destination-state">${place.state}</p>
                <p class="destination-desc">${place.description}</p>
                <div class="destination-details">
                    <div class="price">
                        <span class="amount">${place.price}</span>
                        <small>per person</small>
                    </div>
                    <div class="duration">
                        <i class="fas fa-clock"></i>
                        ${place.duration}
                    </div>
                </div>
                <button class="book-btn">
                    <i class="fas fa-calendar-check"></i>
                    Book Now
                </button>
            </div>
        </div>
    `).join('');
    
    // Scroll to results
    placesSection.scrollIntoView({ behavior: 'smooth' });
}

// Open booking modal (placeholder)
function openBookingModal(placeName) {
    alert(`Booking feature for ${placeName} coming soon!\n\nThis would integrate with:\n• Payment gateway\n• Hotel booking\n• Flight booking\n• Travel insurance`);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'flex';
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

// Initialize loading
window.addEventListener('load', function() {
    hideLoading();
});

// Show loading on page transitions
function showPageTransition() {
    showLoading();
    setTimeout(hideLoading, 500);
} 