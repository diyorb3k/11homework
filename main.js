// 1-hoff
// function getNamesWithGrade(grd, students) {
//   let studentListWithGrade = students.map((student) => {
//     let grade;
//     if (student.percent >= 85 && student.percent <= 100) {
//       grade = 5;
//     } else if (student.percent >= 70 && student.percent < 85) {
//       grade = 4;
//     } else if (student.percent >= 60 && student.percent < 70) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
//     return {
//       ...student,
//       grade,
//     };
//   });
//   return studentListWithGrade.filter((student) => student.grade === grd);
// }

// console.log(
//   getNamesWithGrade(5, [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ])
// );

// 3 hoff
// let originalArray = [1, 2, 3, 4, 5];
// let squaredArray = originalArray.map((x) => x * x);
// console.log(squaredArray);

// 4-masalaa
// const inputArray = [1, -4, 12, 0, -3, 29, -150];
// const positiveNumbers = inputArray.filter((number) => number > 0);
// const sumOfPositiveNumbers = positiveNumbers.reduce(
//   (sum, number) => sum + number,
//   0
// );
// console.log(sumOfPositiveNumbers);

// 16-masala
// 24 masalaa
// let percent = +prompt("soni kiriting");
// let isPassed = percent >= 70 ? true : false;
// console.log(isPassed);
// 18-masalaa
// function wordLengths(s) {
//   const words = s.split(" ");

//   const lengths = words.map((word) => word.length);

//   return lengths;
// }

// const inputString = "Men Sultonqul Programmerman";
// const output = wordLengths(inputString);
// console.log(output);
