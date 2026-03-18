let mystring:string = "Java programming is fun and challenging";
let words : string[] = mystring.split(" ");
//1. Count the total number of words in the sentence.
console.log(`7_1.Total number of the words in the sentence "${mystring}" is ${words.length}`);

//2. Print the sentence words in reverse order.
let reverseMyString: string[] = [];

let index:number = 0
let reversewords:string = ""
for (let i:number=words.length-1;i>=0;i--){
    for (let j:number=index;j<=words.length-1;j++){
        reverseMyString[index] = words[i];
        reversewords+=reverseMyString[index]+" ";
        index+=1;
        break;
    }
}
console.log(`7_2. Print the sentence words of "${mystring}" in reverse order "${reversewords}"`);

//Convert the first character of each word to uppercase and print original sentence
let newstring:string = "";
for (let i:number=0;i<words.length;i++){
    let firstChar:string = words[i].charAt(0);    
    words[i] = words[i].replace(firstChar,firstChar.toUpperCase());
    newstring+=words[i]+" ";
}
console.log(`7_3. The new string with first character of each word convered to uppercase : "${newstring}"`);