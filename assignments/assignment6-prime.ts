//find a prime number
let counter:number = 0;
let factors:number[] = [];
let statement:string = "1"
function findPrime(num:number):boolean {
    for (let i=1;i<=num;i++){
        if (num%i === 0){
            factors[counter]=i;
            counter+=1;
        }
    }
    if(counter>2){
        for (let x=1; x<factors.length ;x++){
             statement = statement + "," + factors[x];
        }
    }
    
    if (counter === 1){
        console.log(`${num} has only one divisor (${num} itself), which is not sufficient to be considered as Prime`);
        return false;
    }else if (counter === 2){
        console.log(`${num} has exact two divisors: ${factors[0]} and ${factors[1]}, making it a Prime number`);
        return true;
    }else{
        console.log(`${num} has more than two divisors: ${statement}, so it is not a Prime number`);
        return false;
    }
}

console.log(findPrime(13))