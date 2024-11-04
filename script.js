function updateTipCalculator() {
    const billTotalInput = document.getElementById("billTotal");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipAmountOutput = document.getElementById("tipAmount");
    const totalWithTipOutput = document.getElementById("totalWithTip");
    const currencySelect = document.getElementById("currency");
    const convertedTotalOutput = document.getElementById("convertedTotal");
    
    let billTotal = parseFloat(billTotalInput.value);
    let tipPercentage = parseInt(tipPercentageInput.value);
    let currencyRate = parseFloat(currencySelect.value);

    if (isNaN(billTotal) || billTotal <= 0) {
        alert("Please enter a valid bill amount.");
        billTotalInput.value = ""; 
        return;
    }

    let tipAmount = (billTotal * tipPercentage) / 100;
    let totalWithTip = billTotal + tipAmount;

    tipAmountOutput.value = tipAmount.toFixed(2);
    totalWithTipOutput.value = totalWithTip.toFixed(2);

    let convertedTotal = totalWithTip * currencyRate;
    convertedTotalOutput.value = convertedTotal.toFixed(2);
}

document.getElementById("billTotal").addEventListener("input", updateTipCalculator);
document.getElementById("tipPercentage").addEventListener("input", function(event) {
    document.getElementById("tipPercentageDisplay").value = event.target.value + "%";
    updateTipCalculator();
});
document.getElementById("currency").addEventListener("change", updateTipCalculator);

