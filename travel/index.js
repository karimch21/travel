console.log('task#1\n Travel-part-1. Вёрстка валидная +10\n -использовался сервис https://validator.w3.org/  итогом проверки была надпись  "Document checking completed. No errors or warnings to show."\n Вёрстка семантическая +18\n -В коде странице присутствуют следующие элементы:\n -<header>, <main>, <footer> +3\n -четыре элемента <section> (по количеству секций) +3\n -только один заголовок <h1> +3\n -три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n -один элемент <nav> (панель навигации) +3\n -два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n Вёрстка соответствует макету +36\n -секция preview +9\n -секция steps +9\n -секция destinations +9\n -секция stories +9\n Требования к css + 10\n -Для построения сетки используются флексы  +2\n -при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n -иконки добавлены в формате .svg.  +2\n -изображения добавлены в формате .jpg +2\n -есть favicon +2\n Интерактивность, реализуемая через css +20\n -плавная прокрутка по якорям +5\n -иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается -добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\n -интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n -обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n Итого 94');

console.log('task#2\n Вёрстка соответствует макету. Ширина экрана 390px +40\n блок <header> +3\n секция preview +7\n секция steps +9\n секция destinations +9\n секция stories +9\n блок <footer> +3\n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n адаптивное меню соответствует макету +4\n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме AcdestinationsSldierCount, она пока что просто закрывает меню)\n при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n Итоговый балл 77');
console.clear();

console.log('Task #3\n На десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20\n Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20 \n Анимации плавного перемещения для слайдера +10 \n 2. Логин попап соответствует верстке его закрытие происходит при клике вне попапа +25 \n Логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25 \n 3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25 \n Итого: 125')

const burgerOpen = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close')
const mainMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__item a');
const popUpLogIn = document.querySelector('.popup-login');
const popUpsWrap = document.querySelectorAll('.popup-wrap');
const logInBtn = document.querySelector('.log-btn');
const btnForRegistarion = document.querySelector('.popup__account a');
const loginFromPopup = document.querySelector('.popup__email input');
const passwordFromPopUp = document.querySelector('.popup__password input');
const popUpFroms = document.querySelectorAll('.popup form');
const slider = document.querySelector('.destinations__slides');
const slides = document.querySelectorAll('.destinations__slide');
const sliderDots = document.querySelectorAll('.dot');
const sliderArrowPrev = document.querySelector('.arrows__left');
const sliderArrownext = document.querySelector('.arrows__right');

let destinationsTranslatexSlider = -540;
let destinationsActiveSlide = document.querySelector('.slide--active');
let destinationsSldierCount = 0;
let destinationsSldierPosition = 0;

sliderArrowPrev.addEventListener('click', function (e) {
    e.preventDefault()
    moveToPreviousSlide();
});
sliderArrownext.addEventListener('click', function (e) {
    e.preventDefault()
    moveToNextSlide();
});
burgerOpen.addEventListener('click', function () {
    burgerOpenHandlerClick(mainMenu);
});
burgerClose.addEventListener('click', function () {
    burgerCloseHandlerClick(mainMenu);
});
logInBtn.addEventListener('click', function () {
    handlerPopUpLogIn(popUpLogIn, logInBtn)
});
btnForRegistarion.addEventListener('click', function () {
    if (btnForRegistarion.classList.contains('popup__link-register')) {
        switchRegistrationPopUp(popUpLogIn)
        return
    }

    if (btnForRegistarion.classList.contains('popup__link-log')) {
        switchLogInPopUp(popUpLogIn)
        return
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerCloseHandlerClick(mainMenu);
    })
});
popUpFroms.forEach(form => {
    form.addEventListener('submit', function (e) {
        gettingDataFromForm(e, form, submittingDataFromForm)
    })
});
window.addEventListener('resize', () => {
    mediaSlider()
});
window.addEventListener('click', function (e) {
    clickHandlerOutsidePopUp(e.target, logInBtn, popUpsWrap, closingPopups);
    if (!(e.target.closest('.menu') || e.target.closest('.burger'))) {
        burgerCloseHandlerClick(mainMenu);
        return
    }
});
window.addEventListener('load', () => {
    initialHandlerClickSlide(slides, handlerClickSlide)
    mediaSlider()
});

