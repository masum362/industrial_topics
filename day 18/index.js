const a = 20;

// normal string
// const str = 'the number is' + a;

// template literals
// const str = `the number is ${a}`;

// function func() {
//     a + b;
// }

// arrow function
// const func = (a, b) => {
//     const sum = a + b;
//     return sum;
// }
// cnsole.log(func(10, 15));

// array functions
// const arr = [1,3,4,5,6,7,8,9,10,11,12];

// forEach function --> loop through each element of array but not return anything
// const result = arr.forEach((item)=>item); //result is undefined
// console.log(result);

// map functions --> loop through each element of array and return the result
// const result = arr.map((item)=>item );
// console.log(result);

// filter functions --> loop through each element of array and return elements that match the condition
// const result = arr.filter((item) =>item%2==0 ) //return only the even number of elements
// console.log(result);

// find function --> loop through each element of array and return the first element that matches the condition.
// const result = arr.find((item) =>item%2==0 ) //return only the even number of elements
// console.log(result);

// spread operator
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];
// const finalArray = [...arr1,...arr2]; //get the all elements of array but not created nested array.
// console.log(finalArray);

// rest perameter
// when we don't know how much arguments will be passed in that scenario we use the rest parameter.
// const makeDoubleEachItem = (...args) => {
//     return args.map(item => item * 2);
// };
// console.log(makeDoubleEachItem(1,2,3,4,5,6,7,8,3,4,5,6));

// array destructuring
// we can extract element from array without indexing.
// it's sequential.first is first and second is second.
// extracted name can be anything (that follow variable name roles).
// const arr = ["tonmoy","sunny","noyon"]
// const [first , second , third] = arr;
// console.log(first, second, third);

// object destructuring
// we can extract item from object without using notation
// extracted name must be the name of key field
// it's not sequential. first key field can be extract at last.
// const obj = {
//     fullName:"noyon paul",
//     roll:4030044,
//     semester:'8th',
//     profession:"Web Developer"
// }

// const {fullName ,semester,  roll, profession} = obj ;

// console.log(fullName,semester,roll,profession);

// // for of
// const arr = [1,2,4,6,7,8,9,10,11,12 ,13,14,15,16,17,18];
// for (const item of arr) {
//     item * 2;
// }

