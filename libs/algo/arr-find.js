function findMax(arrs){
    let max = arrs[0];
    let index = 0;

    while(index < arrs.length){
        if(arrs[index] > max){
            max = arrs[index];
        }
        index++;
    }

    return max;
}

function findMin(arrs){
    let min = arrs[0];
    let index = 0;

    while(index < arrs.length){
        if(arrs[index]< min){
            min = arrs[index];
        }

        index++;
    }

    return min;
}

console.log(findMax([4, 2, 7, 1, 9]));
console.log(findMin([4, 2, 7, 1, 9]));