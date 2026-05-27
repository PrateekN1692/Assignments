//bank evaluates loan applicants based on the following criteria:
//function LoanCriteria(){
let AccountHolderdetails
let customername: string = "Jhon Doe";
let CreditScore: number = 750;
let Salary: number = 50000;
let isemployed: boolean = true;
let DTI: number = 30;


if (CreditScore >= 750) {
    console.log("Loan is approved")
}
else if (CreditScore >= 650 && CreditScore < 750) {
    console.log("Verify customer’s income must be at least $50,000")
}
else {
    console.log("credit score is below 650, the loan is denied.")
}
if (Salary >= 50000) {
    console.log("customer is elegible for Loan")
} else {
    console.log("customer is not elegible for Loan")
}
if (isemployed = true) {
    console.log("Customer is employed eligible for loan")
} else {
    console.log("Customer is not employed he is not eligible for loan")

} if (DTI < 40) {
    console.log("DTI ratio is less than 40%, the loan is approved.")
} else {
    console.log("DTI ratio is less than 40%, the loan is approved.")
}



