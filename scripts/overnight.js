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

    const isAAA = false; // Replace with logic to check if user has AAA
    const isSenior = false; // Replace with logic to check if user qualifies for senior discount
    const isVeteran = false; // Replace with logic to check if user is a veteran

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
