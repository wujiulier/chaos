function myNew(constructor, ...args){
    const instance = Object.create(constructor.prototype);

    const result = constructor.apply(instance,args);

    return (result && typeof result === 'object')?result: instance;
}

function Person(name,age){
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log(`hello,${this.name},${this.age}`)
    }
}

const person1 = new Person('小明',13);
person1.sayHello();

const person2 = myNew(Person,'小黑',14);

person2.sayHello();

