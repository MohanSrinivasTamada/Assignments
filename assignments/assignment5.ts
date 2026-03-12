interface employeeData {
    empName : string,
    baseSal : number,
    experience : number,
    empRating : number,
    variablePay : number,
    bonusPay : number,
    hike : number,
    hikePercent : number
}

const employee : employeeData[] = [
    {empName : "Alice Johnson",baseSal : 75000,experience : 5.1,empRating : 4.2,variablePay : 0,bonusPay : 0,hike : 0, hikePercent : 0},
    {empName : "Bob Smith",baseSal : 68000,experience : 3.2,empRating : 3.8,variablePay : 0,bonusPay : 0,hike : 0, hikePercent : 0},
    {empName : "Carol Davis",baseSal : 82000,experience : 7.1,empRating : 4.5,variablePay : 0,bonusPay : 0,hike : 0, hikePercent : 0},
    {empName : "David Brown",baseSal : 90000,experience : 10.2,empRating : 2.5,variablePay : 0,bonusPay : 0,hike : 0, hikePercent : 0},
    {empName : "Eva Green",baseSal : 60000,experience : 2.4,empRating : 3.5,variablePay : 0,bonusPay : 0,hike : 0, hikePercent : 0}
]

const empHike : Map<string,number> = new Map([

])

function hikeCalculator(empData:employeeData[]){
    for (let emp of empData){
        if (emp.experience>5){
            emp.bonusPay += 5000;
        }
        if (emp.empRating >=4.0){
            emp.variablePay = 15;
            emp.bonusPay += 1500;
            } else if (emp.empRating >=3 && emp.empRating < 4){
            emp.variablePay = 10;
            emp.bonusPay += 1200;
            } else {
            emp.variablePay = 3;
            emp.bonusPay += 300;
        }
        emp.hike = (emp.baseSal*emp.variablePay)+emp.bonusPay;
        emp.hikePercent = emp.hike/emp.baseSal;
        empHike.set(emp.empName,emp.hikePercent);
    }
    
    console.log(empHike);
}

hikeCalculator(employee);


