export namespace facadeExample {
  interface ServerInterface {
    setMiddlewares(): void
    setRoutes(): void
    initDatabase(): void
    initRoutes(): void
  }
  
  class Server implements ServerInterface {
    public setMiddlewares(): void {
      console.log('setting middlewares...')
    }
  
    public setRoutes(): void {
      console.log('setting routes...')
    }
  
    public initDatabase(): void {
      console.log('initializing database...')
    }
  
    public initRoutes(): void {
      console.log('initializing routes...')
    }
  }
  
  class ServerFacade {
    private server: ServerInterface;
  
    constructor(server: ServerInterface) {
      this.server = server
    }
  
    public listen(): void {
      this.server.setMiddlewares()
      this.server.setRoutes()
      this.server.initDatabase()
      this.server.initRoutes()
    }
  }
  
  const server: ServerFacade = new ServerFacade(new Server)
  
  server.listen()  
}