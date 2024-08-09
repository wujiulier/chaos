// case 2
// 定义全局变量 foo
var foo = "foo1";

// 执行上下文对象
const ctx = {
  func: variable => {
    console.log(variable);
  },
  foo: 'f1',
}

// 非常简陋的沙箱
function veryPoorSandbox(code,ctx){
  // 使用 with，将 eval 函数执行时的执行上下文指定为 ctx
  with(ctx){
    // eval 可以将字符串按 js 代码执行，如 eval('1+2')
    eval(code);
  }
}

const code = `func(foo)`;

veryPoorSandbox(code,ctx);