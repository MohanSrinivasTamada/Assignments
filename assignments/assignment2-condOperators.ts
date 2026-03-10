interface custData {
    customerName : string,
    creditScore  : number,
    income       : number,
    isEmployed   : boolean,
    debtToIncomeRatio:number
}

let customer : custData = {
    customerName : "John Doe",
    creditScore  : 600,
    income       : 55000.0,
    isEmployed   : false,
    debtToIncomeRatio:35.0
}
let loanFlag:boolean = false
function loanEligibility(customer:custData):boolean {
    if (customer.creditScore > 750){
        loanFlag = true;
        console.log (`Dear ${customer.customerName}, your loan is approved for having Credit Score > 750`);
    }else if (customer.creditScore>=650 && customer.creditScore<=750){
        console.log("Additional checks required as the customer credit score is in between 650 and 750");
            if (customer.income>50000){
                if (!customer.isEmployed){
                    console.log (`Dear ${customer.customerName}, your Loan is Rejected as Emplyment Status is ${customer.isEmployed}`);
                }else if (customer.debtToIncomeRatio>40){
                    console.log (`Dear ${customer.customerName}, your loan is Rejected for having Debt to Income Ratio > 40`);
                }else {
                    loanFlag = true;
                    console.log (`Dear ${customer.customerName}, your loan is approved for having income > ${customer.income}, Employment Status as ${customer.isEmployed} and Debt to Income Ratio as ${customer.debtToIncomeRatio}`);
                }
            }else{
                console.log (`Dear ${customer.customerName}, your Loan is Rejected as Income is < 55000`);
            }
    } else {
        console.log (`Dear ${customer.customerName}, your Loan is Rejected as Credit Score is < 650`);
    }
    return loanFlag; 
    }

loanEligibility(customer) ? "Loan Approved for the Customer" : "Loan Rejected"