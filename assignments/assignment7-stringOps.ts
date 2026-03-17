let mystring:string = "Java programming is fun and challenging";
let words : string[] = mystring.split(" ");
//1. Count the total number of words in the sentence.
console.log(`Total number of the words in the sentence ${mystring} is ${words.length}`);

//2. Print the sentence words in reverse order.
let reverseMyString: string[] = [];

let index:number = 0
for (let i:number=words.length-1;i>=0;i--){
    console.log(words[i])
    for (let j:number=index;j<=words.length-1;j++){
        reverseMyString[index] = words[i];
        console.log(reverseMyString[j])
        index+=1;
        break;
    }
}
console.log(`Print the sentence words of ${mystring} in reverse order${reverseMyString}`);

//Convert the first character of each word to uppercase and print original sentence
for (let i:number=0;i<words.length;i++){
    let firstChar:string = words[i].charAt(0);
    console.log(firstChar)
    console.log(words[i])
    words[i] = words[i].replace(firstChar,firstChar.toUpperCase());
    console.log(words[i])
}
console.log(words)