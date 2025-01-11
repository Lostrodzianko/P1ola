// script.js
const sections = document.querySelectorAll('.seccion');
const options = {
    root: null, // Usar el viewport como raíz
    rootMargin: '0px',
    threshold: 0.5 // Cambia a 0.5 para que se active cuando el 50% de la sección esté visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si la sección está visible, ancla la vista
            entry.target.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Ancla al inicio de la sección
            });
        }
    });
}, options);

// Observa cada sección
sections.forEach(section => {
    observer.observe(section);
});