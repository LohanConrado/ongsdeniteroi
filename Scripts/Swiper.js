var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,    // Exibe 3 slides por vez em telas maiores
    spaceBetween: 50,    // Espaço entre os slides
    // slidesPerGroup: auto,   // Move 3 slides de uma vez
    loop: true,          // Slider em loop
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {       // Configurações responsivas
        100: {           // Em telas pequenas (até 320px)
            slidesPerView: 1,  // Exibe 1 slide por vez
            slidesPerGroup: 1, // Quantidade de slides movidos
        },
        975: {           // Em telas de 640px ou mais
            slidesPerView: 2,  // Exibe 2 slides por vez
            spaceBetween: 30,  // Espaçamento entre os slides
            slidesPerGroup: 2, // Quantidade de slides movidos
        },
        1455: {          // Em telas de 1024px ou mais
            slidesPerView: 3,  // Exibe 3 slides por vez
            spaceBetween: 50,  // Espaçamento maior
            slidesPerGroup: 3, // Quantidade de slides movidos
        },
    },
});
