document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");

            const targetId = link.getAttribute("href").split('.')[0].replace('.html', '');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        });
    });
});
