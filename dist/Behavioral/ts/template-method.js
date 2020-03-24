"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var templateMethodExample;
(function (templateMethodExample) {
    class Builder {
        build() {
            console.log(this.test());
            console.log(this.lint());
            console.log(this.assemble());
            console.log(this.deploy());
        }
    }
    class AndroidBuilder extends Builder {
        test() {
            return `testing Android`;
        }
        lint() {
            return `lint Android`;
        }
        assemble() {
            return `assemple Android`;
        }
        deploy() {
            return `deploy Android`;
        }
    }
    class IOsBuilder extends Builder {
        test() {
            return `testing IOs`;
        }
        lint() {
            return `lint IOs`;
        }
        assemble() {
            return `assemple IOs`;
        }
        deploy() {
            return `deploy IOs`;
        }
    }
    new AndroidBuilder().build();
    new IOsBuilder().build();
})(templateMethodExample = exports.templateMethodExample || (exports.templateMethodExample = {}));
//# sourceMappingURL=template-method.js.map