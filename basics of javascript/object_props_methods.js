
// object
const person = {
    name: "Pratik",
    age: 24
};

console.log(person);


// object with methods
const person2 = {
    name: "Pratik",
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person2);
person2.greet();