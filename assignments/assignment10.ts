//input is an array of prices [7,8,4,3,1,9]

function profitCalculator(...prices:number[]) {
    //find the minimum value of the array
    let min = prices[0];
    for(let i=1;i<=prices.length;i++){
        if (prices[i]<min) min = prices[i];
    }
    //find the index of min in the array
    let index = prices.indexOf(min);
    //find the highest number after the index 
    let maxPrice = prices[index]
    for(let i=index+1;i<prices.length;i++){
        if (prices[i]>prices[i-1]) maxPrice = prices[i];
    }
    if(!(maxPrice === prices[index])){
        let dayBuy:number = index+1
        let maxProfitDay:number = prices.indexOf(maxPrice)+1
        let profit:number = maxPrice-min
        console.log(`Tip: Buy on Day:${dayBuy} at Rs.${min} and Sell on Day:${maxProfitDay} at Rs.${maxPrice} to book the Max profit of:${profit} per share`);
    }else console.log(`Max Profit is 0`)
}

let prices:number[] = [8,4,2,6,4,9,5]
//let prices:number[] = [8,2,3,6,4,1]

profitCalculator(...prices)