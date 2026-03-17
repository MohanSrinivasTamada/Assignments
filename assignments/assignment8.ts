// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let stringToFind:string = "a"
let occurence:number = 0;


for (let i:number=0;i<paragraph.length-stringToFind.length;i++){
    if ((paragraph.substring(i,i+stringToFind.length)) === stringToFind){
        occurence+=1;
        console.log(`The String ${stringToFind}'s ${occurence} occurence is found at ${i} index `)
    }
}
console.log(`Total number of occurences of string ${stringToFind} in the given Paragraph is ${occurence}`);