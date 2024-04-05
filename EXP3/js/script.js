function generateBill() {
    let name = document.getElementById("name").value;
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    let pan = document.getElementById("pan").value;
    if (!pan) {
        alert("Please enter your PAN Number.");
        return;
    }
    let year = document.getElementById("taxYear").value;
    let salary = Number(document.getElementById("salary").value) || 0;
    let rent = Number(document.getElementById("rent").value) || 0;
    let otherIncomes = Number(document.getElementById("otherIncomes").value) || 0;
    let insurance = Number(document.getElementById("insurance").value) || 0;
    let tuition = Number(document.getElementById("tuition").value) || 0;
    let otherDeductions = Number(document.getElementById("otherDeductions").value) || 0;

    if (rent + salary + otherIncomes <=0) {
        alert("Please enter valid income details.");
        return;
    }


    document.getElementById("bill-name").value = name;
    document.getElementById("bill-pan").value = pan;
    document.getElementById("bill-taxYear").value = year;
    
    let totalIncome = salary + rent + otherIncomes;
    document.getElementById("bill-totalIncome").value = "₹ " + totalIncome;

    let standardDeduction = 50000;
    document.getElementById("bill-standardDeduction").value = "₹ " + standardDeduction;

    let totalDeduction = insurance + tuition + otherDeductions;
    if (totalDeduction > 150000) { totalDeduction = 150000; }
    document.getElementById("bill-totalDeduction").value = "₹ " + totalDeduction;

    let taxableIncome = totalIncome - standardDeduction - totalDeduction;
    if (taxableIncome < 0) 
        taxableIncome = 0;
    document.getElementById("bill-taxableIncome").value = "₹ " + taxableIncome;

    let taxRate = 0;
    // Income tax slabs for individuals under old tax regime
    if (taxableIncome <= 250000) {
        taxRate = 0;
    } else if (taxableIncome <= 500000) {
        taxRate = 0.05;
    } else if (taxableIncome <= 1000000) {
        taxRate = 0.2;
    } else {
        taxRate = 0.3;
    }
    document.getElementById("bill-taxRate").value = "" + 100*taxRate + " %";

    let taxPayable = taxableIncome * taxRate;
    document.getElementById("bill-taxPayable").value = "₹ " + taxPayable;
}