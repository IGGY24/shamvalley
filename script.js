// Smooth scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

// Download Itinerary PDF button
document.getElementById('downloadBtn').addEventListener('click', () => {
    // In a real implementation, this would download a PDF
    // For now, we'll show an alert
    alert('Itinerary PDF download will be available soon! In a production site, this would trigger a PDF download.');
    
    // Example: window.open('/path/to/itinerary.pdf', '_blank');
});

// Book Tour button
document.getElementById('bookBtn').addEventListener('click', () => {
    // In a real implementation, this would open a booking form or redirect
    alert('Booking system coming soon! In a production site, this would open a booking form or redirect to a booking page.');
    
    // Example: window.location.href = '/book';
    // Or: openBookingModal();
});

// Notify Me button
document.querySelector('.notify-btn').addEventListener('click', function() {
    const email = prompt('Enter your email to be notified about the Apricot Blossom Season:');
    if (email) {
        // In a real implementation, this would send the email to a backend
        alert(`Thank you! We'll notify you at ${email} when the Apricot Blossom Season approaches.`);
        
        // Example: fetch('/api/notify', { method: 'POST', body: JSON.stringify({ email }) });
    }
});

// Add smooth scroll behavior for anchor links
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

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced petal animation - add more petals dynamically on larger screens
if (window.innerWidth > 768) {
    const blossomContainer = document.querySelector('.blossom-container');
    if (blossomContainer) {
        for (let i = 9; i <= 12; i++) {
            const petal = document.createElement('div');
            petal.className = `petal petal-${i}`;
            petal.style.left = `${(i - 1) * 8}%`;
            petal.style.animationDelay = `${i * 0.5}s`;
            petal.style.animationDuration = `${15 + (i % 5)}s`;
            blossomContainer.appendChild(petal);
        }
    }
}
