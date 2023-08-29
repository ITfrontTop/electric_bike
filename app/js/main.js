const swiper = new Swiper ('.header-slider__swiper', {
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    // enabled: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})

const novelties = new Swiper ('.novelties-slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})


const best_winter = new Swiper ('.best-winter__slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 3000,
    // },

})