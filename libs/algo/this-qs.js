var a = {
    b: function() {console.log(this)},
    c: () => console.log(this)
}

a.b() //
let fn = a.b
fn() //
a.c()
let fo = a.c
fo()
fo.call(a, [])


var d = 'd'
function func(){
    console.log(this.d);
}
func();

const fund = function (){
    console.log(this.d);
}

fund();

function originalFunction(a, b) {
    return a + b;
}

// 获取函数的字符串表示
const functionString = originalFunction.toString();
console.log(functionString);

// 使用 Function 构造函数创建新函数
const copiedFunction = new Function('return ' + functionString)();