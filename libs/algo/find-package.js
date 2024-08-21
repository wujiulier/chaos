// 传送带上的包裹必须在 days 天内从一个港口运送到另一个港口。
// 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量（weights）的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
// 返回能在 days 天内将传送带上的所有包裹送达的船的最低运载能力。

// 二维数组中寻找最大值
function findMaxInArray(arrs){
    let max = 0;

    for(const curArr of arrs){
        const count = curArr.reduce((acc,cur) => {
            return acc+cur;
        },0);

        if(count > max){
            max = count
        }
    }

    return max;
}

function findMiniCapacity(weights,days){
    let min = Number.MAX_VALUE;

    function backtrack(start,target,path){

        // 没有天数时，停止执行
        if(target < 0){
            return;
        }

        // 天数没有 & 包裹也没有，存储当前情况
        if(target === 0 && start >= weights.length){
            const max = findMaxInArray(path);

            if(max < min){
                min=max;
            }
            return;
        }

        // 减少算法执行，当所剩 weights 和 天数相当时，每天赋予一个包裹
        // weights 相对天数还有剩余时
        for(let i=start;i<=(weights.length - target);i++){
            path.push(weights.slice(start,i+1));
            backtrack(i+1,target - 1,path);
            path.pop();
        }
    }

    backtrack(0,days,[]);

    return min;
}
// const { min,targetPath } = findMiniCapacity([1,2,3,4,5,6,7,8,9,10],5);
// console.log(min,targetPath);

console.log(findMiniCapacity([3,2,2,4,1,4],3))