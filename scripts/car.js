"use strict";

// Input Fields
const inputPickup = document.getElementById("inputPickup");
const numberOfDays = document.getElementById("numberOfDays");

// Option Checkboxes
const tollTagCheckbox = document.getElementById("tollTag");
const GPSCheckbox = document.getElementById("GPS");
const roadsideCheckbox = document.getElementById("roadside");

// Under 25 Radio Buttons
const under25YesRadio = document.getElementById("flexRadioYes");
const under25NoRadio = document.getElementById("flexRadioNo");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Pricing Sheet Elements
const carRentalCost = document.getElementById("carRentalCost");
const optionsCost = document.getElementById("optionsCost");
const under25Surcharge = document.getElementById("under25Surcharge");

window.onload = function(){
    estimateTotalCostButton.onclick = on estimateTotalCostButtonClick;
};
function estimateTotalCostButton.onclick(){
//get known values

let numberOfDays = Number(inputNumberOfDays.value) 

let under25Surcharge = inputUnder25YesRadio.checked;

//calculate unknown values


//display the results


}