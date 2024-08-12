const task = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('任务执行结束')
        },5*1000);
    })
}

const waitControl = (task,waitTime) => {
    return Promise.race([task(),new Promise((resolve) => {
        setTimeout(() => {
            resolve('任务超时中断');
        },waitTime);
    })])
}


function execute(){
    waitControl(task,3*1000).then(res => {
        console.log(res);
    })
}

execute();