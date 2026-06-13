document.addEventListener('DOMContentLoaded', () => {
    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        });
    }

    // Handle Support Form Submission
    const supportForm = document.getElementById('supportForm');
    if (supportForm) {
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const ticketId = Math.floor(100000 + Math.random() * 900000);
            alert(`Support ticket created! Your Ticket ID is #${ticketId}. We will contact you soon.`);
            supportForm.reset();
        });
    }
});
