'use strict'

// Swiper sliders:
const swiper = new Swiper('.header-slider__swiper', {
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

const novelties = new Swiper('.novelties-slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        720: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
})


const best_winter = new Swiper('.best-winter__slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        720: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1340: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 3000,
    },

})


const equipment = new Swiper('.equipment__slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        720: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
})


// header event listener
document.querySelector('.menu-list').addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e.target)
    if (e.target.classList.contains('menu-link')) {
        const href = e.target.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
        })
    }
})


// footer event listener
document.querySelector('.footer__content-menu-items').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('footer__content-link')) {
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

const openMenuMore = function (e) {
    e.preventDefault()
    // menuMore.classList.remove('hidden')
    overlay.classList.remove('hidden')
    menuMore.classList.add('show')

}

const closeMenuMore = function () {
    // menuMore.classList.add('hidden')
    overlay.classList.add('hidden')
    menuMore.classList.remove('show')

}

menuMoreBtn.forEach(button => button.addEventListener('click', openMenuMore))

closeBtn.addEventListener('click', closeMenuMore)
overlay.addEventListener('click', closeMenuMore)







// // main menu
// // new code
const boxes = Array.from(document.querySelectorAll('.menu-main__item-link'))


boxes.forEach(box => {
    box.addEventListener('click', boxHandler)
})

function boxHandler(e) {
    e.preventDefault()
    let currentBox = e.target.closest('.menu-main__item-link')
    let currentContent = e.target.nextElementSibling
    currentBox.classList.toggle('active')

    if (currentBox.classList.contains('active')) {
        // Чтобы box раскрывался плавно
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
    } else {
        currentContent.style.maxHeight = 0
    }
}






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

const openPopup = function () {
    popup.classList.add('open')
}

const closePopup = function () {
    popup.classList.remove('open')
}

// Проверка на валидность input
const validateForm = function () {
    for (const input of inputForm) {
        if (input.validity.valid) {
            return true
        } else {
            return false
        }
    }
}

popupLink.forEach(button => button.addEventListener('click', function () {
    if (validateForm()) {
        openPopup()
    } else {
        return
    }
}
))

closeBtnPopup.addEventListener('click', closePopup)
popupBody.addEventListener('click', closePopup)



// кнопка - показать ещё
// находим кнопку
const showMoreCategory = document.querySelector('.show-more-category')


// находим все пункты
const productsLengthCategory = document.querySelectorAll('.category__item-label').length

// количество начальное количество пунктов
let itemsCategory = 5


showMoreCategory.addEventListener('click', () => {
    // добавляем количество пунктов
    itemsCategory += 5

    // найти все элементы
    const arrayCategory = Array.from(document.querySelector('.category__item').children)

    // элементы которые нужно видеть
    const visItemsCategory = arrayCategory.slice(0, itemsCategory)

    // делаем чтобы видеть елементы
    visItemsCategory.forEach(el => el.classList.add('is-visible'))

    // удаляем кнопку когда елеметы заканчиваються
    if (visItemsCategory.length === productsLengthCategory) {
        showMoreCategory.style.display = 'none'
    }

})


const showMoreBrand = document.querySelector('.show-more-brand')
const productsLengthBrand = document.querySelectorAll('.brand-aside__item-label').length
let itemsBrand = 5


showMoreBrand.addEventListener('click', () => {
    itemsBrand += 5

    const arrayBrand = Array.from(document.querySelector('.brand-aside__item').children)

    const visItemsBrand = arrayBrand.slice(0, itemsBrand)

    visItemsBrand.forEach(el => el.classList.add('is-visible'))

    if (visItemsBrand.length === productsLengthBrand) {
        showMoreBrand.style.display = 'none'
    }
})


// цены которые меняються ползунками
const rangeInput = document.querySelectorAll('.range-input input'),
priceInput = document.querySelectorAll('.field input'),
progress = document.querySelector('.slider .progress')

let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener('input', e => {
        // получаем значения от двох ползунков и преобразуем в цифры
        let minVal = parseInt(priceInput[0].value),
            maxVal = parseInt(priceInput[1].value)

        if ((maxVal - minVal >= priceGap) && maxVal <= 1500000) {
            if(e.target.className === 'input-min') {
                rangeInput[0].value = minVal
                progress.style.left = (minVal / rangeInput[0].max) * 100 + '%'
            } else {
                rangeInput[1].value = maxVal
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
            }
        }
    })
})

