const name = "Pratik";
let age = 24;
let hasHobbies = true;

age = 25;

function summerizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}

console.log(summerizeUser(name, age, hasHobbies));
