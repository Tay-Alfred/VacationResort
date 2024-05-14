"use strict";

//declare variables
const checkInDate = document.getElementById("checkIn");
const numOfNights = document.getElementById("numOfNights");
const queenOne = document.getElementById("queenOneBed");
const queenTwo = document.getElementById("queenTwoBed");
const kingBed = document.getElementById("kingBed");
const californiaKingBed = document.getElementById("californiaKingBed");
const militaryDiscount = document.getElementById("militaryDiscount");
const seniorDiscount = document.getElementById("seniorDiscount");
//input values
const roomType = ["queenOne", "queenTwo", "californiaKingBed", "kingBed"];


//input unknown values


//calculate


//what do i want it to do

function getRoomRate(checkInDate, roomType) {
    const inSeasonRates = {
        "January": 150,
        "February": 150,
        "March": 150,
        "April": 150,
        "May": 150,
        "September": 150,
        "October": 150,
        "November": 150,
        "December": 150,
    };

    const outOfSeasonRates = {
        "June": 250,
        "July": 250,
        "August": 250,
    };

    const checkInMonth = checkInDate.getMonth();
    const inSeasonRate = inSeasonRates[checkInMonth];
    const outOfSeasonRate = outOfSeasonRates[checkInMonth];

    const isAAA = false; 
    const isSenior = false; 
    const isVeteran = false;

    let roomRate = inSeasonRate; // Default to in-season rate
    if (roomRate === undefined) {
        roomRate = outOfSeasonRate; // Use out-of-season rate if no in-season rate is defined
    }

    if (isAAA || isSenior) {
        roomRate *= 0.9; // Apply 10% discount for AAA or senior discount
    } else if (isVeteran) {
        roomRate *= 0.8; // Apply 20% discount for veterans
    }

    return roomRate;
}

// to play around with
document.addEventListener("DOMContentLoaded", function() {
    // Get relevant elements
    const checkInDateInput = document.getElementById("checkIn");
    const bedButtons = document.querySelectorAll(".card-body button");
    const discountButtons = document.querySelectorAll("input[name='discountButtons']");
    const finalEstimateInput = document.getElementById("finalEstimate");

    // Function to calculate estimate
    function calculateEstimate() {
        // Get selected check-in date
        const checkInDate = new Date(checkInDateInput.value);
        // Get month from the selected date (months are zero-indexed in JavaScript)
        const month = checkInDate.getMonth();
        // Determine base price
        let basePrice = 150; // Default base price
        if (month >= 5 && month <= 7) { // June to August
            basePrice = 250;
        }
        // Apply discount if applicable
        let discount = 0;
        discountButtons.forEach(button => {
            if (button.checked) {
                if (button.id === "seniorDiscount") {
                    discount = 0.1; // 10% discount for senior
                } else if (button.id === "militaryDiscount") {
                    discount = 0.2; // 20% discount for military
                }
            }
        });
        // Calculate final estimate
        const numNights = parseInt(document.getElementById("numOfNights").value);
        const estimate = basePrice * numNights * (1 - discount);
        // Update final estimate input
        finalEstimateInput.value = estimate.toFixed(2); // Convert to 2 decimal places
    }

    // Event listener for bed buttons
    bedButtons.forEach(button => {
        button.addEventListener("click", calculateEstimate);
    });

    // Event listener for discount buttons
    discountButtons.forEach(button => {
        button.addEventListener("change", calculateEstimate);
    });

    // Event listener for number of nights input
    document.getElementById("numOfNights").addEventListener("input", calculateEstimate);
});
finalEstimateInput.value = estimate.toFixed(2); // Convert to 2 decimal places
finalEstimateInput.disabled = false; // Enable the input field