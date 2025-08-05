// Daily Activities Monitor - JavaScript Implementation

class ActivityMonitor {
    constructor() {
        this.activities = this.loadActivities();
        this.timerInterval = null;
        this.timerStartTime = null;
        this.timerElapsedTime = 0;
        this.isTimerRunning = false;
        this.categoryColors = {
            health: '#48bb78',
            work: '#667eea',
            learning: '#ed8936',
            personal: '#9f7aea',
            social: '#38b2ac',
            entertainment: '#f56565',
            other: '#718096'
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateCurrentDate();
        this.updateDashboard();
        this.updateHistory();
        this.switchTab('tracker');
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = e.target.getAttribute('data-tab');
                this.switchTab(tabName);
            });
        });

        // Activity form submission
        document.getElementById('activityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addActivity();
        });

        // Timer controls
        document.getElementById('startTimer').addEventListener('click', () => this.startTimer());
        document.getElementById('pauseTimer').addEventListener('click', () => this.pauseTimer());
        document.getElementById('stopTimer').addEventListener('click', () => this.stopTimer());

        // History filter
        document.getElementById('historyFilter').addEventListener('change', () => this.updateHistory());

        // Clear history
        document.getElementById('clearHistory').addEventListener('click', () => this.clearHistory());
    }

    updateCurrentDate() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');

        // Update dashboard when switching to it
        if (tabName === 'dashboard') {
            this.updateDashboard();
        } else if (tabName === 'history') {
            this.updateHistory();
        }
    }

    addActivity() {
        const name = document.getElementById('activityName').value.trim();
        const category = document.getElementById('activityCategory').value;
        const duration = parseInt(document.getElementById('duration').value);
        const notes = document.getElementById('notes').value.trim();

        if (!name || !category || !duration) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        const activity = {
            id: Date.now(),
            name,
            category,
            duration,
            notes,
            timestamp: new Date().toISOString(),
            date: new Date().toDateString()
        };

        this.activities.push(activity);
        this.saveActivities();
        this.resetActivityForm();
        this.updateDashboard();
        this.updateHistory();
        this.showNotification('Activity added successfully!', 'success');
    }

    resetActivityForm() {
        document.getElementById('activityForm').reset();
    }

    startTimer() {
        if (this.isTimerRunning) return;

        this.isTimerRunning = true;
        this.timerStartTime = Date.now() - this.timerElapsedTime;
        
        this.timerInterval = setInterval(() => {
            this.updateTimerDisplay();
        }, 1000);

        // Update button states
        document.getElementById('startTimer').disabled = true;
        document.getElementById('pauseTimer').disabled = false;
        document.getElementById('stopTimer').disabled = false;
    }

    pauseTimer() {
        if (!this.isTimerRunning) return;

        this.isTimerRunning = false;
        clearInterval(this.timerInterval);

        // Update button states
        document.getElementById('startTimer').disabled = false;
        document.getElementById('pauseTimer').disabled = true;
        document.getElementById('stopTimer').disabled = false;
    }

    stopTimer() {
        this.isTimerRunning = false;
        clearInterval(this.timerInterval);

        const activityName = document.getElementById('timerActivityName').value.trim();
        const category = document.getElementById('timerCategory').value;

        if (this.timerElapsedTime > 0 && activityName && category) {
            const duration = Math.round(this.timerElapsedTime / 60000); // Convert to minutes
            
            const activity = {
                id: Date.now(),
                name: activityName,
                category,
                duration,
                notes: 'Added via timer',
                timestamp: new Date().toISOString(),
                date: new Date().toDateString()
            };

            this.activities.push(activity);
            this.saveActivities();
            this.showNotification(`Activity "${activityName}" saved (${duration} minutes)`, 'success');
        }

        // Reset timer
        this.timerElapsedTime = 0;
        this.updateTimerDisplay();
        document.getElementById('timerActivityName').value = '';
        document.getElementById('timerCategory').value = '';

        // Update button states
        document.getElementById('startTimer').disabled = false;
        document.getElementById('pauseTimer').disabled = true;
        document.getElementById('stopTimer').disabled = true;

        this.updateDashboard();
        this.updateHistory();
    }

    updateTimerDisplay() {
        if (this.isTimerRunning) {
            this.timerElapsedTime = Date.now() - this.timerStartTime;
        }

        const totalSeconds = Math.floor(this.timerElapsedTime / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
    }

    updateDashboard() {
        const today = new Date().toDateString();
        const todaysActivities = this.activities.filter(activity => activity.date === today);

        // Update stats
        document.getElementById('totalActivities').textContent = todaysActivities.length;
        
        const totalMinutes = todaysActivities.reduce((sum, activity) => sum + activity.duration, 0);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        document.getElementById('totalTime').textContent = `${hours}h ${minutes}m`;

        // Find most active category
        const categoryTotals = {};
        todaysActivities.forEach(activity => {
            categoryTotals[activity.category] = (categoryTotals[activity.category] || 0) + activity.duration;
        });

        const mostActiveCategory = Object.keys(categoryTotals).reduce((a, b) => 
            categoryTotals[a] > categoryTotals[b] ? a : b, '-'
        );
        
        const categoryDisplayName = mostActiveCategory !== '-' ? 
            this.getCategoryDisplayName(mostActiveCategory) : '-';
        document.getElementById('mostActiveCategory').textContent = categoryDisplayName;

        // Update category chart
        this.updateCategoryChart(categoryTotals);
    }

    updateCategoryChart(categoryTotals) {
        const chartContainer = document.getElementById('categoryChart');
        chartContainer.innerHTML = '';

        if (Object.keys(categoryTotals).length === 0) {
            chartContainer.innerHTML = '<p style="text-align: center; color: #718096; padding: 20px;">No activities recorded today</p>';
            return;
        }

        Object.entries(categoryTotals)
            .sort((a, b) => b[1] - a[1])
            .forEach(([category, minutes]) => {
                const categoryItem = document.createElement('div');
                categoryItem.className = 'category-item';
                
                const hours = Math.floor(minutes / 60);
                const remainingMinutes = minutes % 60;
                const timeDisplay = hours > 0 ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`;

                categoryItem.innerHTML = `
                    <div class="category-color" style="background-color: ${this.categoryColors[category]}"></div>
                    <span class="category-name">${this.getCategoryDisplayName(category)}</span>
                    <span class="category-time">${timeDisplay}</span>
                `;

                chartContainer.appendChild(categoryItem);
            });
    }

    updateHistory() {
        const filter = document.getElementById('historyFilter').value;
        const filteredActivities = this.getFilteredActivities(filter);
        
        const activitiesList = document.getElementById('activitiesList');
        activitiesList.innerHTML = '';

        if (filteredActivities.length === 0) {
            activitiesList.innerHTML = '<p style="text-align: center; color: #718096; padding: 20px;">No activities found for the selected period</p>';
            return;
        }

        filteredActivities
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .forEach(activity => {
                const activityItem = document.createElement('div');
                activityItem.className = 'activity-item';

                const date = new Date(activity.timestamp);
                const timeString = date.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                });
                const dateString = date.toLocaleDateString('en-US');

                activityItem.innerHTML = `
                    <div class="activity-info">
                        <div class="activity-name">${activity.name}</div>
                        <div class="activity-details">
                            ${this.getCategoryDisplayName(activity.category)}
                            ${activity.notes ? ` • ${activity.notes}` : ''}
                        </div>
                    </div>
                    <div class="activity-meta">
                        <div class="activity-duration">${activity.duration} min</div>
                        <div class="activity-time">${timeString} • ${dateString}</div>
                    </div>
                    <button class="delete-activity" onclick="activityMonitor.deleteActivity(${activity.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;

                activitiesList.appendChild(activityItem);
            });
    }

    getFilteredActivities(filter) {
        const now = new Date();
        const today = now.toDateString();

        switch (filter) {
            case 'today':
                return this.activities.filter(activity => activity.date === today);
            
            case 'week':
                const weekStart = new Date(now);
                weekStart.setDate(now.getDate() - now.getDay());
                weekStart.setHours(0, 0, 0, 0);
                return this.activities.filter(activity => 
                    new Date(activity.timestamp) >= weekStart
                );
            
            case 'month':
                const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
                return this.activities.filter(activity => 
                    new Date(activity.timestamp) >= monthStart
                );
            
            case 'all':
            default:
                return this.activities;
        }
    }

    deleteActivity(id) {
        if (confirm('Are you sure you want to delete this activity?')) {
            this.activities = this.activities.filter(activity => activity.id !== id);
            this.saveActivities();
            this.updateDashboard();
            this.updateHistory();
            this.showNotification('Activity deleted successfully', 'success');
        }
    }

    clearHistory() {
        if (confirm('Are you sure you want to clear all activity history? This action cannot be undone.')) {
            this.activities = [];
            this.saveActivities();
            this.updateDashboard();
            this.updateHistory();
            this.showNotification('All activity history cleared', 'success');
        }
    }

    getCategoryDisplayName(category) {
        const categoryNames = {
            health: 'Health & Fitness',
            work: 'Work & Productivity',
            learning: 'Learning & Education',
            personal: 'Personal Care',
            social: 'Social & Family',
            entertainment: 'Entertainment',
            other: 'Other'
        };
        return categoryNames[category] || category;
    }

    loadActivities() {
        try {
            const stored = localStorage.getItem('dailyActivities');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading activities:', error);
            return [];
        }
    }

    saveActivities() {
        try {
            localStorage.setItem('dailyActivities', JSON.stringify(this.activities));
        } catch (error) {
            console.error('Error saving activities:', error);
            this.showNotification('Error saving data', 'error');
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        // Add notification styles if not already present
        if (!document.querySelector('.notification-styles')) {
            const style = document.createElement('style');
            style.className = 'notification-styles';
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 20px;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 300px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    animation: slideInNotification 0.3s ease;
                }
                
                .notification-success {
                    background: #48bb78;
                }
                
                .notification-error {
                    background: #f56565;
                }
                
                .notification-info {
                    background: #667eea;
                }
                
                @keyframes slideInNotification {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Add to page
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInNotification 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Export data functionality
    exportData() {
        const dataStr = JSON.stringify(this.activities, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `daily-activities-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    // Import data functionality
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedActivities = JSON.parse(e.target.result);
                if (Array.isArray(importedActivities)) {
                    this.activities = [...this.activities, ...importedActivities];
                    this.saveActivities();
                    this.updateDashboard();
                    this.updateHistory();
                    this.showNotification('Data imported successfully', 'success');
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                this.showNotification('Error importing data: Invalid file format', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.activityMonitor = new ActivityMonitor();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to submit activity form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab && activeTab.id === 'tracker') {
            document.getElementById('activityForm').dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to clear forms
    if (e.key === 'Escape') {
        document.getElementById('activityForm').reset();
        document.getElementById('timerActivityName').value = '';
        document.getElementById('timerCategory').value = '';
    }
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 