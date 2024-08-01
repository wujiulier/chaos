var str = '';
for(let i=0;i<100;i++){
  str += `var test_${i} = ${i};\n`;
}

console.time('eval exec');
eval(str);
console.timeEnd('eval exec');
console.time('eval exec2');
eval(str);
console.timeEnd('eval exec2');

console.time('fn exec');
var fn = new Function(str);
fn();
console.timeEnd('fn exec');
console.time('fn exec2');
fn();
console.timeEnd('fn exec2');