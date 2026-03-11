let transactions:number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000]

// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account
// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions
let creditTrans:number = 0;
let debitTrans:number = 0;
let creditAmount:number = 0;
let debitAmount:number = 0;
let suspiciousCredit:number = 0;
let suspiciousDebit:number = 0

for (let amount of transactions){
    if (amount > 0){
        creditTrans = creditTrans+1;
        creditAmount = creditAmount+amount;
        if (amount>10000){
            console.log(`Suspicious credit Transaction with Amount : ${amount}`)
            suspiciousCredit = suspiciousCredit+1;
        }
    }else if(amount<0){
        debitTrans = debitTrans+1;
        debitAmount = debitAmount+amount;
        if (amount<-10000){
            console.log(`Suspicious debit Transaction with Amount : ${amount}`)
            suspiciousDebit = suspiciousDebit+1;
        }
    }
}
let accountBalance:number = creditAmount+debitAmount;
console.log(`Total number of Credit Trsansactions completed : ${creditTrans}`);
console.log(`Total amount credited into the account : ${creditAmount}`)
console.log(`Number of Suspicious Credit Transactions with amounts higher than $10000 : ${suspiciousCredit}`);

console.log(`Total number of Debit Trsansactions completed : ${debitTrans}`);
console.log(`Total amount debited into the account : ${debitAmount}`)
console.log(`Number of Suspicious Debit Transactions with amounts lower than -$10000 : ${suspiciousDebit}`);

console.log(`Total amount remaining in the account : ${accountBalance}`)
