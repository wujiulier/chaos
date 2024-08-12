// 2. 旋转数组
// 题目: 旋转一个数组，使每个元素向右移动 k 步。
// 例子: 输入 [1, 2, 3, 4, 5, 6, 7] 和 3，输出 [5, 6, 7, 1, 2, 3, 4]。

function arrRotation(arr,k){
    const actK = k%arr.length;

    const a =  arr.splice(0 - actK);
    return a.concat(arr);
}

console.log(arrRotation([1, 2, 3, 4, 5, 6, 7],3));