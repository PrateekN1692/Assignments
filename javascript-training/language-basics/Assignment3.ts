//function Studentrecord
let Students: String[] = ["Suresh", "Mahesh", "Naresh"];
let StudentMarks: number[] = [75, 80, 82];

let updatedStudentMarks: number[] = [];


for (let i = 0; i < StudentMarks.length; i++) {
    updatedStudentMarks[i] = StudentMarks[i] += 10;
}


console.log(`Added 10 marks to each students ${updatedStudentMarks}`);

let Total: number = 0; // this will store summ of all updated marks 
for (let mark of updatedStudentMarks) {
    Total += mark;
}

let averagemarks: number = Total / updatedStudentMarks.length; // . legth will give you the size of array here it should be 3

console.log('updated marks');
for (let i = 0; i < Students.length; i++) {
    console.log(`${Students[i]} : ${updatedStudentMarks[i]}`)

}

console.log(`Average marks of all students ${averagemarks}`);

