// 超出时间限制
// var maxProfit = function(prices) {
//   let max = 0;
//   const n = prices.length;
//   for(let i = 0;i<n;i++){
//       for(let j=i+1;j<n;j++){
//           const diff = prices[j] - prices[i];

//           if(diff > max){
//               max = diff;
//           }
//       }
//   }
  
//   return max;

// };

var maxProfit2 = function (prices:number[]) {
  let minPrice = Number.MAX_VALUE, maxPrice = 0;
  prices.forEach(price => {
    console.log(price,minPrice,maxPrice);
      minPrice = price < minPrice ? price: minPrice;
      maxPrice = price - minPrice > maxPrice ? price - minPrice : maxPrice;
  })
  return maxPrice;
};

const prices = [7,1,5,3,6,4];

maxProfit2(prices);