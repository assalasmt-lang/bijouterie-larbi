// Interactivité pour Bijouterie Larbi
document.addEventListener('DOMContentLoaded', () => {
    console.log('Bijouterie Larbi Website initialized successfully.');

    // Sticky Header animation on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.8)';
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Smooth reveal animation for service cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
