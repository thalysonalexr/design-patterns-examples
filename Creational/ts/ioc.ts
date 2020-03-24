import 'reflect-metadata'

export namespace inversionOfControlExample {
  interface Type<T> {
    new(...args: any[]): T
  }

  export type GenericClassDecorator<T> = (target: T) => void

  const Service = () : GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) : void => {
      Ioc.getInstance().store(target)
    }
  }

  class Ioc {
    // singleton
    private static _instance: Ioc = new Ioc
    private _container: Array<Type<object>> = new Array<Type<object>>()

    private constructor() {}

    public static getInstance(): Ioc {
      return Ioc._instance
    }

    public store(target: Type<any>) {
      this._container.push(target)
    }

    public show(): Array<any> {
      return this._container
    }

    public resolve<T>(target: Type<any>): T {
      const tokens = Reflect.getMetadata('design:paramtypes', target) || []
      const injections = tokens.map((token: any) => Ioc.getInstance().resolve(token))
      return new target(...injections)
    }
  }

  export namespace Pay {
    export interface PaymentInterface {
      typePayment: string
    }

    export class CreditCard implements PaymentInterface {
      public typePayment: string = 'CreditCard'
    }

    export class PaymentSlip implements PaymentInterface {
      public typePayment: string = 'PaymentSlip'
    }

    export class BankTransfer implements PaymentInterface {
      public typePayment: string = 'BankTransfer'
    }
  }

  export namespace Buy {
    interface ProductInterface {
      name: string
      price: number
    }

    export class Product implements ProductInterface {
      constructor(private _name: string, private _price: number) {}

      public get name(): string { return this._name }

      public set name(value: string) { this._name = value }

      public get price(): number { return this._price }

      public set price(value: number) { this._price = value }
    }
    
    @Service()
    export class Order<T extends ProductInterface> {
      private _products: Array<T> = new Array<T>()

      // dependency injection by constructor
      constructor(private _payment: Pay.CreditCard) {}

      public addProduct(product: T) {
        this._products.push(product)
      }

      public resume(): void {
        console.log(`Payment method: ${this._payment.typePayment}`)
        this._products.forEach(product => {
          console.log(`Product: ${product.name}`)
          console.log(`Price: ${product.price.toFixed(2)} $`)
        })
      }
    }
  }

  // inject dependency payment with credit card
  const order1: Buy.Order<Buy.Product> = Ioc.getInstance().resolve<Buy.Order<Buy.Product>>(Buy.Order)

  order1.addProduct(new Buy.Product('Coke', 7.60))
  order1.addProduct(new Buy.Product('Cheetos', 9.15))
  order1.addProduct(new Buy.Product('Doritos', 10.20))

  order1.resume()
}