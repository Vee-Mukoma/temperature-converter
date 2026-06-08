const temperature = document.getElementById('temperature');
const unit = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const result = document.getElementById('convertedValue');

convertButton.onclick = function() {
    const selectedUnit = unit.value;
    const temp = parseFloat(temperature.value);
    console.log(`Temperature: ${temp}, Unit: ${selectedUnit}`);
}