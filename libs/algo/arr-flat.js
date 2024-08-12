// 数组扁平化

function arrFlat(arrs){
    const queue = [];
    const res = [];
    queue.push(arrs);

    while(queue.length){
        
        const cur = queue.shift();

        if(cur instanceof Array){
            queue.unshift(...cur);
        }else{
            res.push(cur);
        }
    }

    return res;
}

console.log(arrFlat([1, [2, [3, 4], 5], 6]));