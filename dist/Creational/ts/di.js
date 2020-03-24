"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependencyInjectionExample;
(function (dependencyInjectionExample) {
    let Pay;
    (function (Pay) {
        class CreditCard {
            constructor() {
                this.typePayment = 'CreditCard';
            }
        }
        Pay.CreditCard = CreditCard;
        class PaymentSlip {
            constructor() {
                this.typePayment = 'PaymentSlip';
            }
        }
        Pay.PaymentSlip = PaymentSlip;
        class BankTransfer {
            constructor() {
                this.typePayment = 'BankTransfer';
            }
        }
        Pay.BankTransfer = BankTransfer;
    })(Pay = dependencyInjectionExample.Pay || (dependencyInjectionExample.Pay = {}));
    let Buy;
    (function (Buy) {
        class Product {
            constructor(_name, _price) {
                this._name = _name;
                this._price = _price;
            }
            get name() { return this._name; }
            set name(value) { this._name = value; }
            get price() { return this._price; }
            set price(value) { this._price = value; }
        }
        Buy.Product = Product;
        class Order {
            // dependency injection by constructor
            constructor(_payment) {
                this._payment = _payment;
                this._products = new Array();
            }
            addProduct(product) {
                this._products.push(product);
            }
            resume() {
                console.log(`Payment method: ${this._payment.typePayment}`);
                this._products.forEach(product => {
                    console.log(`Product: ${product.name}`);
                    console.log(`Price: ${product.price.toFixed(2)} $`);
                });
            }
        }
        Buy.Order = Order;
    })(Buy = dependencyInjectionExample.Buy || (dependencyInjectionExample.Buy = {}));
    const paymentCard = new Pay.CreditCard();
    const paymentBank = new Pay.BankTransfer();
    // inject dependency payment with credit card
    const order1 = new Buy.Order(paymentCard);
    order1.addProduct(new Buy.Product('Coke', 7.60));
    order1.addProduct(new Buy.Product('Cheetos', 9.15));
    order1.addProduct(new Buy.Product('Doritos', 10.20));
    // inject dependency payment with bank transfer
    const order2 = new Buy.Order(paymentBank);
    order2.addProduct(new Buy.Product('Hair Cream', 6.20));
    order2.addProduct(new Buy.Product('Ice Cream', 10.95));
    order2.addProduct(new Buy.Product('Beer Heineken', 2.20));
    order2.addProduct(new Buy.Product('French Fries', 5.25));
    order1.resume();
    console.log(); // space
    order2.resume();
})(dependencyInjectionExample = exports.dependencyInjectionExample || (exports.dependencyInjectionExample = {}));
//# sourceMappingURL=di.js.map