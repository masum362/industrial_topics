// promise

// data load er somoy 3ta state thake
// 1. pending state 2. resolve state 3. reject state

// const loadData = async () => {
//   const data = await fetch("https://dummyjson.com/productfs");
//   try {
//     const result = await data.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } 
// };

// loadData();


const intarval = setInterval(() => {
    console.log('repeat');
}, 2000);

setTimeout(() => {
    clearInterval(intarval)
}, 5000);