// 汇总所有异步结果

const tasks = [
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 1 个任务结束');
            },3*1000);
        })
    },
    () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('第 2 个任务结束');
            },4*1000);
        })
    },
    () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('第 3 个任务结束');
            },1*1000);
        })
    },
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 4 个任务结束');
            },4*1000);
        })
    },
];

function memoize(task){
    return new Promise((resolve) => {
        task().then(() => {
            resolve(1);
        }).catch(() => {
            resolve(0);
        });
    })
}
function execute(tasks){
    Promise.all(tasks.map(item => memoize(item))).then(res => {
        console.log(res);
    })
}

function execute1(tasks){
    Promise.allSettled(tasks.map(item => item())).then(res => console.log(res));
}

execute(tasks);
execute1(tasks);