//start slider
function initialHandlerClickSlide(slides, handlerClickSlide) {
    slides.forEach((slide, index) => {
        slide.dataset.index = index;
        if (document.documentElement.clientWidth >= 1430) {
            slide.addEventListener('click', handlerClickSlide);
        }
    });
}
function handlerClickSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide--active')
        sliderDots[i].classList.remove('dot--active');
    }
    let index = +this.getAttribute('data-index');
    sliderDots[index].classList.add('dot--active');
    this.classList.add('slide--active');
    movingSlide(this);
}
function movingSlide(slide) {
    let indexSlide = slide.getAttribute('data-index');
    let prevdestinationsActiveSlide = destinationsActiveSlide.getAttribute('data-index');

    if (+indexSlide > +prevdestinationsActiveSlide) {
        destinationsTranslatexSlider -= 540;
        slider.style.transform = `translateX(${destinationsTranslatexSlider}px)`
    }
    if (+indexSlide < +prevdestinationsActiveSlide) {
        destinationsTranslatexSlider += 540;
        slider.style.transform = `translateX(${destinationsTranslatexSlider}px)`
    }
    destinationsActiveSlide = slide;
}
function mediaSlider() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide--active')
        sliderDots[i].classList.remove('dot--active');
    }
    if (document.documentElement.clientWidth <= 1430) {
        slides.forEach(slide => {
            slide.removeEventListener('click', handlerClickSlide)
        })
        slides[0].classList.add('slide--active');
        slider.style.transform = `translatex(0)`
        destinationsActiveSlide = slides[0];
        sliderDots[+destinationsActiveSlide.getAttribute('data-index')].classList.add('dot--active');
        return
    }
    if (document.documentElement.clientWidth >= 1430) {
        slides[Math.floor(slides.length / 2)].classList.add('slide--active');
        slider.style.transform = `translatex(-540px)`
        destinationsActiveSlide = slides[Math.floor(slides.length / 2)];
        sliderDots[+destinationsActiveSlide.getAttribute('data-index')].classList.add('dot--active');
        initialHandlerClickSlide(slides, handlerClickSlide)
    }
}
function stylingElementsSlider() {
    sliderArrownext.classList.remove('arrow--noScroll');
    slides.forEach((slide, index) => {
        slide.classList.remove('slide--active')
        sliderDots[index].classList.remove('dot--active')
    });
    slides[destinationsSldierCount].classList.add('slide--active');
    sliderDots[destinationsSldierCount].classList.add('dot--active');
}
function moveToPreviousSlide() {
    if (destinationsSldierCount > 0) {
        sliderArrownext.classList.remove('arrow--noScroll');
        destinationsSldierCount--;
        stylingElementsSlider()
        destinationsSldierPosition += (slides[0].clientWidth + 10);
        slider.style.transform = `translateX(${destinationsSldierPosition}px)`
        if (destinationsSldierCount == 0) {
            sliderArrowPrev.classList.add('arrow--noScroll');
        }
        return
    }
}
function moveToNextSlide() {
    if (destinationsSldierCount < slides.length - 1) {
        sliderArrowPrev.classList.remove('arrow--noScroll');
        destinationsSldierCount++;
        stylingElementsSlider()
        destinationsSldierPosition -= slides[0].clientWidth + 10;
        slider.style.transform = `translateX(${destinationsSldierPosition}px)`
        if (destinationsSldierCount == slides.length - 1) {
            sliderArrownext.classList.add('arrow--noScroll');
        }
        return
    }
}
// end slider

