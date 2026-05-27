//bank evaluates loan applicants based on the following criteria:
//function LoanCriteria(){
let AccountHolderdetails
let customername: string = "Jhon Doe";
let CreditScore: number = 750;
let Salary: number = 40000;
let isemployed: boolean = false;
let DTI: number = 30;


if (CreditScore > 750) {
    console.log("Loan is approved")
}
else if (CreditScore >= 650 && CreditScore === 750) {
    console.log("Verify customer’s income must be at least $50,000")
    if (Salary >= 50000) {
        console.log("Verify customer is employed or not ")
        if (!isemployed) {
            console.log("Customer is not employed & not eligible for loan")
        } else {
            console.log("Customer is employed")
        }

        if (DTI < 40) {
            console.log("DTI ratio is more than 40%,")
        } else {
            console.log("DTI ratio is less than 40%, ")

        }

    }

}
else {
    console.log("credit score is below 650, the loan is denied.")
}
