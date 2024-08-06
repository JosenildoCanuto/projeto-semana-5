const display = document.querySelector('#display')

let firstValue = '';
let secondValue = '';
let operador = '';

let currentValue = 1

function clicked(button) {
    switch (button) {
        case 'c':
            reset();
            break;
        case '÷':
        case '×':
        case '-':
        case '+':
            if (firstValue !== ''){
                operador = button;
                currentValue = 2;
            }
            break;
        case '.':
            if(currentValue === 1 && firstValue !== '' && !firstValue.includes('.')){
                firstValue += '.';
            }
            if(currentValue === 1 && firstValue !== '' && !firstValue.includes('.')) {
                    secondValue += '.'
            }
        
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (currentValue === 1){
                firstValue += button
            }
            if (currentValue === 2){
                secondValue += button
            }
            break;
        case '=':
            if(currentValue === 2 && secondValue != ''){
                let result = calculate(firstValue, operador, secondValue);
                reset();
                firstValue = result;
            break;
        }

    updateDisplay();
    }
}

function reset(){
    firstValue = '';
    secondValue = '';
    operador = '';
    currentValue = 1;
}

function updateDisplay() {
    if (firstValue === '') {
        display.innerHTML = '0';
    } else {
        display.innerHTML = firstValue + operador + secondValue;
    }
}

function calculate(first, op, second){
    first = parseFloat(first);
    second = parseFloat(second);

    switch (op) {
        case '÷':
            return first / second;
            break;
        case '×':
            return first * second;
            break;
        case '-':
            return first - second;
            break;
        case '+':
            return first + second;
            break
        default:
            return 0;
            break;
    }
}