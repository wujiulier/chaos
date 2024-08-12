function isPalidrome(str) {
    const arrs = str.split('');
    let start = 0;
    let end = arrs.length -1;

    while(start <= end){
        if(arrs[start] != arrs[end]){
            return false;
        }

        start++;
        end--;
    }

    return true;
}

console.log(isPalidrome('romeiemor'));
console.log(isPalidrome('romeijemor'));