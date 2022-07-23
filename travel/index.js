console.log('task#1\n Travel-part-1. Вёрстка валидная +10\n -использовался сервис https://validator.w3.org/  итогом проверки была надпись  "Document checking completed. No errors or warnings to show."\n Вёрстка семантическая +18\n -В коде странице присутствуют следующие элементы:\n -<header>, <main>, <footer> +3\n -четыре элемента <section> (по количеству секций) +3\n -только один заголовок <h1> +3\n -три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n -один элемент <nav> (панель навигации) +3\n -два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n Вёрстка соответствует макету +36\n -секция preview +9\n -секция steps +9\n -секция destinations +9\n -секция stories +9\n Требования к css + 10\n -Для построения сетки используются флексы  +2\n -при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n -иконки добавлены в формате .svg.  +2\n -изображения добавлены в формате .jpg +2\n -есть favicon +2\n Интерактивность, реализуемая через css +20\n -плавная прокрутка по якорям +5\n -иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается -добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\n -интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n -обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n Итого 94');

console.log('task#2\n Вёрстка соответствует макету. Ширина экрана 390px +40\n блок <header> +3\n секция preview +7\n секция steps +9\n секция destinations +9\n секция stories +9\n блок <footer> +3\n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n адаптивное меню соответствует макету +4\n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\n при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n Итоговый балл 77');
console.clear();

const burgerOpen = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close')
const mainMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__item a');
const slides = document.querySelectorAll('.destinations__slide');
const popUpLogIn = document.querySelector('.popup-login');
const popUpRegistration = document.querySelector('.popup-creating');
const popUpsWrap = document.querySelectorAll('.popup-wrap');
const logInBtn = document.querySelector('.log-btn');
const btnForRegistarion = document.querySelector('.popup__link-register');
const linkForLogInPopup = document.querySelector('.popup__link-log');
const loginFromPopup = document.querySelector('.popup__email input');
const passwordFromPopUp = document.querySelector('.popup__password input');
const popUpFroms = document.querySelectorAll('.popup form');



burgerOpen.addEventListener('click', function () {
    burgerOpenHandlerClick(mainMenu);
});
burgerClose.addEventListener('click', function () {
    burgerCloseHandlerClick(mainMenu);
});
window.addEventListener('click', function(e){
    clickHandlerOutsidePopUp(e.target, logInBtn, popUpsWrap, closingPopups)
    if(!(e.target.closest('.menu') || e.target.closest('.burger'))){
        burgerCloseHandlerClick(mainMenu);
        return
    }
});
logInBtn.addEventListener('click', function(){
    handlerPopUpLogIn(popUpLogIn, logInBtn)
});
btnForRegistarion.addEventListener('click', function(){
    switchRegistrationPopUp(popUpLogIn, popUpRegistration)
});
linkForLogInPopup.addEventListener('click', function(){
    switchLogInPopUp(popUpRegistration, popUpLogIn)
})
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerCloseHandlerClick(mainMenu);
    })
});
popUpFroms.forEach(form => {
    form.addEventListener('submit', function(e){
        gettingDataFromForm(e, form, submittingDataFromForm)      
    })
}) 

function burgerOpenHandlerClick(menu) {
    menu.classList.add('menu--active');
}
function burgerCloseHandlerClick(menu) {
    menu.classList.remove('menu--active');
}
function handlerPopUpLogIn(popUpLog, logInBtn){
    document.body.classList.add('body--active')
    popUpLog.classList.add('popup-login--active');
    logInBtn.classList.add('log-btn--active')
}
function handlerPopUpRegistration(popUpLog, logInBtn){
    popUpLog.classList.add('popup-creating--active');
    logInBtn.classList.add('log-btn--active')
}
function clickHandlerOutsidePopUp(target, logInBtn, popUpsWrap, closingPopups){
         if(!target.closest('.log-btn') && !target.closest('.popup')){
            closingPopups(popUpsWrap)
        logInBtn.classList.remove('log-btn--active')
    }
}
function closingPopups(popUpsWrap){
    popUpsWrap.forEach(item => {
        item.classList.remove('popup-creating--active');
        item.classList.remove('popup-login--active');
        document.body.classList.remove('body--active')
    })
}
function switchRegistrationPopUp(popUpLogIn, popUpRegistration){
    popUpLogIn.classList.remove('popup-login--active');
    popUpRegistration.classList.add('popup-creating--active')  
}
function switchLogInPopUp(popUpRegistration, popUpLogIn){
    popUpLogIn.classList.add('popup-login--active');
    popUpRegistration.classList.remove('popup-creating--active')  
}
function gettingDataFromForm(e, form, submittingData){
    e.preventDefault()
    let elementsForm = form.elements;
    let data = {
        email: [elementsForm.email.value],
        password: [elementsForm.password.value]
    }
    closingPopups(popUpsWrap)
    submittingData(data)
}
function submittingDataFromForm(data){
    let str = '';
    for(let key in data){
        str += `${key}: ${data[key]}\n` 
    }
    alert(str)
}