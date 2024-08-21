// 行程长度编码, 是一种常用的字符串压缩方法，它将连续的相同字符（重复 2 次或更多次）替换为字符和表示字符计数的数字（行程长度）。例如，用此方法压缩字符串 "aabccc" ，将 "aa" 替换为 "a2" ，"ccc" 替换为` "c3" 。因此压缩后的字符串变为 "a2bc3" 。
// 注意，本问题中，压缩时没有在单个字符后附加计数 '1' 。
// 给你一个字符串 s 和一个整数 k 。你需要从字符串 s 中删除最多 k 个字符，以使 s 的行程长度编码长度最小。
// 请你返回删除最多 k 个字符后，s 行程长度编码的最小长度 。


function encodeLen(s){
    let fast =1;
    let slow =0;

    while(fast <= s.length){

        if(s[fast] === s[slow]){
            fast++;
            continue;
        }

        if((fast - slow)>=2){
            s = s.replace(s.slice(slow,fast),`${s[slow]+(fast-slow)}`);
            slow = slow+2;
        }else{
            slow = slow+1;
        }
        fast = slow+1;
    }

    return s;
}

function findMiniEncodeLen(s,k){
    const sLen = s.length;
    let minEncodeStr = s;

    if(k === 0){
        return encodeLen(s).length;
    }
    
    //极限情况处理，若 s-k <= 2 的情况无需判断，
    // 例如 ab -> ab,aa -> a2, 长度是一致的
    // b -> b
    if((sLen - k) <=2){
        return sLen - k;
    }

    // 随机删除，再通过编码长度，记录最小长度情况
    function backtrack(start,target,eStrArr){

        // 没有删除次数时，停止执行
        if(target < 0){
            return;
        }

        // 删除次数为空时，记录当前情况
        if(target === 0){
            let eStr = eStrArr.join('').replaceAll('&','');

            eStr = encodeLen(eStr);

            if(eStr.length < minEncodeStr.length){
                minEncodeStr = eStr;
            }
            return;
        }

        // 减少算法执行，当所剩删除次数 和 剩余字符相当时，每次删除匹配一个字符
        for(let i=start;i<=(eStrArr.length - target);i++){
            const tempStr = eStrArr.slice(i,i+1);
            eStrArr.splice(i,1,'&');
            backtrack(i+1,target - 1,eStrArr);
            eStrArr.splice(i,1,tempStr);
        }
    }

    backtrack(0,k,s.split(''))

    return minEncodeStr.length;
}

console.log(findMiniEncodeLen('aaabcccd',2));
console.log(findMiniEncodeLen('aabbaa',2));
console.log(findMiniEncodeLen('aaaaaaaaaaa',0));