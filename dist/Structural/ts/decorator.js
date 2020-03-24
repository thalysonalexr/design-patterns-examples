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
var decoratorExample;
(function (decoratorExample) {
    let Coffe = class Coffe {
        constructor(_cost, _description) {
            this._cost = _cost;
            this._description = _description;
        }
        get cost() {
            return this._cost;
        }
        get description() {
            return this._description;
        }
        details() {
            return `
      Desc: ${this.description}
      Price: ${this.cost.toFixed(2)} $`;
        }
    };
    Coffe = __decorate([
        MilkCoffe,
        WhipCoffe,
        VanillaCoffe,
        __metadata("design:paramtypes", [Number, String])
    ], Coffe);
    function MilkCoffe(constructor) {
        return class extends constructor {
            constructor(...args) {
                let [cost, description] = args;
                cost += 2;
                super(cost, `${description} + milk`);
            }
        };
    }
    function WhipCoffe(constructor) {
        return class extends constructor {
            constructor(...args) {
                let [cost, description] = args;
                cost += 5;
                super(cost, `${description} + whip`);
            }
        };
    }
    function VanillaCoffe(constructor) {
        return class extends constructor {
            constructor(...args) {
                let [cost, description] = args;
                cost += 3;
                super(cost, `${description} + vanilla`);
            }
        };
    }
    const coffe = new Coffe(5, 'Coffe Starbucks');
    console.log(coffe.details());
})(decoratorExample = exports.decoratorExample || (exports.decoratorExample = {}));
//# sourceMappingURL=decorator.js.map