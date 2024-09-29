document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navIcons = document.querySelectorAll('.nav-icons i');
    const showProductDetails = () => showSection('product-details');
    const showCheckout = () => showSection('checkout');
    const showConfirmation = () => showSection('confirmation');

    // Function to show a section
    function showSection(id) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === id);
            section.classList.toggle('hidden', section.id !== id);
        });
    }

    // Set up event listeners for navigation icons
    navIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const iconClass = icon.classList[1];
            if (iconClass === 'fa-home') {
                showSection('homepage');
            } else if (iconClass === 'fa-user') {
                // Handle user icon click (e.g., profile page)
            } else if (iconClass === 'fa-shopping-cart') {
                showSection('product-details');
            } else if (iconClass === 'fa-bars') {
                // Handle menu icon click (e.g., mobile menu)
            }
        });
    });

    // Bind buttons to actions
    const shopNowButton = document.querySelector('.btn-primary');
    const proceedToCheckoutButton = document.querySelector('#product-details .btn-primary');
    const placeOrderButton = document.querySelector('#checkout .btn-primary');

    if (shopNowButton) {
        shopNowButton.addEventListener('click', showProductDetails);
    }

    if (proceedToCheckoutButton) {
        proceedToCheckoutButton.addEventListener('click', showCheckout);
    }

    if (placeOrderButton) {
        placeOrderButton.addEventListener('click', showConfirmation);
    }
});
