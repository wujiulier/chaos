// apply,call,bind 用于设置函数的 this 和传递参数

// call 和 apply 类似，只是传参格式不同，call 是参数列表，apply 是数组
// bind 是创建一个新的函数，在调用时设置其 this 和参数
func.call(thisArg,arg1,arg2);
func.apply(thisArg,[arg1,arg2])

bindFunc = func.bind(thisArg,arg1,arg2)
bindFunc()