function burgerOpenHandlerClick(menu) {
    menu.classList.add('menu--active');
}
function burgerCloseHandlerClick(menu) {
    menu.classList.remove('menu--active');
}
function handlerPopUpLogIn(popUpLog, logInBtn) {
    document.body.classList.add('body--active')
    popUpLog.classList.add('popup-login--active');
    logInBtn.classList.add('log-btn--active')
}
function gettingElementsFromPopUp() {
    let popUpTitle = document.querySelector('.popup__title');
    let popUpSignBtns = document.querySelector('.popup__bts');
    let decorLinePopUp = document.querySelector('.popup__line');
    let btnSubmit = document.querySelector('.popup__btn-submit');
    let popupRecovery = document.querySelector('.popup__recovery');
    let popUpForm = document.querySelector('.popup__form form');
    let popupAccount = document.querySelector('.popup__account span');

    let obj = {
        popUpTitle: popUpTitle,
        popUpSignBtns: popUpSignBtns,
        decorLinePopUp: decorLinePopUp,
        btnSubmit: btnSubmit,
        popupRecovery: popupRecovery,
        popUpForm: popUpForm,
        popupAccount: popupAccount
    }
    return obj
}
function clickHandlerOutsidePopUp(target, logInBtn, popUpsWrap, closingPopups) {
    if (!target.closest('.log-btn') && !target.closest('.popup')) {
        closingPopups(popUpsWrap)
        logInBtn.classList.remove('log-btn--active')
    }
}
function closingPopups(popUpsWrap) {
    switchLogInPopUp(popUpLogIn)
    popUpsWrap.forEach(item => {
        item.classList.remove('popup-creating--active');
        item.classList.remove('popup-login--active');
        document.body.classList.remove('body--active')
    })
}
function switchRegistrationPopUp(popUpLogIn) {
    popUpLogIn.classList.remove('popup-login--active');
    popUpLogIn.classList.remove('popup-login');
    popUpLogIn.classList.add('popup-creating');
    popUpLogIn.classList.add('popup-creating--active');

    let elementsFromPopUp = gettingElementsFromPopUp();

    elementsFromPopUp.popUpTitle.textContent = 'Create account';
    elementsFromPopUp.btnSubmit.textContent = 'Sign Up';
    btnForRegistarion.textContent = 'Log in';
    elementsFromPopUp.popupAccount.textContent = 'Already have an account?';
    btnForRegistarion.className = 'popup__link-log';
    elementsFromPopUp.popUpForm.name = 'popup__registration';
    elementsFromPopUp.popUpSignBtns.style.display = 'none';
    elementsFromPopUp.decorLinePopUp.style.display = 'none';
    elementsFromPopUp.popupRecovery.style.display = 'none';
    return
}
function switchLogInPopUp(popUpLogIn) {
    popUpLogIn.classList.add('popup-login--active');
    popUpLogIn.classList.add('popup-login');
    popUpLogIn.classList.remove('popup-creating');
    popUpLogIn.classList.remove('popup-creating--active');

    let elementsFromPopUp = gettingElementsFromPopUp();

    elementsFromPopUp.popUpTitle.textContent = 'Log in to your account';
    elementsFromPopUp.btnSubmit.textContent = 'Sign In';
    btnForRegistarion.textContent = 'Register';
    elementsFromPopUp.popupAccount.textContent = 'Don’t have an account?'
    btnForRegistarion.className = 'popup__link-register';
    elementsFromPopUp.popUpForm.name = 'popup-login';
    elementsFromPopUp.popUpSignBtns.style.display = 'block';
    elementsFromPopUp.decorLinePopUp.style.display = 'block';
    elementsFromPopUp.popupRecovery.style.display = 'block';
    return
}
function gettingDataFromForm(e, form, submittingData) {
    e.preventDefault()

    let elementsForm = form.elements;
    let data = {
        email: [elementsForm.email.value],
        password: [elementsForm.password.value]
    }
    closingPopups(popUpsWrap)
    submittingData(data)
    for (let inp in elementsForm) {
        let el = elementsForm[inp];
        if (el.tagName == 'INPUT') {
            el.value = ''
        }
    }
}
function submittingDataFromForm(data) {
   
    let str = '';
    for (let key in data) {
        str += `${key}: ${data[key]}\n`
    }
    alert(str)
}
