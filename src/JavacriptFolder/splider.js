

// SPLIDER FOR GALLERY
const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3,
    breakpoints: {
        640: {
            perPage: 1,

        },
        768: {
            perPage: 2,

        },
        1024: {
            perPage: 2,

        },
        1440: {
            perPage: 3,

        },
    },
    autoScroll: {
        speed: 1,
    },
});


splide.mount(window.splide.Extensions);