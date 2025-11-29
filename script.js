document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Upside Down');

    // Simple scroll effect for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(231, 29, 54, 0.2)';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)';
            header.style.boxShadow = 'none';
        }
    });

    // Add particle effects or other dynamic elements here later
});
