// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

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

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Gallery lightbox function
function openLightbox(imageName) {
    alert(`Opening lightbox for: ${imageName}\n\nIn a full implementation, this would display a larger version of the image in a modal overlay.`);
}

// WhatsApp Booking Form Handler
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('guest-name').value;
    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;
    const roomType = document.getElementById('room-type').value;
    const guests = document.getElementById('guests').value;
    
    // Validate form
    if (!name || !checkinDate || !checkoutDate || !roomType || !guests) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Check if check-out date is after check-in date
    if (new Date(checkoutDate) <= new Date(checkinDate)) {
        alert('Check-out date must be after check-in date.');
        return;
    }
    
    // Format dates for better readability
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };
    
    // Create WhatsApp message
    const message = `Hello! I would like to make a reservation at Oceanview Grand Hotel.

Guest Details:
• Name: ${name}
• Number of Guests: ${guests}

Reservation Details:
• Check-in: ${formatDate(checkinDate)}
• Check-out: ${formatDate(checkoutDate)}
• Room Type: ${roomType}

Please confirm availability and provide total cost. Thank you!`;
    
    // Hotel's WhatsApp number in international format without '+' for wa.me
    // Provided local number: 0776434646 -> International (Sri Lanka +94): 94776434646
    const whatsappNumberMsisdn = '94776434646';
    
    // Create WhatsApp URL with pre-filled message (wa.me requires no '+')
    const whatsappURL = `https://wa.me/${whatsappNumberMsisdn}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
});

// Set minimum date to today for date inputs
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkin-date').setAttribute('min', today);
document.getElementById('checkout-date').setAttribute('min', today);

// Update checkout minimum date when checkin date changes
document.getElementById('checkin-date').addEventListener('change', function() {
    const checkinDate = this.value;
    const checkoutInput = document.getElementById('checkout-date');
    checkoutInput.setAttribute('min', checkinDate);
    
    // Clear checkout date if it's before the new checkin date
    if (checkoutInput.value && checkoutInput.value <= checkinDate) {
        checkoutInput.value = '';
    }
});

// Add loading animation to booking button
document.getElementById('booking-form').addEventListener('submit', function() {
    const btn = this.querySelector('.whatsapp-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening WhatsApp...';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
    }, 2000);
});

// Removed parallax transform on .hero to prevent background image disappearing

// Room card hover effects
document.querySelectorAll('.room-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Facility card animations
document.querySelectorAll('.facility-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.facility-icon i');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.facility-icon i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Add initial visible class to elements already in view
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Add click-to-call functionality for phone numbers
document.querySelectorAll('.contact-item').forEach(item => {
    const phoneElement = item.querySelector('div');
    if (phoneElement && phoneElement.textContent.includes('+94')) {
        phoneElement.style.cursor = 'pointer';
        phoneElement.addEventListener('click', function() {
            window.location.href = 'tel:+94776434646';
        });
    }
});

// Add email click functionality
document.querySelectorAll('.contact-item').forEach(item => {
    const emailElement = item.querySelector('div');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.addEventListener('click', function() {
            window.location.href = 'mailto:reservations@oceanviewgrand.com';
        });
    }
});