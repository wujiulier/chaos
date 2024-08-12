// 2. 组合总和
// 题目: 给定一个目标值 target 和一个数组 candidates，找出所有和为目标值的组合。
// 例子: 输入 [2, 3, 6, 7] 和 7，输出 [[2, 2, 3], [7]]。

function findComb(arr,num){
    const result = [];

    function backtrack(start,target,path){
        if(target === 0){
            result.push([...path]);
            return;
        }

        if(target<0){
            return;
        }

        for(let i=start;i<arr.length;i++){
            path.push(arr[i]);
            backtrack(i,target - arr[i],path);
            path.pop();
        }
    }

    backtrack(0,num,[]);

    return result;
}

console.log(findComb([2,3,6,7],7));