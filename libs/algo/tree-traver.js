// 2. 树的遍历
// 题目: 实现树的不同遍历方法（前序、中序、后序）。
// 例子: 对于二叉树 1 -> (2, 3)，前序遍历输出 [1, 2, 3]，中序遍历输出 [2, 1, 3]，后序遍历输出 [2, 3, 1]。


const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left:null,
            right: null,
        },
        right: {
            value: 5,
            left:null,
            right: null,
        },
    },
    right:{
        value: 3,
        left: {
            value: 6,
            left:null,
            right: null,
        },
        right: {
            value: 7,
            left:null,
            right: null,
        }
    }
}


// 前序 -> root -> left -> right
function treeQ(tree){
    const stack = [];
    stack.push(tree);

    while(stack.length){
        const cur = stack.pop();

        console.log(cur.value);

        if(cur.right){
            stack.push(cur.right);
        }

        if(cur.left){
            stack.push(cur.left);
        }
    }
}

// 中序
function treeZ (tree){
    const stack = [];
    let current = tree;

    while(current !== null || stack.length > 0){
        while(current !== null){
            stack.push(current);
            current = current?.left;
        }
        current = stack.pop();
        console.log(current.value);
        current = current?.right;
    }
}

function treeH(tree){
    const stack = [];
    const output = [];

    stack.push(tree);

    while(stack.length > 0){
        const current = stack.pop();

        if(current.left !== null){
            stack.push(current.left);
        }

        if(current.right !== null){
            stack.push(current.right);
        }

        output.push(current);
    }

    while(output.length > 0){
        const current = output.pop();

        console.log(current.value);
    }
}
// treeQ(tree);
// treeZ(tree);
treeH(tree);
