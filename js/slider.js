function iniciarGaleria(idContenedor) {
    const container = document.getElementById(idContenedor);
    
    if (!container) {
        console.warn(`No se encontró el contenedor: ${idContenedor}`);
        return;
    }

    const slides = container.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    let currentSlide = 0;

    if (slides.length > 0) {
        slides.forEach(s => s.classList.remove('active'));
        slides[0].classList.add('active');
    }

    function showSlide(i) {
        slides.forEach(s => s.classList.remove('active'));
        if (slides[i]) {
            slides[i].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

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

    setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarGaleria('gallery-1'); 
    iniciarGaleria('gallery-2'); 
    iniciarGaleria('gallery-3'); 
});

document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});