//Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
let powerValue:number = 1;
let range:number;
function pow(num:number,exponent:number):number{
    if(exponent<0) {range = exponent*-1} 
    else if(exponent>0) {range = exponent}
    else return 1;
        for(let i=1;i<=range;i++){
            powerValue*=num;
        }
    
    if(exponent>0){
        return powerValue;
    }else return (1/powerValue);
}

console.log(pow(2,0).toFixed(5));
