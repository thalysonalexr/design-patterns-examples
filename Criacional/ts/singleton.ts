interface DatabaseInterface {
  connect(uri: string): DatabaseInterface
  disconnect(): void
}

class MongoODM implements DatabaseInterface {
  private static instance?: DatabaseInterface
  private uriConnection: string

  private constructor(uri: string) {
    this.uriConnection = uri
  }

  connect(uri: string): DatabaseInterface {
    if (undefined === MongoODM.instance) {
      MongoODM.instance = new MongoODM(uri)
    }

    return MongoODM.instance
  }

  disconnect(): void {
    console.log(`disconnect to ${this.uriConnection}`)
  }
}

class PostgresORM implements DatabaseInterface {
  private static instance?: DatabaseInterface
  private uriConnection: string

  private constructor(uri: string) {
    this.uriConnection = uri
  }

  connect(uri: string): DatabaseInterface {
    if (undefined === PostgresORM.instance) {
      PostgresORM.instance = new PostgresORM(uri)
    }

    return PostgresORM.instance
  }

  disconnect(): void {
    console.log(`disconnect to ${this.uriConnection}`)
  }
}

class Model {
  private database: DatabaseInterface

  constructor(database: DatabaseInterface) {
    this.database = database
  }

  protected create(data: Array<string>): void {
    console.log('create user...')
    data.forEach(value => {
      console.log(` - ${value}`)
    })
  }
}

class User extends Model {
  private id?: string
  private name?: string
  private email?: string

  constructor(database: DatabaseInterface) {
    super(database)
  }

  public create(data: Array<string>): void {
    this.id = data[0]
    this.name = data[1]
    this.email = data[2]
    super.create(data)
  }
}

const user = new User(MongoODM.prototype.connect('mongodb://localhost:27017/mydb'));

user.create(['1234', 'Thalyson Rodrigues', 'thalysonrodrigues.dev@gmail.com']);
