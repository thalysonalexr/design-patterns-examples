"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversionOfControlExample;
(function (inversionOfControlExample) {
    const Service = () => {
        return (target) => {
            Ioc.getInstance().store(target);
        };
    };
    class Ioc {
        constructor() {
            this._container = new Array();
        }
        static getInstance() {
            return Ioc._instance;
        }
        store(target) {
            this._container.push(target);
        }
        show() {
            return this._container;
        }
        resolve(target) {
            const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
            const injections = tokens.map((token) => Ioc.getInstance().resolve(token));
            return new target(...injections);
        }
    }
    // singleton
    Ioc._instance = new Ioc;
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
    })(Pay = inversionOfControlExample.Pay || (inversionOfControlExample.Pay = {}));
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
        let Order = class Order {
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
        };
        Order = __decorate([
            Service(),
            __metadata("design:paramtypes", [Pay.CreditCard])
        ], Order);
        Buy.Order = Order;
    })(Buy = inversionOfControlExample.Buy || (inversionOfControlExample.Buy = {}));
    // inject dependency payment with credit card
    const order1 = Ioc.getInstance().resolve(Buy.Order);
    order1.addProduct(new Buy.Product('Coke', 7.60));
    order1.addProduct(new Buy.Product('Cheetos', 9.15));
    order1.addProduct(new Buy.Product('Doritos', 10.20));
    order1.resume();
})(inversionOfControlExample = exports.inversionOfControlExample || (exports.inversionOfControlExample = {}));
//# sourceMappingURL=ioc.js.map