const createQueue = (limit) => {
    const queue = [];
    let activeCount = 0;

    const processQueue = () => {
        while(activeCount<limit && queue.length > 0){
            const [promiseFactory,resolve,reject] = queue.shift();
            activeCount++;
            promiseFactory()
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    activeCount--;
                    processQueue();
                })
        }
    }

    const add = (promiseFactory) => {
        return new Promise((resolve,reject) => {
            queue.push([promiseFactory,resolve,reject]);
            processQueue();
        })
    }

    return { add };
}

const featchData = (url) => {
    return () => fetch(url).then(res => res.json());
}

const queue = createQueue(3);

const urls = [];

urls.forEach(url => {
    queue.add(featchData(url)).then(res => console.log(res)).catch(err => console.err(err));
})