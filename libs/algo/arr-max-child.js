function findMaxChild(arr){
    if(arr == 0){
        return 0;
    }

    if(arr.length === 1){
        return arr[0];
    }
    
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for(let i=1;i<arr.length;i++){
        maxCurrent = Math.max(arr[i],maxCurrent+ arr[i]);
        maxGlobal = Math.max(maxGlobal,maxCurrent);
    }
    return maxGlobal;
}

console.log(findMaxChild([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 输出: 6
console.log(findMaxChild([1])); // 输出: 1
console.log(findMaxChild([5, 4, -1, 7, 8])); // 输出: 23