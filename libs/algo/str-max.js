function findMax(str){
    const set = new Set();
    let left =0;
    let maxStr = '';

    for(let right=0;right<str.length;right++){
        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        const cur = str.slice(left,right+1);

        if(maxStr.length<cur.length){
            maxStr = cur;
        }
    }

    return maxStr;
}

console.log(findMax('abcabcbb'));