function findCommonPrefix(arr){
    if(arr.length === 0){
        return '';
    }

    let prefix = arr[0];

    for(let i=1;i<arr.length;i++){
        while(arr[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0,prefix.length -1);
            if(prefix === ''){
                return '';
            }
        }
    }

    return prefix;
}

console.log(findCommonPrefix(["flower", "flow", "flight"])); // 输出: "fl"
console.log(findCommonPrefix(["dog", "racecar", "car"]));    // 输出: ""
console.log(findCommonPrefix(["ab", "abc", "abcd"]));        // 输出: "ab"