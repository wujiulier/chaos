// case 1
// 执行上下文对象
const ctx = {
  func: variable => {
    console.log(variable);
  },
  foo: 'foo',
}

// 最简陋的沙箱
function poorestSandbox(code,ctx){
  eval(code);
}

const code = `
  ctx.foo = 'bar';
  ctx.func(ctx.foo);
`

poorestSandbox(code,ctx);