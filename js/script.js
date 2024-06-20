const celsiusInput = document.querySelector('#celciusInput');
const fahrenheitInput = document.querySelector('#fahrenheitInput');
const konversiButton = document.querySelector('#konversi');
const resetButton = document.querySelector('#reset');
const reverseButton = document.querySelector('#reverse');
const calculationOutput = document.querySelector('#convertionCalculate');

function convertToFahrenheit() {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (isNaN(celsiusValue)) {
    alert('Please enter a valid Celsius value.');
    return;
  }

  const fahrenheitValue = (celsiusValue * 9/5) + 32;
  fahrenheitInput.value = fahrenheitValue.toFixed(2);

  updateCalculationOutput('Celsius to Fahrenheit');
}

function convertToCelsius() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (isNaN(fahrenheitValue)) {
    alert('Please enter a valid Fahrenheit value.');
    return;
  }

  const celsiusValue = (fahrenheitValue - 32) * 5/9;
  celsiusInput.value = celsiusValue.toFixed(2);

  updateCalculationOutput('Fahrenheit to Celsius');
}

function updateCalculationOutput(conversionType) {
  calculationOutput.value = `Conversion: ${conversionType}\n` +
    `Formula: °F = (°C × 9/5) + 32 or °C = (°F - 32) × 5/9\n` +
    `Original Value: ${conversionType === 'Celsius to Fahrenheit' ? celsiusInput.value : fahrenheitInput.value}°\n` +
    `Converted Value: ${conversionType === 'Celsius to Fahrenheit' ? fahrenheitInput.value : celsiusInput.value}°`;
}

function resetInputs() {
  celsiusInput.value = '';
  fahrenheitInput.value = '';
  calculationOutput.value = '';
}

konversiButton.addEventListener('click', convertToFahrenheit);
reverseButton.addEventListener('click', convertToCelsius);
resetButton.addEventListener('click', resetInputs);
