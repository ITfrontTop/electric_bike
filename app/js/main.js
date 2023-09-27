'use strict'

// Swiper sliders:
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
    autoplay: {
        delay: 3000,
    },

})


const equipment = new Swiper ('.equipment__slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


// header event listener
document.querySelector('.menu-list').addEventListener('click', function(e) {
    e.preventDefault()
    console.log(e.target)
    if(e.target.classList.contains('menu-link')) {
        const href = e.target.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
        })
    }
})


// footer event listener
document.querySelector('.footer__content-menu-items').addEventListener('click', function(e) {
    e.preventDefault()
    if(e.target.classList.contains('footer__content-link')) {
        const href = e.target.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
        })
    }
})

// btn menu-more open and close

const menuMoreBtn = document.querySelectorAll('.menu-extra__btn-link')
const closeBtn = document.querySelector('.menu-more__btn-link')

const menuMore = document.querySelector('.menu-more')
const overlay = document.querySelector('.menu-more__overlay')

const openMenuMore = function(e) {
    e.preventDefault()
    // menuMore.classList.remove('hidden')
    overlay.classList.remove('hidden')
    menuMore.classList.add('show')
    
}

const closeMenuMore = function() {
    // menuMore.classList.add('hidden')
    overlay.classList.add('hidden')
    menuMore.classList.remove('show')
    
}

menuMoreBtn.forEach(button => button.addEventListener('click', openMenuMore))

closeBtn.addEventListener('click', closeMenuMore)
overlay.addEventListener('click', closeMenuMore)


// subscription popup
// кнопка, после нажатия которой появляеться popup
const popupLink = document.querySelectorAll('.footer__subscription-btn')
// close btn
const closeBtnPopup = document.querySelector('.popup__close')
// Затемненный фон
const popupBody = document.querySelector('.popup__body')

// Input формы
const inputForm = document.querySelectorAll('.footer__subscription-input')

// Чтобы блокировать скролл нужно body
// const popup = document.querySelector('.popup')

const openPopup = function() {
    popup.classList.add('open')
}

const closePopup = function() {
    popup.classList.remove('open')
}

// Проверка на валидность input
const validateForm = function() {
    for(const input of inputForm) {
        if(input.validity.valid) {
            return true
        } else {
            return false
        }
    }
}

popupLink.forEach(button => button.addEventListener('click', function() {
    if(validateForm()) {
        openPopup()
    } else {
        return
    }
}
))

closeBtnPopup.addEventListener('click', closePopup)
popupBody.addEventListener('click', closePopup)
