// Add SEO tracking for corporate vehicle services interaction
document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    
    // Track the form submission with the keyword for analytics
    if (typeof gtag === 'function') {
        gtag('event', 'form_submission', {
            'event_category': 'corporate_vehicle_services',
            'event_label': 'contact_form',
            'value': 1
        });
    }

    const response = await fetch(form.action, {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            newsletter: formData.get('newsletter') ? 'yes' : 'no',
            source: formData.get('source')
        }),
    });

    if (response.ok) {
        alert('Thank you for your interest in our corporate vehicle services! Your message has been sent.');
        form.reset(); // Clear the form
    } else {
        alert('Failed to send the message. Please try again later.');
    }
});

// Ensure the JavaScript does not interfere with layout adjustments on mobile
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
    
    // Add keyword to page titles for better SEO
    document.title = document.title || 'FRS Dealer Solutions | Corporate Vehicle Services';
});
