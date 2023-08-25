const modal = document.getElementById("myModal");

function calcularIMC() {
    const form = document.querySelector('.formulario');
    const closeButton = document.getElementsByClassName("close")[0];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura')
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const calculoImc = imc(peso, altura);
        let msg;

        if (!peso) msg = '&#x26A0; <br> Você precisa apresentar um peso válido.'
        if (!altura) msg = '&#x26A0; <br> Você precisa apresentar uma altura válida.';
        if (!peso && !altura) msg = '&#x26A0; <br> Você precisa apresentar valores válidos';
        
        if (peso && altura) {

            if (calculoImc < 18.5) msg = `Seu IMC é de <b>${calculoImc}</b>. <hr> Você está <b>abaixo do peso</b>`;
            if (calculoImc >= 18.5) msg = `Seu IMC é de <b>${calculoImc}</b>. <hr> Você está no <b>peso ideal</b> ao seu corpo`;
            if (calculoImc >= 25) msg = `Seu IMC é de <b>${calculoImc}</b>. <hr> Você está em <b>sobrepeso</b>`;
            if (calculoImc > 30) msg = `Seu IMC é de <b>${calculoImc}</b>. <hr> Você está em <b>obesidade de grau 1</b>`;
            if (calculoImc > 35) msg = `Seu IMC é de <b>${calculoImc}</b>. <hr> Você está em <b>obesidade de grau 2</b>`;
            if (calculoImc > 40) msg = `Seu IMC é de <b>${calculoImc}</b>. <hr> Você está em <b>obesidade de grau 3</b>`;
            
        }

        mostrarModal();
        apresentarResultado(msg);
    });

    function imc (peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(1);
    }


    closeButton.addEventListener("click", () => {
        fecharModal();
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
                fecharModal();  
        }
    });
}
calcularIMC();

function apresentarResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}

function mostrarModal() {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function fecharModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

function formatarAltura(input) {
    // Remove todos os caracteres que não são números
    var numero = input.value.replace(/\D/g, '');

    // Limita o número a três dígitos
    if (numero.length > 3) {
        numero = numero.substring(0, 3);
    }

    // Adiciona um ponto após o terceiro dígito
    if (numero.length >= 3) {
        numero = numero.slice(0, 1) + '.' + numero.slice(1);
    }

    input.value = numero;
}