"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var abstractFactoryExample;
(function (abstractFactoryExample) {
    class Application {
        description() {
            console.log('Software');
        }
    }
    class Hardware {
        description() {
            console.log('Hardware');
        }
    }
    class Developer {
        description() {
            console.log('Software Developer');
        }
    }
    class ComputerScientist {
        description() {
            console.log('Computer Scientist');
        }
    }
    class SoftwareFactory {
        static createSoftware() {
            return new Application();
        }
        static createProfissional() {
            return new Developer();
        }
    }
    class HardwareFactory {
        static createHardware() {
            return new Hardware();
        }
        static createProfissional() {
            return new ComputerScientist();
        }
    }
    const hardware = HardwareFactory.createHardware();
    const scientist = HardwareFactory.createProfissional();
    const software = SoftwareFactory.createSoftware();
    const developer = SoftwareFactory.createProfissional();
    [hardware, scientist, software, developer].forEach(value => {
        value.description();
    });
})(abstractFactoryExample = exports.abstractFactoryExample || (exports.abstractFactoryExample = {}));
//# sourceMappingURL=abstract-factory.js.map