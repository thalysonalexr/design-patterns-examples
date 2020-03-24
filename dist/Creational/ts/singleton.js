"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var singletonExample;
(function (singletonExample) {
    class MongoODM {
        constructor() {
            this.uriConnection = '';
        }
        // singleton instance
        static getInstance() {
            if (null === MongoODM._instance) {
                MongoODM._instance = new MongoODM();
            }
            return MongoODM._instance;
        }
        connect(uri) {
            this.uriConnection = uri;
        }
        disconnect() {
            console.log(`disconnect to ${this.uriConnection}`);
        }
        query(sql) {
            console.log(sql);
        }
    }
    MongoODM._instance = null;
    class Model {
        constructor(database) {
            this.database = database;
        }
        create(data) {
            this.database.query('insert into...');
            data.forEach(value => {
                console.log(` - ${value}`);
            });
        }
    }
    class User {
        constructor(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
        data() {
            return [this.id, this.name, this.email];
        }
    }
    const user = new User('ofa4-b4a5-5a8b-s3b7', 'Thalyson Rodrigues', 'tha.motog@gmail.com');
    MongoODM.getInstance().connect('mongodb://localhost:27017/mydb');
    const model = new Model(MongoODM.getInstance());
    model.create(user.data());
})(singletonExample = exports.singletonExample || (exports.singletonExample = {}));
//# sourceMappingURL=singleton.js.map