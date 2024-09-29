

// let mark = 85;

// let comment = 'Your grade is'

// let grade1 = 'A' 
// let grade2 = 'B'
// let grade3 = 'C'
// let grade4 = 'D'
// let grade5 = 'E'

// if(mark>=79){
//     console.log("Your grade is A")
// }
// else if (mark<=79 && mark>=60){
//     console.log("Your grade is B")
// }
// else if (mark<=60 && mark>=49){
//     console.log("Your grade is C")
// }
// else if (mark<=49 && mark>=40){
//     console .log("Your grade is D")
// }
// else if (mark<=20 && mark>=40){
//     console.log("Your grade is E")
// }
// else(
//     console.log("invalid input")
// )


// function to determine the grade of marks
function getGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 48) {
        return 'D';
    } else if (marks < 40 && marks >= 0) {
        return 'E';
    } else {
        return 'Invalid input';
    }
}
// prompt for input
let score = ("-20");
 let marks = parseInt(score, 10); //convert string (number)to integer 

// Get the grade and output it
let grade = getGrade(marks);
// example usage
console.log(`The grade for marks ${marks} is: ${grade}`);

