let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');


// visor
let realTimeScreenValue = []

// clean
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// botões
buttons.forEach((btn) => {

    btn.addEventListener("click", () => {
        // exibir valor da tecla
        if (!btn.id.match('erase')) {
            
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // exibir resultado
            if (btn.classList.contains('num_btn')) {
                var resutado = realTimeScreenValue.join('')
                const valor = Function("return " + resutado)();
                answerScreen.innerHTML = valor;
            }

        }

        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            var operacoes = realTimeScreenValue.join('')
            const resultado = Function("return " + operacoes)();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = resultado;
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        var userInput2 = realTimeScreenValue.join('')
        const calcular = Function("return " + userInput2)();
        var resutado = calcular;
        
        if (typeof resutado == 'undefined') {
            answerScreen.innerHTML = 0;
        }

    })
})
