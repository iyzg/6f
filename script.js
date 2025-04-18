// Sample events data - replace with your actual events
const events = [
    {
        title: "Scavenger Hunt",
        date: "April 24, 2025",
        time: "5:00PM - 6:30PM",
        location: "Memory Mall",
        description: "Bring friends and compete to find ducks all across campus.",
        rsvpLink: "https://forms.gle/example" // Add your RSVP form link here
    },
    {
        title: "This could be your event here?!",
        date: "??",
        time: "??",
        location: "??",
        description: "Have a fun idea to make finals week more enjoyable? Apply for funding and make it happen!",
        rsvpLink: null
    }
];

// Function to create event cards
function createEventCard(event) {
    return `
        <div class="event-card">
            <div class="event-header">
                <h3 class="event-title">${event.title}</h3>
                ${event.rsvpLink ? `<a href="${event.rsvpLink}" class="rsvp-button" target="_blank">RSVP</a>` : ''}
            </div>
            <div class="event-details">
                <div class="event-meta">
                    <div class="meta-item">
                        <i class="far fa-calendar" style="color: var(--primary-color)"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="meta-item">
                        <i class="far fa-clock" style="color: var(--primary-color)"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-map-marker-alt" style="color: var(--primary-color)"></i>
                        <span>${event.location}</span>
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
            </div>
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