"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facadeExample;
(function (facadeExample) {
    class Server {
        setMiddlewares() {
            console.log('setting middlewares...');
        }
        setRoutes() {
            console.log('setting routes...');
        }
        initDatabase() {
            console.log('initializing database...');
        }
        initRoutes() {
            console.log('initializing routes...');
        }
    }
    class ServerFacade {
        constructor(server) {
            this.server = server;
        }
        listen() {
            this.server.setMiddlewares();
            this.server.setRoutes();
            this.server.initDatabase();
            this.server.initRoutes();
        }
    }
    const server = new ServerFacade(new Server);
    server.listen();
})(facadeExample = exports.facadeExample || (exports.facadeExample = {}));
//# sourceMappingURL=facade.js.map