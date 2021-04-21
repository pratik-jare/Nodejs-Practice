const hobbies = ['Sports', 'cooking'];

// for of Loop
for (const hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

// also we can do like this
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);

hobbies.push('programming');
console.log(hobbies);
