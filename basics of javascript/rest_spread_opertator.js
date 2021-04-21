
// spred operator

//  spred operator for objects  
const person = {
    name: "Pratik",
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
const copiedPerson = { ...person }; // spred operator
console.log(copiedPerson);



//  spred operator for array  

const hobbies = ['sports', 'cooking'];

// const copiedArray = hobbies.slice(); // copy  array
// const copiedArray = [hobbies]; // new array, old  with added nested array 
const copiedArray = [...hobbies]; // spred operator
console.log(copiedArray);


// rest operator  

const toArraywithoutrest = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArraywithoutrest(1, 2, 3));

const toArraywithrest = (...args) => {
    return args;
}

console.log(toArraywithrest(5, 7, 11, 13, 17, 1));


