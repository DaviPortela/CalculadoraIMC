function calcularIMC() {

    const form = document.querySelector('.formulario');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('clicou');
    });

    

}
calcularIMC();
