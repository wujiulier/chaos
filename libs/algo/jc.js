function jc(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n* jc(n-1);
}

console.log(jc(5));