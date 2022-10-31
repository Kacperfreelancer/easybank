const menu = [...document.querySelectorAll(".menu")];
const btnMenu = document.querySelector('.navbar__icon')

const handleHamburgerMenu = () => {
    menu.forEach(el => {
        el.classList.toggle('active')
        el.addEventListener('click', handleHamburgerMenu)
    })
}

btnMenu.addEventListener('click', handleHamburgerMenu)