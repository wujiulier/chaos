function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[Math.floor(arr.length /2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x> pivot);

    return [...quickSort(left),...middle,...quickSort(right)];
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // 合并两个数组，直到一个数组为空
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    // 将剩余的元素加入结果数组
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

console.log(quickSort([4,2,7,1,8,9]))
console.log(mergeSort([4,2,7,1,8,9]))