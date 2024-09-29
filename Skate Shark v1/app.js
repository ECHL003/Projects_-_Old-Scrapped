// JavaScript to toggle between different sections of the page with smooth transitions

function showProductDetails() {
    hideAllSections();
    document.getElementById("product-details").classList.add("active");
}

function showCheckout() {
    hideAllSections();
    document.getElementById("checkout").classList.add("active");
}

function showConfirmation() {
    hideAllSections();
    document.getElementById("confirmation").classList.add("active");
}

function hideAllSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active");
    });
}

// Initial setup to show homepage
document.getElementById("homepage").classList.add("active");