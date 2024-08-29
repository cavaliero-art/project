document.addEventListener('DOMContentLoaded', () => {
    const animeLink = document.querySelector('.anime-link');

    animeLink.addEventListener('mouseenter', () => {
        animeLink.style.transform = 'scale(1.05)';
        animeLink.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    });

    animeLink.addEventListener('mouseleave', () => {
        animeLink.style.transform = 'scale(1)';
        animeLink.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';
    });

    animeLink.addEventListener('click', () => {
        animeLink.style.transition = 'transform 0.1s ease-out';
        animeLink.style.transform = 'scale(0.95)';
        setTimeout(() => {
            animeLink.style.transform = 'scale(1)';
        }, 100);
    });
});
