function ydl(arrs){
    const n = arrs.length;
    let i = 0;

    while(i<arrs.length){
        const cur = arrs[i];

        if(cur === 0){
            arrs.splice(i,1);
        }else{
            i++;
        }
    }

    return arrs.concat(new Array(n -i).fill(0));
}

console.log(ydl([0,1,9,0,2,0,3,23,0,13]));