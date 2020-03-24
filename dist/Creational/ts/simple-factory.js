"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simpleFactoryExample;
(function (simpleFactoryExample) {
    class Car {
        constructor(_name) {
            this._name = _name;
        }
        drive() {
            return 'Vrummmmm...';
        }
        getName() {
            return `Car: ${this.name}`;
        }
        get name() {
            return this._name;
        }
    }
    class Amarok extends Car {
        constructor(name) { super(name); }
    }
    class HB20 extends Car {
        constructor(name) { super(name); }
    }
    class Prisma extends Car {
        constructor(name) { super(name); }
    }
    class CarFactory {
        static create(car = undefined) {
            let instance;
            switch (car) {
                case 'Amarok':
                    instance = new Amarok('Amarok');
                    break;
                case 'HB20':
                    instance = new HB20('HB20');
                    break;
                case 'Prisma':
                    instance = new Prisma('Prisma');
                    break;
                default:
                    instance = new Car('Car');
                    break;
            }
            return instance;
        }
    }
    const car1 = CarFactory.create('Amarok');
    const car2 = CarFactory.create('HB20');
    const car3 = CarFactory.create('Prisma');
    const car4 = CarFactory.create();
    [car1, car2, car3, car4].forEach(carro => {
        console.log(`${carro.getName()} - ${carro.drive()}`);
    });
})(simpleFactoryExample = exports.simpleFactoryExample || (exports.simpleFactoryExample = {}));
//# sourceMappingURL=simple-factory.js.map