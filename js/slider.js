function iniciarGaleria(idContenedor) {
    const container = document.getElementById(idContenedor);
    
    // Si no encuentra el contenedor, salimos para evitar errores
    if (!container) {
        console.warn(`No se encontró el contenedor: ${idContenedor}`);
        return;
    }

    const slides = container.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    let currentSlide = 0;

    // 1. Asegurar que al menos la primera imagen esté visible al cargar
    if (slides.length > 0) {
        // Quitamos active de todas por seguridad y lo ponemos en la primera
        slides.forEach(s => s.classList.remove('active'));
        slides[0].classList.add('active');
    }

    function showSlide(i) {
        // Remover clase active de todas
        slides.forEach(s => s.classList.remove('active'));
        // Agregar clase active solo a la actual
        if (slides[i]) {
            slides[i].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        // Lógica para retroceder en bucle
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event Listeners (Solo si existen los botones)
    if(nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            nextSlide();
        });
    }
    
    if(prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });
    }

    // Autoplay cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    iniciarGaleria('gallery-1'); 
    iniciarGaleria('gallery-2'); 
    iniciarGaleria('gallery-3'); 
});