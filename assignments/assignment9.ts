//Write a program to print * in triangle pattern
let count:number = 10;

for (let i = 1; i <= count; i++) {
        let line = "";
        // Print spaces first
        for (let space = 1; space <= count - i; space++) {
            line += " ";
        }
        // Print stars
        for (let star = 1; star <= i; star++) {
            line += "*";
        }
        console.log(line);
    }