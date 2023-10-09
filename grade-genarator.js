const prompt = require('prompt-sync')();

function calculateGrade(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else if (mark >= 40) {
        return "D";
    } else {
        return "E";
    }
}

function getStudentGrade() {
    const mark = parseFloat(prompt("Enter student's mark (between 0 and 100): "));
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        console.log(`The student's grade is: ${grade}`);
    } else {
        console.log("Invalid input! Mark should be between 0 and 100.");
    }
}

// Call the function to test
getStudentGrade();
