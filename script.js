document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const carouselId = carousel.id;
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        // Función para mostrar el ítem actual
        const showItem = (index) => {
            items.forEach((item, i) => {
                item.style.display = 'none'; // Oculta todos
            });
            if (items[index]) { // Asegurarse de que el índice es válido
                items[index].style.display = 'block'; // Muestra solo el actual
            }
        };

        // Mostrar el primer ítem al cargar
        if (totalItems > 0) {
            showItem(currentIndex);
        }


        // Navegación del carrusel
        const prevButton = document.querySelector(`.prev[data-carousel="${carouselId}"]`);
        const nextButton = document.querySelector(`.next[data-carousel="${carouselId}"]`);

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                showItem(currentIndex);
            });

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalItems;
                showItem(currentIndex);
            });
        }
    });

    // Lógica para el menú de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú si se hace clic en un enlace de navegación
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});s