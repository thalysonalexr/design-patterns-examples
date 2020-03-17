// https://github.com/design-patterns-for-humans/brazilian-portuguese#-decorator

interface CoffeInterface {
  cost(): number
  description(): string
}

class SimpleCoffe implements CoffeInterface {
  public cost(): number {
    return 10
  }

  public description(): string {
    return 'Simple coffe'
  }
}

class MilkCoffe implements CoffeInterface {
  protected coffe: CoffeInterface

  public cost(): number {
    return this.coffe.cost() + 2
  }

  public description(): string {
    return this.coffe.description() + ', milk'
  }

  constructor(coffe: CoffeInterface) {
    this.coffe = coffe
  }
}

class WhipCoffe implements CoffeInterface {
  protected coffe: CoffeInterface

  public cost(): number {
    return this.coffe.cost() + 5
  }

  public description(): string {
    return this.coffe.description() + ', whip'
  }

  constructor(coffe: CoffeInterface) {
    this.coffe = coffe
  }
}

class VanillaCoffe implements CoffeInterface {
  protected coffe: CoffeInterface

  public cost(): number {
    return this.coffe.cost() + 3
  }

  public description(): string {
    return this.coffe.description() + ', vanilla'
  }

  constructor(coffe: CoffeInterface) {
    this.coffe = coffe
  }
}

let someCoffe = new SimpleCoffe()
console.log(someCoffe.cost())
console.log(someCoffe.description())

someCoffe = new MilkCoffe(someCoffe)
console.log(someCoffe.cost())
console.log(someCoffe.description())

someCoffe = new WhipCoffe(someCoffe)
console.log(someCoffe.cost())
console.log(someCoffe.description())

someCoffe = new VanillaCoffe(someCoffe)
console.log(someCoffe.cost())
console.log(someCoffe.description())
