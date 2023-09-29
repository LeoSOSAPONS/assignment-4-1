let studentFirstName = "Brandon";
let studentLastName = "Newman";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;

let average = (grade1 + grade2 + grade3 + grade4) / 4;
console.log(
  `${studentFirstName} ${studentLastName} has an average grade of ${average}.`
);
let didPass = average >= passingGrade;
console.log(`Did the student pass? ${didPass ? "Yes" : "No"}`);
