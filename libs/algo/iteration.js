// 迭代-阶乘
function factorial(n){
  let result = 1;

  while(n>0){
    result = result * n;
    n--;
  }

  return result;
}

// 迭代-斐波那契数列
function fibonacci(n){
  if(n <= 1){
    return n;
  }

  let index = 2;
  let prev = 1;
  let prevPrev = 0;

  while(index <= n){
    const temp = prev + prevPrev;
    prevPrev = prev;
    prev = temp;
    index++;
  }

  return prev;
}

console.log(factorial(5));
console.log(fibonacci(7));