class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// 前序遍历
function preIterative(node){
    if(node === null){
        return ;
    }

    const statck = [];
    statck.push(node);

    while(statck.length > 0){
        const current = statck.pop();

        console.log(current.value);
        
        if(current.right != null){
            statck.push(current.right);
        }
        if(current.left != null){
            statck.push(current.left);
        }
    }
}

// 中序遍历

function inorderIterative(node){
    const stack = [];

    let current = node;

    while(stack.length > 0 || current !== null){
        while(current !== null){
            stack.push(current);
            console.log(current.value);
            current = current.left;
        }

        current = stack.pop();
        // console.log(current.value);
        current = current.right;
    }
}

// 后序遍历
function postorderIterative(node){
    if(node === null){
        return;
    }

    const stack = [];
    const output = [];

    stack.push(node);

    while(stack.length > 0){
        const current = stack.pop();
        output.push(current);

        if(current.left !== null){
            stack.push(current.left);
        }

        if(current.right !== null){
            stack.push(current.right);
        }
    }

    while(output.length > 0){
        const current = output.pop();
        console.log(current.value);
    }
}

// 深度遍历
function dfsIterative(node){
    if(node === null){
        return;
    }

    const stack = [];
    stack.push(node);

    while(stack.length > 0){
        const current = stack.pop();

        console.log(current.value);

        if(current.right !== null){
            stack.push(current.right);
        }

        if(current.left !== null){
            stack.push(current.left);
        }
    }
}

function bfsIterative(node){
    if(node === null){
        return;
    }

    const queue = [];
    queue.push(node);

    while(queue.length > 0){
        const current = queue.shift();

        console.log(current.value);

        if(current.left !== null){
            queue.push(current.left);
        }

        if(current.right !== null){
            queue.push(current.right);
        }
    }
}

// preIterative(root);
// inorderIterative(root);
// postorderIterative(root);
// dfsIterative(root);
bfsIterative(root);