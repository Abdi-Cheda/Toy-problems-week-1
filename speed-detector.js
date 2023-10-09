const prompt = require('prompt-sync')();

const speedLimit = 70;
const demeritPointsPerKmOverLimit = 1;
const demeritPointsThreshold = 12;

function calculateDemeritPoints(speed) {
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

// Get user input for car speed
const carSpeed = parseFloat(prompt("Enter the car speed: "));

// Validate and calculate demerit points
if (!isNaN(carSpeed) && carSpeed >= 0) {
    calculateDemeritPoints(carSpeed);
} else {
    console.log("Invalid input. Please enter a valid number for car speed.");
}
