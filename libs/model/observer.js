// 观察者模式 (Observer Pattern)
// 作用: 实现当一个对象的状态发生变化时，所有依赖于它的对象都会得到通知。

// 使用场景: 实现事件驱动的系统，如订阅/发布系统、天气预报系统等。

class Subject{
    constructor(){
        this.observers = [];
    }

    addObserver(observer){
        this.observers.push(observer);
    }

    notifyObservers(message){
        this.observers.forEach(item => item.update(message));
    }
}

class Observer {
    update(message){
        console.log('message');
    }
}