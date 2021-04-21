// async code 
setTimeout(() => {
    console.log('Timer is done !');
}, 2000);


// sync code 
console.log('hello !');
console.log('hi !');

// async code callback fucntion
const fetchData = callback => {
    setTimeout(() => {
        callback('Done !');
    }, 1500);
}

setTimeout(() => {
    console.log('new callback');
    fetchData(text => {
        console.log(text);
    })
}, 2000);


// promises 
const fetchData2 = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' promises Done !');
        }, 2000);
    });
    return promise;
}

setTimeout(() => {
    console.log('new promises callback');
    fetchData2()
        .then(text => {
            console.log(text);
            return fetchData2();
        })
        .then(text2 => {
            console.log(text2);
        })
}, 2000);



