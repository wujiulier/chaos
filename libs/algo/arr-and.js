function arrAnd(arrs,num){
    const numMap = new Map();
    let i = 0;

    while(i<arrs.length){
        const cur = arrs[i];
        const count = num -cur;
        if(numMap.has(count)){
            break;
        }

        numMap.set(cur,i);
        i++;
    }

    return [numMap.get(num - arrs[i]),i];
}

console.log(arrAnd([2, 7, 11, 15],26));