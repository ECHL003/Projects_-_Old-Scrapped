document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.getElementById('heroButton');
    const contactForm = document.getElementById('contactForm');

    heroButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form Submitted!');
        contactForm.reset();
    });
});
