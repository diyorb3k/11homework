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

///7-masala/////
// function separateEvenOdd(arr) {
//     const evenNumbers = arr.filter(x => x % 2 === 0);
//     const oddNumbers = arr.filter(x => x % 2 !== 0);
//     return { evenNumbers, oddNumbers };

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const { evenNumbers, oddNumbers } = separateEvenOdd(array);

// console.log("Juft sonlar:", evenNumbers);
// console.log("Toq sonlar:", oddNumbers);
// 8-masalaa
// const removeDuplicates = (array) => {
//     return array.reduce((uniqueElements, currentElement) => {
//       if (!uniqueElements.includes(currentElement)) {
//         uniqueElements.push(currentElement);
//       }
//       return uniqueElements;
//     }, []);
//   };

//   const arr = [1, 2, 3, 2, 4, 1, 5, 3, 6];
//   const uniqueArr = removeDuplicates(arr);

//   console.log(uniqueArr);

// 10-masall
// const products = [
//   { id: 3, name: "Product C", price: 25, rating: 4.3, discount: 5 },
//   { id: 1, name: "Product A", price: 30, rating: 4.5, discount: 10 },
//   { id: 4, name: "Product D", price: 40, rating: 4.8, discount: 20 },
//   { id: 2, name: "Product B", price: 20, rating: 4.7, discount: 15 },
//   { id: 5, name: "Product E", price: 50, rating: 4.9, discount: 25 },
// ];

// const highestRatedProduct = products.sort((a, b) => b.rating - a.rating)[0];

// console.log("Highest Rated Product:", highestRatedProduct);

// 13-masall
// const products = [
//     { id: 1, name: 'Product A', price: 30, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 20, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Product C', price: 25, rating: 4.3, discount: 5 },
//   ];

//   const productNames = products.map(product => product.name);

//   console.log(productNames);
// 14-masalaaa
// const products = [
//     { id: 1, name: 'Product A', price: 30, rating: 4.5, discount: 10 },
//     { id: 2, name: 'Product B', price: 20, rating: 4.7, discount: 15 },
//     { id: 3, name: 'Product C', price: 25, rating: 4.3, discount: 5 },
//     { id: 4, name: 'Product D', price: 40, rating: 4.8, discount: 20 },
//     { id: 5, name: 'Product E', price: 50, rating: 4.9, discount: 25 },

//   ];

//   const findProductNameById = (products, id) => {
//     const product = products.find(product => product.id === id);
//     return product ? product.name : null;
//   };

//   const productName = findProductNameById(products, 5);

//   console.log(productName);

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
