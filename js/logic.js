let currentInput = "";
let operator = null;
let operand1 = null;
let operand2 = null;

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            screen.innerText = currentInput;
        }

        if (['+', '-', '×', '÷'].includes(value)) {
            operator = value;
            operand1 = currentInput;
            currentInput = "";
        }

        if (value === 'c') {
            currentInput = "";
            operator = null;
            operand1 = null;
            operand2 = null;
            screen.innerText = "0";
        }

        if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            screen.innerText = currentInput;
        }

        if (value === '=') {
            operand2 = currentInput;
            let result;

            switch (operator) {
                case '+':
                    result = parseFloat(operand1) + parseFloat(operand2);
                    break;
                case '-':
                    result = parseFloat(operand1) - parseFloat(operand2);
                    break;
                case '×':
                    result = parseFloat(operand1) * parseFloat(operand2);
                    break;
                case '÷':
                    result = parseFloat(operand1) / parseFloat(operand2);
                    break;
                default:
                    return;
            }

            screen.innerText = result.toString();
            currentInput = result.toString();
            operator = null;
            operand1 = null;
            operand2 = null;
        }
    });
});
