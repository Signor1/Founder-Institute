// SPLIDER FOR GALLERY
const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 8,
    breakpoints: {
        640: {
            perPage: 2,

        },
        768: {
            perPage: 4,

        },
        1024: {
            perPage: 5,

        },
        1440: {
            perPage: 8,

        },
    },
    autoScroll: {
        speed: 6,
    },
});


splide.mount(window.splide.Extensions);