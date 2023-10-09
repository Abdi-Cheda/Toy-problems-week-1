const prompt = require('prompt-sync')(); // prompt-sync module to create the prompting functions.

const speedLimit = 70; // declaration of a constant speedLimit 
const demeritPointsPerKmOverLimit = 1; // declaration of a constant speedLimit 
const demeritPointsThreshold = 12; // declaration of a constant demeritPointsThreshold 

function calculateDemeritPoints(speed) { // function to the calculateDemeritPoints
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5) * demeritPointsPerKmOverLimit;
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended");
        }
    }
}

// a function to get user input for car speed
const carSpeed = parseFloat(prompt("Enter the car speed: "));

// function to validate and calculate demerit points
if (!isNaN(carSpeed) && carSpeed >= 0) {
    calculateDemeritPoints(carSpeed);
} else {
    console.log("Invalid input. Please enter a valid number for car speed.");
}
