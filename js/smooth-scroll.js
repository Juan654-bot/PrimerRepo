// Selecciona todos los enlaces con la clase "smooth-scroll"
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Agrega un evento de clic a cada enlace con la clase "smooth-scroll"
smoothScrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el ID del objetivo del enlace
        const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo
        const offsetTop = targetElement.offsetTop; // Calcula la distancia desde la parte superior del documento
        // Desplaza suavemente hacia el objetivo
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").classList.add("opaque");
  } else {
    document.getElementById("myHeader").classList.remove("opaque");
  }
}

window.addEventListener('scroll', function() {
    var columnLeft = document.querySelector('.column-left');
    var columnCenter = document.querySelector('.column-center');
    var columnRight = document.querySelector('.column-right');

    var positionLeft = columnLeft.getBoundingClientRect().top;
    var positionCenter = columnCenter.getBoundingClientRect().top;
    var positionRight = columnRight.getBoundingClientRect().top;

    var screenHeight = window.innerHeight;

    if (positionLeft < screenHeight) {
        columnLeft.classList.add('visible');
    } else {
        columnLeft.classList.remove('visible');
    }

    if (positionCenter < screenHeight) {
        columnCenter.classList.add('visible');
    } else {
        columnCenter.classList.remove('visible');
    }

    if (positionRight < screenHeight) {
        columnRight.classList.add('visible');
    } else {
        columnRight.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var formContainer = document.querySelector('.form-container');
    var positionForm = formContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (positionForm < screenHeight) {
        formContainer.classList.add('visible');
    } else {
        formContainer.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var imageContainer = document.querySelector('.image-container');
    var positionImage = imageContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (positionImage < screenHeight) {
        imageContainer.classList.add('visible');
    } else {
        imageContainer.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var section3 = document.getElementById('section3');
    var position = section3.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight) {
        section3.classList.add('visible');
    } else {
        section3.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var imageContainer = document.querySelector('#section4 .image-container');
    var positionImage = imageContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (positionImage < screenHeight) {
        imageContainer.classList.add('visible');
    } else {
        imageContainer.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var section4 = document.getElementById('section4');
    var position = section4.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight) {
        section4.classList.add('visible');
    } else {
        section4.classList.remove('visible');
    }
});

// Función para verificar si el footer está visible en la pantalla
function isFooterVisible() {
    var footer = document.querySelector('footer');
    var footerPosition = footer.getBoundingClientRect();

    // Verifica si la parte superior del footer está dentro de la pantalla
    return footerPosition.top < window.innerHeight;
}

var footerShown = false;