// destructuring objects 

const person = {
    name: "Pratik",
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}


printName(person);

const { name, age } = person;

console.log(name, age);

// destructuring arrays 

const hobbies = ['sports', 'cooking'];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);