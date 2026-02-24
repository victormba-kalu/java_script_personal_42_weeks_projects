const calculateBtn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const serviceSelect = document.getElementById("service");
const resultDisplay = document.getElementById("result");

function calculateTip() {
    const billValue = parseFloat(billInput.value);
    const tipPercentage = parseFloat(serviceSelect.value);

    if (isNaN(billValue) || billValue <= 0) {
        alert("Please enter a valid bill amount!");
        return;
    }

    const total = billValue + (billValue * tipPercentage);

    resultDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

calculateBtn.addEventListener('click', calculateTip);