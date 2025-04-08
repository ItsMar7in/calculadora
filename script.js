// Elemento del display donde se muestran los resultados
let display = document.getElementById('display');

// Variables para almacenar los valores y operador
let currentInput = '';
let operator = '';
let previousInput = '';

// Función para añadir un número o punto
function appendNumber(num) {
    // Prevenir múltiples puntos decimales
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    updateDisplay(); // Actualiza la pantalla
}

// Función para seleccionar operador
function setOperator(op) {
    // Permitir comenzar con número negativo
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay();
        return;
    }
    // Prevenir múltiples operadores sin valor
    if (currentInput === '' || currentInput === '-') return;
    operator = op;
    previousInput = currentInput;
    currentInput = ''; // Limpiar para nueva entrada
}

// Función para calcular el resultado
function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    // Realiza la operación dependiendo del operador
    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = curr !== 0 ? prev / curr : 'Error'; break; // Evita división por cero
        default: return;
    }

    // Mostrar resultado
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

// Función para limpiar todo
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Función para borrar el último carácter
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Función para actualizar la pantalla
function updateDisplay() {
    display.textContent = currentInput || '0';
}
