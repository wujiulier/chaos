function isKh(str){
    const map = {
        ")":"(",
        "(":")",
        "[":"]",
        "]":"[",
        "{":"}",
        "}":"{"
    };

    const stack = [];

    for(let i=0;i<str.length;i++){
        const cur = str[i];
        if(stack[stack.length -1] != cur){
            stack.push(map[cur]);
        }else{
            stack.pop();
        }
    }

    if(stack.length){
        return false;
    }

    return true;
}

console.log(isKh("()"));    // 输出: true
console.log(isKh("()[]{}")); // 输出: true
console.log(isKh("(]"));    // 输出: false
console.log(isKh("([)]"));  // 输出: false
console.log(isKh("{[]}"));  // 输出： true