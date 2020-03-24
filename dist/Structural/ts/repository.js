"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repositoryExample;
(function (repositoryExample) {
    // layer to persist db: use array in this example
    class RepositoryDefault {
        constructor() {
            this._items = new Array();
        }
        store(data) {
            this._items.push(data);
        }
        getBy(param, value) {
            const el = this._items.find((element) => element[param] === value);
            return el === undefined ? null : el;
        }
        listAll() {
            return this._items;
        }
    }
    class ProductRepository extends RepositoryDefault {
        createNewProduct(data) {
            this.store(data);
        }
        getProductById(id) {
            return this.getBy('id', id);
        }
        getProductByTitle(title) {
            return this.getBy('title', title);
        }
        listAllProducts() {
            return this.listAll();
        }
    }
    class Product {
        constructor(_id, _title, _price) {
            this._id = _id;
            this._title = _title;
            this._price = _price;
        }
        get id() { return this._id; }
        set id(value) { this._id = value; }
        get title() { return this._title; }
        set title(value) { this._title = value; }
        get price() { return this._price; }
        set private(value) { this._price = value; }
    }
    const repository = new ProductRepository();
    repository.createNewProduct(new Product(1, 'Coffe Starbucks', 7.50));
    repository.createNewProduct(new Product(2, 'Cheetos', 6.50));
    repository.createNewProduct(new Product(3, 'Doritos', 10.50));
    console.log(repository.getProductById(3)); // { "_id": 3, "_title": "Doritos", "_price": 10.5 }  
})(repositoryExample = exports.repositoryExample || (exports.repositoryExample = {}));
//# sourceMappingURL=repository.js.map