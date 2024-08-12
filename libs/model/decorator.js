// 5. 装饰器模式 (Decorator Pattern)
// 作用: 动态地给对象添加额外的功能，而不改变其结构。

// 使用场景: 动态添加功能到对象，如通知系统、UI组件装饰等。

class Notification {
    send(){}
}

class NotificationDecorator{
    constructor(notification){
        this.notification = notification;
    }

    send(){
        this.notififcation();
    }
}