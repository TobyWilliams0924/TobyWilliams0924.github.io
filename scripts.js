document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
