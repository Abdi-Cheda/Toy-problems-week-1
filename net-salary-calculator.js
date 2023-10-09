const prompt = require('prompt-sync')(); // prompt-sync module to create the prompting functions.


// Function to calculate payee (Tax) based on basic salary
function calculatePayee(basicSalary) {
    let tax = 0;
    if (basicSalary <= 24000) {
        tax = 0.1 * basicSalary;
    } else if (basicSalary <= 32333) {
        tax = 0.25 * basicSalary;
    } else {
        tax = 0.3 * basicSalary;
    }
    return tax;
}

// Function to calculate NHIF deductions based on basic salary
function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else {
        nhif = 1000;
    }
    return nhif;
}

// Function to calculate NSSF deductions based on basic salary
function calculateNSSF(basicSalary) {
    // Assuming NSSF deduction rate is 6%
    return 0.06 * basicSalary;
}

// Function to calculate net salary based on basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePayee(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (payee + nhif + nssf);
    return netSalary;
}

// Get user input using prompt-sync
const basicSalary = parseFloat(prompt('Enter basic salary: '));
const benefits = parseFloat(prompt('Enter benefits: '));

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary: Ksh" + netSalary.toFixed(2));