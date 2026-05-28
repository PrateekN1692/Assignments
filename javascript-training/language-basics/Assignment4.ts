let CreditedAmt: number[] = [50000,3000,4000];
let deductedAmt: number[] = [-2000, -15000, -200,-300,-3000];

console.log(`Total number 0f  credited Transaction ${CreditedAmt.length}`);
console.log(`Total number of debited Transaction ${deductedAmt.length}`);

let TotalCreditedAmount: number = 0; // this will store summ of all updated marks 
for (let amount1 of CreditedAmt) {
    TotalCreditedAmount += amount1;
}
console.log(`Total Amount Credited : ${TotalCreditedAmount}`);

let TotalDebitedAmount: number = 0;
for (let amount2 of deductedAmt) {
    TotalDebitedAmount += (amount2);

    if (amount2 < -10000) {
        console.log(`Suspicious debit transaction with Amount: ${amount2}`);

    }
}

let FinalBalance: number = TotalCreditedAmount - TotalDebitedAmount;

console.log(`Total Amount Credited: ${TotalCreditedAmount}`);
console.log(`Total Amount Debited: ${TotalDebitedAmount}`);
console.log(`Final Balance in Account: ${FinalBalance}`);