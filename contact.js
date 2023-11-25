document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', event => {
        event.preventDefault(); 

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        alert('Thank you! Your message has been submitted.');
        contactForm.reset(); 
    });
});
