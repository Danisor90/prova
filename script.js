// Gestione del saldo
let currentBalance = 0.00;
const balanceDisplay = document.getElementById('balance');
const btnBoost = document.getElementById('btn-boost');
const btnDeduct = document.getElementById('btn-deduct');

function updateDisplay() {
    balanceDisplay.innerText = `€ ${currentBalance.toFixed(2)}`;
}

btnBoost.addEventListener('click', () => {
    currentBalance += 10.00;
    updateDisplay();
});

btnDeduct.addEventListener('click', () => {
    if(currentBalance >= 10) {
        currentBalance -= 10.00;
        updateDisplay();
    }
});
