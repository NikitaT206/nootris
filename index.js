const burgerMenuButton = document.querySelector('.header__burger-button')
const burgerMenuButtonClose = document.querySelector('.burger-menu__close-button')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenuButton.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_hidden')
})

burgerMenuButtonClose.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu_hidden')
})