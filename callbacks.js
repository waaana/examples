//callbacks
let simulateHttpRequest = (callback) => {
    setTimeout(() => {      // Simulate asyncIO operation
        callback(null, 'callback message appears after 2 seconds');         // calls the function, that is passed after 2 seconds
    },2000);
};
let writeHello = (err, data) => {
    if (err) {
        console.log('Following error appeared: ' + err);
    }
    console.log(data);
}
simulateHttpRequest(writeHello);

//promise function
let promiseAddOne = (i) => {
    return new Promise((resolve, reject) => {
        resolve(i+1);
    })
};

promiseAddOne(0)
    .then(promiseAddOne)
    .then( result => console.log('Promise1: ' + result));

promiseAddOne(0)
    .then((result) => {
        promiseAddOne(result);
    })
    .then( result => console.log('Promise2: ' + result));

promiseAddOne(0)
    .then((result) => {
        return promiseAddOne(result);
    })
    .then( result => console.log('Promise3: ' + result));
