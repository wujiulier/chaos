function hasPairWithSum(arr,target){
    const seen = new Set();

    for(const num of arr){
        const com = target - num;

        if(seen.has(com)){
            return true;
        }

        seen.add(num);
    }

    return false;
}

const array = [1, 2, 3, 4, 5];
const target = 7;
console.log(hasPairWithSum(array, target)); // 输出 true