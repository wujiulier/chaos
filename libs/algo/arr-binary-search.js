// 2. 二分查找
// 题目: 在一个已排序的数组中查找一个元素的索引。
// 例子: 输入 [1, 2, 3, 4, 5] 和目标值 4，输出 3。

function binarySearch(nums,target){
    let left = 0;
    let right = nums.length -1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] < target){
            left = mid +1;
        }else{
            right = mid -1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 输出: 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // 输出: -1