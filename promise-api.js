const p1 = new Promise((resolve ) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 1000);
});
const p2 = new Promise((resolve ) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));

/* reject example
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 3...');
        reject(new Error('Operation failed'));
    }, 1500);
});

const p4 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 4...');
        resolve(4);
    }, 2500);
});

Promise.all([p3, p4])
    .then(result => console.log(result))
.catch(err => console.log('Error', err.message));*/