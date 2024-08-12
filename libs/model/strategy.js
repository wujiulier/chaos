// 4. 策略模式 (Strategy Pattern)
// 作用: 将算法的定义与使用分开，使得可以动态地选择算法。

// 使用场景: 需要在运行时选择不同的算法或策略，如支付系统、排序策略等。

class PaymentStrategy {
    pay(amount){}
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount){}
}

class PayPalPayment extends PaymentStrategy {
    pay(amount){}
}

class PaymentContext {
    constructor(strategy){
        this.strategy = strategy;
    }

    executePayment(amout){
        this.strategy.pay(amount)
    }
}

const creditCardPayment = new CreditCardPayment();
const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.executePayment(100); // Paying 100 with credit card.