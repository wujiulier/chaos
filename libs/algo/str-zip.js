function strZip(str){
    let fast =1;
    let slow =0;

    while(fast <= str.length){
        // if(str[fast] != str[slow] && (fast -slow) === 1){
        //     slow++;
        //     fast++;
        //     continue;
        // }

        if(str[fast] === str[slow]){
            fast++;
            continue;
        }

        str = str.replace(str.slice(slow,fast),`${str[slow]+(fast-slow)}`);
        slow = slow+2;
        fast = slow+1;
    }

    return str;
}

console.log(strZip("aabcccccaaa"));