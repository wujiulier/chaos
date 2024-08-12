// 并发限制

const tasks = [
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 1 个任务结束');
            },3*1000);
        })
    },
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 2 个任务结束');
            },4*1000);
        })
    },
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('第 3 个任务结束');
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

function conLimit(tasks,limit){
    const limlitFunc = (limit) => {
        const queue = [];
        let index = 0;

        function execute (){
            while(index < limit && queue.length){

                const [task,resolve] = queue.shift();

                task().then(res => {
                    console.log(res);
                    resolve(res);
                }).finally(() => {
                    index--;
                    execute();
                })
                index++;
            }
        }
        
        return (task) => {
            return new Promise((resolve) => {
                queue.push([task,resolve])
                execute();
            })
        }
    }

    const limitExecute = limlitFunc(limit);

    for(let task of tasks){
        limitExecute(task);
    }
}

conLimit(tasks,2);