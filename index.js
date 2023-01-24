let student = 
[
    { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
    { name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
    { name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
    { name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

function studentWithHighestMarks(array) {
    // Calculate the total marks of each student
    let totalMarks = array.map(function(student) {
        return student.marks.reduce(function (a, b) {
            return a + b;
        });
    });

    // Return the highest marks within the given array
    let maxMarks = Math.max(...totalMarks);

    // Find the index of the student with the highest mark
    let index = totalMarks.indexOf(maxMarks);

    // Return student name with the highest mark
    return array[index].name;
}

console.log(studentWithHighestMarks(student));

let array = [20, -2, 4, -11, 0, 25]

function minimumValue(array) {
    // Return the smallest number in the array
    return Math.min(...array);
}

console.log(minimumValue(array));

let name = "helloworld";

function lengthOfString(string) {
    return string.split('').reduce((acc, curr) => acc + 1, 0);
}

console.log(lengthOfString(name));
