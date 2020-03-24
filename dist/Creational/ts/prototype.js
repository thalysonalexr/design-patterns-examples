"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prototypeExample;
(function (prototypeExample) {
    class FileText {
        constructor(_fileName) {
            this._fileName = _fileName;
        }
        get fileName() {
            return this._fileName;
        }
        set fileName(value) {
            this._fileName = value;
        }
        clone() {
            // {...this} does not clone class methods only their attributes the
            // properties being defined by get and set when assigning a new value
            // for file it adds a new property to the object best way: take the
            // properties of the object, create it and copy it
            return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        }
    }
    const file = new FileText('user_clients.json');
    const clone = file.clone();
    clone.fileName = 'admin_clients.json';
    console.log(file);
    console.log(clone);
})(prototypeExample = exports.prototypeExample || (exports.prototypeExample = {}));
//# sourceMappingURL=prototype.js.map