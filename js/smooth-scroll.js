// Selecciona todos los enlaces con la clase "smooth-scroll"
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Agrega un evento de clic a cada enlace con la clase "smooth-scroll"
smoothScrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el ID del objetivo del enlace
        const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo
        const offsetTop = targetElement.offsetTop; // Calcula la distancia desde la parte superior del documento
        // Desplaza suavemente hacia el objetivo
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
