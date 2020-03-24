"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compositeExample;
(function (compositeExample) {
    class Product {
        constructor(title, price, description) {
            this.title = title;
            this.price = price;
            this.description = description;
        }
    }
    class Item {
        constructor(_product, _count = 0) {
            this._product = _product;
            this._count = _count;
            this._total = 0;
            this._total += this._product.price * this._count;
        }
        get total() {
            return this._total;
        }
        list() {
            console.log('----------------------------');
            console.log(`title - ${this._product.title}`);
            console.log(`price - ${this._product.price}`);
            console.log(`description - ${this._product.description}`);
            console.log(`Quantity - ${this._count}`);
            console.log(`======== Total item - ${this._total.toFixed(2)} $ ========`);
        }
    }
    class Cart {
        constructor() {
            // composite | 1 cart have many <T>items
            this._items = new Array();
            this._total = 0;
        }
        add(item) {
            this._items.push(item);
            this._total += item.total;
        }
        list() {
            this._items.forEach(item => {
                item.list();
            });
            console.log(`Price total: ${this._total.toFixed(2)} $`);
        }
    }
    const cart = new Cart();
    cart.add(new Item(new Product('Coca-Cola', 8.60, 'Soda of Cola'), 2));
    cart.add(new Item(new Product('Heineken', 5.90, 'Pure Malt Lager Beer'), 6));
    cart.add(new Item(new Product('Bohemia', 4.00, 'Pure Malt Beer'), 6));
    cart.list();
})(compositeExample = exports.compositeExample || (exports.compositeExample = {}));
//# sourceMappingURL=composite.js.map