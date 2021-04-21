const name = "Pratik";
let age = 24;
let hasHobbies = true;

age = 25;

const summerizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}

const add2 = (a,b) => a + b;
const add1 = (a) => a + 1;
const add = () => 5 + 4;

console.log(add2(5,2));
console.log(add1(1));
console.log(add());

console.log(summerizeUser(name, age, hasHobbies));

