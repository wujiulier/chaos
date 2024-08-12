// 2. 找出数组中的缺失元素
// 题目: 给定一个包含 n 个不同整数的数组，找出缺失的整数。
// 例子: 输入 [0, 1, 3]，输出 2。

function findMiss(arr){
    const n = arr.length;
    const eN = n*(n+1)/2;
    const aN = arr.reduce((acc,num) => {
        return acc+num;
    },0)

    return eN-aN;
}

console.log(findMiss([0, 1, 3])); // 输出: 2
console.log(findMiss([0, 2]));    // 输出: 1
console.log(findMiss([1, 2, 3])); // 输出: 0