rangeInput.forEach(input => {
    input.addEventListener('input', e => {
        // получаем значения от двох ползунков и преобразуем в цифры
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value)

        if (maxVal - minVal < priceGap) {
            if(e.target.className === 'range-min') {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap 
            }
        } else {
            // чтобы линия двигалась за ползунками
            priceInput[0].value = minVal
            priceInput[1].value = maxVal
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%'
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
        }
    })
})



// скрытие фильтров на shop-aside
const headerShopAside = document.querySelectorAll('[data-name="accordeon-title"]')

headerShopAside.forEach(item => {
    item.addEventListener('click', showShopAside)
})

function showShopAside() {
    this.nextElementSibling.classList.toggle('hidden')
    this.classList.toggle('active')
}


// пагинация  shop content
let thisPage = 1
let limit = 12
let list = document.querySelectorAll('.shop-content__item')
const shopPageNumber = document.querySelector('.shop-content__number-inner');

// количество товаров, и сколько нужно показывать
function loadItem () {
    let beginGet = limit * (thisPage - 1)
    let endGet = limit * thisPage - 1
    list.forEach((item, key) => {
        if(key >= beginGet && key <= endGet) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
    listPage()
}

loadItem()

function listPage() {
    let count = Math.ceil(list.length / limit)
    document.querySelector('.shop-content__number-inner').innerHTML = ''

    // добавления кнопки prev
    if(thisPage != 1) {
        let prev = document.createElement('div')
        // prev.innerText = 'PREV'
        prev.classList.add('shop-content__arrow-prev')
        prev.setAttribute('onclick', "changePage("+ (thisPage - 1) +")")
        document.querySelector('.shop-content__number-inner').appendChild(prev)
    }

    // добавление кнопок
    for(let i = 1; i <= count; i++) {
        let newPage = document.createElement('div')
        newPage.classList.add('shop-content__number')
        newPage.innerText = i
        // console.log(newPage)
        if(i === thisPage) {
            newPage.classList.add('pagination-active')
        }
        newPage.setAttribute('onclick', "changePage("+ i +")")
        document.querySelector('.shop-content__number-inner').appendChild(newPage)
    }

    if(thisPage != count) {
        let next = document.createElement('div')
        // next.innerText = 'NEXT'
        next.classList.add('shop-content__arrow-next')
        next.setAttribute('onclick', "changePage("+ (thisPage + 1) +")")
        document.querySelector('.shop-content__number-inner').appendChild(next)
    }
}

function changePage(i) {
    thisPage = i;
    loadItem()
}
// при нажатие на сторинку скролит вверх страницы
shopPageNumber.addEventListener('click', function() {
    window.scrollTo(0, 0)
})





// переключения размеров карточки товаров
const shopView3 = document.querySelector('.shop-content__view-img-3')
const shopView2 = document.querySelector('.shop-content__view-img-2')
const shopContentItem = document.querySelectorAll('.shop-content__item')


shopView2.addEventListener('click', function() {
    shopView3.classList.remove('active')
    shopView2.classList.add('active')
    shopContentItem.forEach(item => {
        item.classList.add('shop-content__item-view2')
        limit = 8
        loadItem()
    })
})

shopView3.addEventListener('click', function() {
    shopView2.classList.remove('active')
    shopView3.classList.add('active')
    shopContentItem.forEach(item => {
        item.classList.remove('shop-content__item-view2')
        limit = 12
        loadItem()
    })
})

// кнопка scroll to top
const scrollBtn = document.querySelector('.scroll-top-btn')

window.onscroll = () => {
    if(window.scrollY > 300) {
        scrollBtn.classList.remove('scroll-top-btn__hide')
    } else if(window.scrollY < 300) {
        scrollBtn.classList.add('scroll-top-btn__hide')
    }
}

scrollBtn.onclick = () => {
    window.scrollTo(0, 0)
}


// select
