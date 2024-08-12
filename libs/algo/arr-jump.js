// 2. 跳跃游戏
// 题目: 判断能否从数组的第一个位置跳跃到最后一个位置，数组中的每个元素表示从该位置能跳跃的最大长度。
// 例子: 输入 [2, 3, 1, 1, 4]，输出 true。

function canJump(nums){
    let farthest = 0;

    for(let i=0;i<nums.length;i++){
        if(i> farthest){
            return false;
        }

        farthest = Math.max(farthest,i+nums[i]);

        if(farthest >= nums.length -1){
            return true;
        }
    }

    return false;
}