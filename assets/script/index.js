'use strict';

// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

// Select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector);
}


//  Funcion de conversion e Impresion de Celsius

function convertCelsiustoFah(celcius) {
    let result = celcius * 9 / 5.0 + 32;
    return result;
}

function convertFahToCelsius(fahrenheit) {
    let result = (fahrenheit - 32)  * 5 / 9.0;
    return result;       
}

const form = select('form');
const numberOne = select('.number-one');
const btnConvert = select('.get-result');
const output = select('.output p');
const btnLightMode = select('.show-modal');

onEvent('click', btnConvert, function() {
    output.innerText = '';
    let initialNumber = numberOne.value.trim();
    if(!initialNumber) {
        output.innerText = 'Please input the number.';
        return;
    }

    let selectedRadioButton = select("input[name='convert']:checked");
    if(!selectedRadioButton)  {
        output.innerText = 'Please select the desired unit of temperature.';
        return;
    }

    let result;
    if(selectedRadioButton.value == "fahrenheit")  {
        result = convertCelsiustoFah(initialNumber);
        output.innerText = `${initialNumber}°C = ${result}°F`;
    } else if(selectedRadioButton.value == "celcius") {
        result = convertFahToCelsius(initialNumber);
        output.innerText = `${initialNumber}°F = ${result}°C`;
    }    
});

onEvent('click', btnLightMode, function() {
    document.body.classList.toggle("dark");
    //document.body.classList.add("light");
});

