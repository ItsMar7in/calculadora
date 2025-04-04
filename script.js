let displayValue = "";
const display = document.getElementById("display");
const appendToDisplay = (value) => {
    if (displayValue === "0") displayValue = "";
    displayValue += value;
    display.textContent = displayValue;
};
const clearDisplay = () => {
    displayValue = "";
    display.textContent = "0";
};
const calculate = () => {
    try {
        displayValue = eval(displayValue).toString();
        display.textContent = displayValue;
    } catch {
        display.textContent = "Error";
        displayValue = "";
    }
};
function deleteLast() {
    let display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}