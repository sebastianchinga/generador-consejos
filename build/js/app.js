document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    consultarApi();
    // setInterval(() => {
    //     consultarApi();
    // }, 5000);
}

async function consultarApi() {
    const url = 'https://api.adviceslip.com/advice';
    const resultado = await fetch(url);
    const consejo = await resultado.json();
    mostrarConsejo(consejo);
}

function mostrarConsejo(consejo) {
    const id = document.querySelector('.card__span');
    id.textContent = 'Advice #' + consejo.slip.id;

    const consejoContenedor = document.querySelector('.card__consejo');
    consejoContenedor.textContent = consejo.slip.advice
    console.log(consejo.slip.advice);
    
}