const tasks = [
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 1 个任务结束');
            },2*1000);
        })
    },
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 1 个任务结束');
            },2*1000);
        })
    },
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 1 个任务结束');
            },2*1000);
        })
    },
];

async function sExecute(tasks){
    for(const task of tasks){
        const res = await task();

        console.log(res);
    }
}

sExecute(tasks);