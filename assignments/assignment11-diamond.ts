//Write a program to print * in triangle pattern
let diamond:number = 10;
let lines:string[] = [];

for (let i = 1; i <= diamond; i++) {
        let spaceLine = "";
        let numLine = "";
        // Print spaces first
        for (let space = 1; space <= diamond-i+1; space++) {
            spaceLine += " ";
        }
        //Print numbers
        for (let num = 1; num <= i; num++) {
            if (diamond === 1){
                numLine = numLine + num
            }else if(diamond > 1){
                numLine = numLine + num + " "
            }
        }
        lines[i] = spaceLine+numLine.trim()+spaceLine;
        console.log(spaceLine+numLine.trim()+spaceLine);
}

for(let i:number=lines.length;i>2;i--){
    console.log(lines[i-2])
}
 