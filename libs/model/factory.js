// 工厂模式 (Factory Pattern)
// 作用: 根据不同的输入参数返回不同类型的对象。

// 使用场景: 创建不同类型的对象时，可以用工厂模式统一管理对象的创建过程。

class Circle {
    draw(){
        console.log('draw circle');
    }
}

class Rectangle{
    draw(){
        console.log('draw rectangle');
    }
}

class ShapeFactory {
    static createShape(shapeType){
        switch(shapeType){
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            default:
                throw new Error('unknown shape type')
        }
    }
}