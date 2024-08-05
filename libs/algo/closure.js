// 创建私有变量
function createCounter(){
  let count = 0;
  return {
    increment: function(){
      count++;
      return count;
    },
    decrement: function(){
      count--;
      return count;
    },
    getCount: function(){
      return count;
    }
  };
}

const counter = createCounter();

// 模块模式
const Module = (function(){
  let privateVariable = 0;

  const privateFunction = () => {
    console.log(privateVariable);
  }

  return {
    publicVariable:1,
    publickFunction: () => {
      privateVariable++;
      privateFunction();
    }
  }
})()

Module.publickFunction();

// 函数记忆
function memoize(fn){
  const cache =[];
  return function(...args){
    const key = JSON.stringify(args);
    if(cache?.[key]){
      return cache[key];
    }else{
      const res = fn(...args);
      cache[key] = res;
      return res
    }
  }
}

function slowFunction(num){
  let result = 0;
  for(let i=0;i<=num;i++){
    result += 1;
  }

  return result;
}

const memoizedSlowFunction = memoize(slowFunction);