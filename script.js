const temperature = document.getElementById('temperature');
const convertButton = document.getElementById('convert');
const result = document.getElementById('convertedValue');
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

convertButton.onclick = function() {
    const from_unit = fromUnit.value;
    const to_unit = toUnit.value;
    const temp = parseFloat(temperature.value);

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    switch(from_unit){
        case "celsius":
            if(to_unit === "fahrenheit"){
                result.textContent = `${(temp * 9/5) + 32} °F`;
            } else if(to_unit === "kelvin"){
                result.textContent = `${temp + 273.15} K`;
            } else {
                result.textContent = `${temp} °C`;
            }
        break;
        case "fahrenheit":
            if(to_unit === "celsius"){
                result.textContent = `${(temp - 32) * 5/9} °C`;
            } else if(to_unit === "kelvin"){
                result.textContent = `${((temp - 32) * 5/9) + 273.15} K`;
            } else {
                result.textContent = `${temp} °F`;
            }
        break;
        case "kelvin":
            if(to_unit === "celsius"){
                result.textContent = `${temp - 273.15} °C`;
            } else if(to_unit === "fahrenheit"){
                result.textContent = `${((temp - 273.15) * 9/5) + 32} °F`;
            } else {
                result.textContent = `${temp} K`;
            }
        break;
    }
}

