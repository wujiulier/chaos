// 给定两个正整数数组 boxes 和 warehouse，分别包含单位宽度的箱子的高度，以及仓库中n个房间各自的高度。仓库的房间分别从 0 到 n-1 自左向右编号, warehouse[i] (索引从0开始) 是第 i 个房间的高度。
// 箱子放进仓库时遵循下列规则:
//   - 箱子不可叠放。
//   - 可以重新调整箱子的顺序。
//   - 箱子可以从 任意方向  (左边或右边) 推入仓库中。
//   - 如果仓库中某房间的高度小于某箱子的高度，则这个箱子 和 之后的箱子都会停在这个房间的前面。
// 限制:
//   - n == warehouse.length
//   - 1 <= boxes.length, warehouse.length <= (10的5次方)
//   - 1 <= boxes[i], warehouse[i] <= (10的9次方)

// 判断是否还可以存储箱子
function isStored(a,b){
    const wOutsideMin = Math.max(b[0],b[b.length -1]);
    const isSmallbox = a.findIndex(item => item<= wOutsideMin);

    if(isSmallbox < 0) {
        return false;
    }

    return true;
}

// 判断仓库中间位置
function getMiddleWh(w){

    if(w.length%2 === 0){
        // 偶数
        const index = w.length/2;

        return w[index]>w[index-1]?index -1:index;

    }else{
        // 奇数

        return Math.floor(w.length/2);

    }
}

// 寻找相对仓库最小值
function searchMin(w,mIndex){
    const lMin = w.reduce((acc,cur,curIndex) => {
        if(curIndex> mIndex){
            return acc;
        }

        if(cur < acc){
            return cur;
        }

        return acc;
    },w[mIndex]);

    const rMin = w.reduce((acc,cur,curIndex) => {
        if(curIndex< mIndex){
            return acc;
        }

        if(cur < acc){
            return cur;
        }

        return acc;
    },w[mIndex]);

    return Math.max(lMin,rMin);
}

// 箱子简单排序，将目标值调整至首位
function sortBoxes(b,index){
    const c = b.splice(index,1);
    b.unshift(...c);
}

function findBoxesToWarehouse(boxes,warehouse){
   
    const bCount = boxes.length;

    // 迭代判断当前是否还可以存储箱子
    while(isStored(boxes,warehouse)){
        
        // 中间仓库坐标
        const middleIndex = getMiddleWh(warehouse);

        // 寻找仓库最小值
        const wMin = searchMin(warehouse,middleIndex)
        
        //是否有 <= min 尺寸箱子
        const bIndex = boxes.findIndex(item => item <= wMin);

        if(bIndex > -1){
            // 简单排序
            sortBoxes(boxes,bIndex);
            boxes.shift();
        }

        
        warehouse.splice(middleIndex,1);
        
    }


    return bCount - boxes.length;
}

console.log(findBoxesToWarehouse([1,2,2,3,4],[3,4,1,2]),4);
console.log(findBoxesToWarehouse([3,5,5,2],[2,1,3,4,5]),3);