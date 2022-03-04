var navbar  = document.getElementById('mobile')
var menubar = document.getElementById('menu')
var sair = document.getElementById('sair')

navbar.addEventListener('click', ShowMenu)
sair.addEventListener('click', SairMenu)

function ShowMenu() {

    if (menubar.style.display == 'block') {
        menubar.style.display = 'none'

    }

    else {
        menubar.style.display = 'block'
    }
    
}

function SairMenu() {
    menubar.style.display = 'none'

}

