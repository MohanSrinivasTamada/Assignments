let students:string[] = ["Suresh","Mahesh","Naresh"];
let marks:number[] = [75,80,82];

let totalMarks:number = 0;
console.log("Updated Marks:")
//update marks
for (let i:number =0;i<marks.length;i++){
    marks[i] = marks[i]+10;
    console.log(`${students[i]} : ${marks[i]}`)
    totalMarks = totalMarks + marks[i];
}

let averageMarks:number = totalMarks/(students.length);
console.log(`Average Marks: ${averageMarks}`)

