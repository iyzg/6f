// Sample events data - replace with your actual events
const events = [
    {
        title: "Puppy Playtime",
        date: "April 20, 2024",
        time: "2:00 PM - 4:00 PM",
        location: "Memory Mall",
        description: "Come pet some adorable puppies to de-stress during finals!"
    },
    // Add more events as needed
];

// Function to create event cards
function createEventCard(event) {
    return `
        <div class="event-card">
            <h3>${event.title}</h3>
            <p class="event-date">${event.date}</p>
            <p class="event-time">${event.time}</p>
            <p class="event-location">${event.location}</p>
            <p class="event-description">${event.description}</p>
        </div>
    `;
}

// Function to populate events
function populateEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    if (events.length === 0) {
        eventsGrid.innerHTML = '<p class="no-events">No events scheduled yet. Check back soon!</p>';
        return;
    }

    eventsGrid.innerHTML = events.map(event => createEventCard(event)).join('');
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize events when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateEvents();

    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}); 