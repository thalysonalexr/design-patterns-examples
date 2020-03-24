export namespace singletonExample {
  interface DatabaseInterface {
    connect(uri: string): void
    disconnect(): void
    query(sql: string): void
  }
  
  class MongoODM implements DatabaseInterface {
    private uriConnection: string = ''
    private static _instance: DatabaseInterface | null = null
  
    private constructor() {}
    
    // singleton instance
    public static getInstance(): DatabaseInterface {
      if (null === MongoODM._instance) {
        MongoODM._instance = new MongoODM()
      }
      return MongoODM._instance
    }
  
    public connect(uri: string): void {
      this.uriConnection = uri
    }
  
    public disconnect(): void {
      console.log(`disconnect to ${this.uriConnection}`)
    }
  
    public query(sql: string): void {
      console.log(sql)
    }
  }
  
  class Model {
    constructor(private database: DatabaseInterface) {}
  
    public create(data: Array<string>): void {
      this.database.query('insert into...')
      data.forEach(value => {
        console.log(` - ${value}`)
      })
    }
  }
  
  class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
    ) {}
  
    public data(): Array<string> {
      return [this.id, this.name, this.email]
    }
  }
  
  const user: User = new User(
    'ofa4-b4a5-5a8b-s3b7',
    'Thalyson Rodrigues',
    'tha.motog@gmail.com'
  );
  
  MongoODM.getInstance().connect('mongodb://localhost:27017/mydb')
  const model: Model = new Model(MongoODM.getInstance())
  
  model.create(user.data())  
}