// 给你 n 个包裹，你需要把它们装在箱子里，每个箱子装一个包裹。总共有 m 个供应商提供 不同尺寸 的箱子(每个规格都有无数个箱子)。如果一个包裹的尺寸小于等于一个箱子的尺寸，那么这个包裹就可以放入这个箱子之中。
// 包裹的尺寸用一个整数数组 packages 表示，其中 packages[i] 是第 i 个包裹的尺寸。供应商用二维数组 boxes 表示，其中 boxes[j] 是第 j 个供应商提供的所有箱子尺寸的数组。
// 你想要选择 一个供应商 并只使用该供应商提供的箱子，使得总浪费空间最小 。对于每个装了包裹的箱子，我们定义 浪费的 空间等于 箱子的尺寸 - 包裹的尺寸 。总浪费空间为所有 箱子中浪费空间的总和。
// 比方说，如果你想要用尺寸数组为 [4,8] 的箱子装下尺寸为 [2,3,5] 的包裹，你可以将尺寸为 2 和 3 的两个包裹装入两个尺寸为 4 的箱子中，同时把尺寸为 5 的包裹装入尺寸为 8 的箱子中。总浪费空间为 (4-2) + (4-3) + (8-5) = 6 。
// 请你选择 最优 箱子供应商，使得总浪费空间最小 。如果无法将所有包裹放入箱子中，请你返回 -1 。由于答案可能会很大，请返回它对 + 7 (10的9次方 + 7) 取余的结果 。


// 找到相近的箱子
function findSimilarSizeBox (package,boxs){
    let min = Number.MAX_VALUE;

    for(const item of boxs){
        if(item >= package && item <= min){
            min = item;
        }
    }

    return min;
}

function findMiniWaste(packages,boxes){
    let miniWaste = Number.MAX_VALUE;

    // 简单判断：包裹尺寸大于箱子尺寸,返回 -1
    const maxPackage = packages.reduce((acc,cur) => {
        if(cur > acc){
            return cur;
        }

        return acc;
    },0);

    const maxBox = boxes.reduce((acc,cur) => {
        const max = cur.reduce((cAcc,cCur) => {
            return cAcc>cCur?cAcc:cCur;
        },acc);

        return acc>max?acc:max;
    },0);

    if(maxBox<maxPackage){
        return -1;
    }

    // 组合所有情况
    for(const box of boxes){
        let i = 0;
        let waste = 0;
        const path = [];
        while(i< packages.length){
            const cur = packages[i];
            const min = findSimilarSizeBox(cur,box);
            path.push(min);

            waste = waste + min - cur;
            i++;
        }

        if(waste < miniWaste){
            miniWaste = waste;
        }
    }

    return miniWaste % 1000000007;
}

console.log(findMiniWaste([2,3,5],[[4,8],[2,8]]));
console.log(findMiniWaste([2,3,5],[[1,4],[2,3],[3,4]]));
console.log(findMiniWaste([3,5,8,10,11,12],[[12],[11,9],[10,5,14]]));