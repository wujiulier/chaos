function createElement(type,props,...children){
    return {
        type,
        props: {...props,children}
    }
}

class Fiber {
    constructor(tag,pendingProps){
        this.tag = tag // 组件类型 function or class
        this.pendingPropsProps = pendingProps // 组件的 props
        this.stateNode = null // Dom 节点或组件实例
        this.child = null // 子节点
        this.sibling = null // 兄弟节点
        this.return = null; // 父节点
        this.effectTag = null; // 变更标记
        this.updateQueue = []; // 更新队列
    }

    // 添加更新队列
    enqueueUpdate(update){
        this.updateQueue.push(update);
    }
}

// 更新队列
class Update {
    constructor(action){
        this.action = action;
    }
}

// 函数式组件
function renderFunctionComponent(fiber){
    const { type,props } = fiber;
    const children = type(props);
    fiber.child = createFiberFromElement(children);
}

// 类组件
function renderClassComponent(fiber){
    const {type: Component,props} = fiber;
    const instance = new Component(props);
    fiber.stateNode =instance;
    const children = instance.render();
    fiber.child = createFiberFromElement(children);
}

// 创建 fiber 
function createFiberFromElement(element){
    const { type,props } = element;

    let fiber;
    if(typeof type === 'function'){
        if(type.prototype && type.prototype.render){
            fiber = new Fiber('class', props);
            renderClassComponent(fiber);
        }else{
            fiber = new Fiber('function',props);
            renderFunctionComponent(fiber);
        }
    }else{
        fiber = new Fiber('host',props);
    }

    return fiber;
}

function scheduleWork(fiber) {
    // A simple work loop to process Fiber nodes
    let currentFiber = fiber;
    while (currentFiber) {
      if (currentFiber.updateQueue.length) {
        // Apply updates to stateNode
        currentFiber.updateQueue.forEach(update => {
          currentFiber.stateNode.state = update.action(currentFiber.stateNode.state);
        });
        currentFiber.updateQueue = []; // Clear update queue
      }
  
      // Process child fibers
      if (currentFiber.child) {
        scheduleWork(currentFiber.child);
      }
  
      // Move to next sibling
      currentFiber = currentFiber.sibling;
    }
  }

  function render(element, container) {
    const fiber = createFiberFromElement(element);
    container.innerHTML = ''; // Clear container
    scheduleWork(fiber);
    debugger;
    // A real implementation would involve diffing and updating the actual DOM
  }

  
  function App(props) {
    return createElement('div', null, `Hello, ${props.name}`);
  }
  
   render(createElement(App, { name: 'World' }), {});
  
  