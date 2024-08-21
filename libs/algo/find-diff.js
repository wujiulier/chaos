// 请你编写一个函数，它接收两个深度嵌套的对象或数组 obj1 和 obj2 ，并返回一个新对象表示它们之间差异。
// 该函数应该比较这两个对象的属性，并识别任何变化。返回的对象应仅包含从 obj1 到 obj2 的值不同的键。
// 对于每个变化的键，值应表示为一个数组 [obj1 value, obj2 value] 。
// 不存在于一个对象中但存在于另一个对象中的键不应包含在返回的对象中。
// 在比较两个数组时，数组的索引被视为它们的键。最终结果应是一个深度嵌套的对象，其中每个叶子的值都是一个差异数组。

function isObject(obj){
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function isEmpty(obj){
    if(!obj){
        return true;
    }
    return !Object.keys(obj).length;
}

function findDiff(obj1, obj2) {
    // 递归比较
    function compare(a, b) {
        debugger;
        // 值相同，返回空值
        if(a === b){
            return;
        }

        // 数组类型比较
        if(Array.isArray(a) && Array.isArray(b)){
            const res = {};
            let i = 0;

            while(i< a.length && i<b.length){
                const diffRes = compare(a[i],b[i]);

                if(diffRes){
                    res[`${i}`] = diffRes;
                }

                i++;
            }


            if(isEmpty(res)){
                return;
            }

            return res;
        }

        // 对象类型比较
        if(isObject(a) && isObject(b)){
            const res = {};
            const akeys = Object.keys(a);
            const bkeys = Object.keys(b);
            const keys = akeys.length>bkeys.length?bkeys:akeys;

            for(const item of keys){
                if((a?.[item] !== undefined)&&(b?.[item] !== undefined)){
                    const diffRes = compare(a[item],b[item]);

                    // console.log(diffRes);
                    if(diffRes){
                        res[item] = diffRes;
                    }
                }
            }

            if(isEmpty(res)){
                return;
            }

            return res;
        }

        //不同类型
        return [a,b];
    }

    const diffObj = compare(obj1, obj2);

    if(isEmpty(diffObj)){
        return {};
    }

    return diffObj;
}

// Example usage:
const obj1 = {
    a: 1,
    b: [2, 3],
    c: { d: 4 }
};

const obj2 = {
    a: 1,
    b: [2, 4],
    c: { d: 5 }
};

const obj3 = {}
const obj4 = {
  "a": 1, 
  "b": 2
}

obj5 = {
    "a": 1,
    "v": 3,
    "x": [],
    "z": {
      "a": null
    }
  }
  obj6 = {
    "a": 2,
    "v": 4,
    "x": [],
    "z": {
      "a": 2
    }
  }

  obj7 = {
    "a": 5, 
    "v": 6, 
    "z": [1, 2, 4, [2, 5, 7]]
  }
  obj8 = {
    "a": 5, 
    "v": 7, 
    "z": [1, 2, 3, [1]]
  }

  obj9 = {
    "a": {"b": 1}, 
  }
  obj10 = {
    "a": [5],
  }

  obj11 = {
    "a": [1, 2, {}], 
    "b": false
  }
  obj12 = {   
    "b": false,
    "a": [1, 2, {}]
  }

console.log(findDiff(obj1, obj2),'{b:  { "1": [3,4] },c: { d: [4,5] }}');
console.log(findDiff(obj3, obj4),'{}');
console.log(findDiff(obj5, obj6));
console.log(JSON.stringify(findDiff(obj7, obj8)));
console.log(JSON.stringify(findDiff(obj9, obj10)));
console.log(JSON.stringify(findDiff(obj11, obj12)));
