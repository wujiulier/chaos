// 构造一个 with 来包裹需要执行的代码，返回 with 代码块的一个函数实例
function withedYourCode(code){
  code = "with(shadow){" + code + "})";
  return new Function("shadow",code);
}

// 可访问全局作用域的白名单列表
const access_white_list = ["func"];

// 待执行程序
const code = `func(foo)`;

// 执行上下文对象的代理属性
const ctxProxy = new Proxy(ctx,{
  has:(target,prop){
    // has 可以拦截 with 代码块中的任意属性的访问
    if(){}
  }
})