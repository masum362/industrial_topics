// string 
const str = 'hello world';

// string function
str.charAt(0) //return the character at index 0 in str
str.length() //return the length of str
str.toUpperCase() // return a new string with uppercase characters
str.toLowerCase() //return a new string with lowercase characters
str.slice(0,5) //retunn a new slice from the original string

// object
const obj = {
    name:"masum ahmed",
    profession:"Web Developer",
    secondaryProfession:"Teacher",
    institute:"Moulvibazar Polytechnic Institute",
}


// object function
obj.institute //get the institute of object
obj['name'] //get the name of object
Object.keys(obj) //return the keys of the object

// loop with object
// for in loop
for (const key in obj) {
   console.log(obj[key]); //print the every value of the object
}

// function
const result = function abc(){
    console.log('console log from inner function');
}



