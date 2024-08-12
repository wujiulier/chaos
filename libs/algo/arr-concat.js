function concat(arr1,arr2){
    let l1 = 0;
    let l2 = 0;
    let res = [];

    while(l1<arr1.length && l2 < arr2.length){
        if(arr1[l1] < arr2[l2]){
            res.push(arr1[l1]);
            l1++;
        }else{
            res.push(arr2[l2]);
            l2++;
        }
    }

    if(l1<arr1.length){
        return res.concat(arr1.slice(l1));
    }

    if(l2<arr2.length){
        return res.concat(arr2.slice(l2));
    }
}

console.log(concat([1,3,5],[2,4,6]));
console.log(concat([1,3,7],[2,4,6]));