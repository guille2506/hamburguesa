const iconoMenu =document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './logotipo/pngwing.com.png"') {
        e.target.setAttribute('src', './logotipo/pngwing.com.png');
    }
})

// por si esta pija se rompe