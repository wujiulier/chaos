function findMin(arr,k){
    arr.sort((a,b) => a-b);

    return arr[k-1]
}

// 示例用法
console.log(findMin([3, 2, 1, 5, 6, 4], 2)); // 输出: 2
console.log(findMin([3, 2, 1, 5, 6, 4], 4)); // 输出: 4// 示例用法
console.log(findMin([3, 2, 1, 5, 6, 4], 2)); // 输出: 2
console.log(findMin([3, 2, 1, 5, 6, 4], 4)); // 输出: 4