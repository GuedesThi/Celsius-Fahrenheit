//--------------- CODIGOS PADROES PARA QUANDO ENTRAR NA PÁGINA ---------------//
const valorPadrao1 = document.getElementById('mudar-temperatura-pergunta').innerHTML = `<input type="text" placeholder="Celsius" id="temperatura">`;
const valorPadrao2 = document.getElementById('mudar-temperatura-resposta').innerHTML = `<label class="temperatura-resposta">Fahrenheit</label>`


//--------------- CÁLCULOS  ---------------//
const celsiusParaFahrenheit = (c) => {
    return (9/5 * c) + 32;
};

const fahrenheitParaCelsius = (f) => {
    return (f - 32) * 5/9;
};


//--------------- MUDAR O PLACEHOLDER E O LABEL AO CLICAR NO BOTÃO ---------------//

let isCelsiusToFahrenheit = true;                                                   // MAIS PARA FRENTE DIREI QUE ELE É QUANDO O PLACEHOLDER FOR = CELSIUS

document.getElementById('botao-dois').addEventListener('click', () => {             // SE CLICAR NO BOTÃO DE INVERTER
    const temperatura = document.getElementById('temperatura');                     // PEGA O CÓDIGO DO INPUT
    const placeholderAtual = temperatura.getAttribute('placeholder');               // PEGA O VALOR DO PLACEHOLDER DO CÓDIGO INPUT
    const temperaturaResposta = document.querySelector('.temperatura-resposta');    // PEGA O CÓDIDO DO TÍTULO 'RESPOSTA EM:  '

    if(placeholderAtual === 'Celsius') {                                            // SE O VALOR DO PLACEHOLDER FOR = CELSIUS
        temperatura.setAttribute('placeholder', 'Fahrenheit');                      // TROCAREI O VALOR POR FAHRENHEIT
        temperaturaResposta.textContent = 'Celsius';                                // TROCAREM 'RESPOSTA EM: FAHRENHEIT' POR 'CELSIUS'
        isCelsiusToFahrenheit = false;                                              // E ESSA VARÍAVEL SERÁ CONSIDERADA FALSE (PLACEHOLDER = FAHRENHEIT)
    } else if (placeholderAtual === 'Fahrenheit') {                                 // SE O VALOR DO PLACEHOLDER FOR = FAHRENHEIT
        temperatura.setAttribute('placeholder', 'Celsius');                         // TROCAREI O VALOR POR CELSIUS
        temperaturaResposta.textContent = 'Fahrenheit';                             // TROCAREM 'RESPOSTA EM: CELSIUS' POR 'FAHRENHEIT'
        isCelsiusToFahrenheit = true;                                               // E ESSA VARÍAVEL SERÁ CONSIDERADA TRUE (PLACEHOLDER = CELSIUS)
    }
    
});


//--------------- CONTAS DE ACORCO COM O VALOR DO PLACEHOLDER ---------------//

document.getElementById('botao-enviar').addEventListener('click', () => {
    const temperatura = document.getElementById('temperatura');             // É O CÓDIGO DO INPUT
    const placeholderAtual = temperatura.getAttribute('placeholder');       // CELSIUS OU FAHRENHEIT NO PLACEHOLDER
    const valorTemperatura = parseFloat(temperatura.value);                 // NÚMERO QUE EU COLOQUEI NO INPUT
    let resultado;                                                          // NO FINAL DE TUDO O VALOR DA OPERAÇÃO FICARÁ AQUI

    if(isCelsiusToFahrenheit) {                                             // SE FOR TRUE (PLACEHOLDER = CELSIUS)
        resultado = celsiusParaFahrenheit(valorTemperatura);                // EU PEGO O NÚMERO DO INPUT E RODO NA FUNCTION 1
        resultado = resultado.toFixed(0);                                   // TIRA AS CASAS DECIMAIS      
    } else {                                                                // SE FOR FALSE (PLACEHOLDER = FAHRENHEIT)
        resultado = fahrenheitParaCelsius(valorTemperatura);                // EU PEGO O NÚMERO DO INPUT E RODO NA FUNCTION 2
        resultado = resultado.toFixed(0);                                   // TIRA AS CASAS DECIMAIS
    }

    document.querySelector('.resposta-na-tela').innerHTML = resultado;      // MOSTRO NO CAMPO DA RESPOSTA O VALOR DA OPERÇÃO DA FUNCTION
})
