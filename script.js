document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }),
    });

    if (response.ok) {
        alert('Thank you! Your message has been sent.');
        form.reset(); // Clear the form
    } else {
        alert('Failed to send the message. Please try again later.');
    }
});
