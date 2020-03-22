class Product {
  constructor(public title: string, public price: number, public description: string) {}
}

class Item {
  private _total: number = 0

  constructor(private _product: Product, public _count: number = 0) {
    this._total += this._product.price * this._count
  }

  public get total(): number {
    return this._total
  }

  public list(): void {
    console.log('----------------------------')
    console.log(`title - ${this._product.title}`)
    console.log(`price - ${this._product.price}`)
    console.log(`description - ${this._product.description}`)
    console.log(`Quantity - ${this._count}`)
    console.log(`======== Total item - ${this._total.toFixed(2)} $ ========`)
  }
}

class Cart <T extends Item> {
  // composite | 1 cart have many <T>items
  private _items: Array<T> = new Array<T>()
  private _total: number = 0

  public add(item: T): void {
    this._items.push(item)
    this._total += item.total
  }

  public list(): void {
    this._items.forEach(item => {
      item.list()
    })
    console.log(`Price total: ${this._total.toFixed(2)} $`)
  }
}

const cart = new Cart<Item>()

cart.add(new Item(new Product('Coca-Cola', 8.60, 'Refrigerante de Cola'), 2))
cart.add(new Item(new Product('Heineken', 5.90, 'Cerveja Lager Puro Malte'), 6))
cart.add(new Item(new Product('Bohemia', 4.00, 'Cerveja Puro Malte'), 6))

cart.list()
