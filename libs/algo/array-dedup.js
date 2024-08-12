// 数组去重
function arrDeDup (arrs) {
    let i=0;
    while(i<arrs.length){
        const cur = arrs[i];

        if(arrs.findLastIndex((item) => item === cur) != i){
            arrs.splice(i,1);
            continue;
        }

        i++;
    }

    return arrs;
}

console.log(arrDeDup([1,2,3,2,3,4,5,3,4,5,3,6,5,6,7,7,7]))