setTimeout(() => {
    console.log('setTimeout 1');

    Promise.resolve().then(() => {
        console.log('Promise inside setTimeout');
    })
},0);

Promise.resolve().then(() => {
    console.log('Promise 1');

    setTimeout(() =>{
        console.log('setTimeout inside Promise');
    },0);
}).finally(() => {
    console.log('Promise 1 finally')

    return new Promise();
}).then(() => {
    console.log('嵌套 promise then');
}).finally(() => {
    console.log('嵌套 promise finally');
})

console.log('End of script')