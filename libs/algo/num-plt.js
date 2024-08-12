function plt(n){
    if(n === 1){
        return 1;
    }

    if(n === 2){
        return 2;
    }

    return plt(n-1)+plt(n-2);
}

function climbStairs(n) {
    if (n === 1) return 1; // 只有 1 阶时只有一种方法
  
    let dp = new Array(n + 1);
    dp[1] = 1; // 只有 1 阶时的方法数为 1
    dp[2] = 2; // 2 阶时的方法数为 2
  
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    return dp[n];
  }

console.log(plt(10));
console.log(climbStairs(10));