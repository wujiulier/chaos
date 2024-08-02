// 递归-阶乘
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 递归-斐波那契数列
function fibonacci(n){
  if(n<=1){
    return n;
  }

  return fibonacci(n-1) + fibonacci(n-2);
}

console.log(factorial(5));
console.log(fibonacci(6));