const varBox = {}
const window = {}
const fakeWindow = new Proxy(window, {
  get(target,key){
    if(overides[key]){
      return;
    }
    return varBox[key] || window[key];
  },
  set(target,key,value){
    varBox[key] = value;
    return true;
  },
  has(target,key){
    return true;
  }
})

// const fn = new Function('window',`
//   with(window)
//     $CONFIG = { a: true}; // 能被成功写到沙箱里
  
//   if ($CONFIG.a) { // Uncaught ReferenceError: $CONFIG is not defined
//       console.log(1)
//   }
//   `);
// const fn = new Function('window',`
//   with(winddow)
//     window.localstorage.setItem('1',123)
//   `)

const fn = new Function('window',`
  width(window){}
  `)
fn(fakeWindow)