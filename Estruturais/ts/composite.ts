class Product {
  public title: string
  public price: number
  public description: string

  constructor(title: string, price: number, description: string) {
    this.title = title
    this.price = price
    this.description = description
  }
}

class Item {
  public count: number = 0
  public total: number = 0
  private product: Product;

  constructor(product: Product, count: number) {
    this.product = product
    this.count = count
    this.total += product.price * count
  }

  public list() {
    console.log('----------------------------')
    console.log(`title - ${this.product.title}`)
    console.log(`price - ${this.product.price}`)
    console.log(`description - ${this.product.description}`)
    console.log(`Quantity - ${this.count}`)
    console.log(`======== Total item - ${this.total} ========`)
  }
}

class Cart {
  // composite | 1 cart have many items
  private items: Array<Item> = new Array
  public total: number = 0

  public add(item: Item): void {
    this.items.push(item)
    this.total += item.total
  }

  public list(): void {
    this.items.forEach(item => {
      item.list()
    })
    console.log(`Price total: ${this.total}`)
  }
}

const cart = new Cart()

cart.add(new Item(new Product('Coca-Cola', 8.60, 'Refrigerante de Cola'), 2))
cart.add(new Item(new Product('Heineken', 5.90, 'Cerveja Lager Puro Malte'), 6))
cart.add(new Item(new Product('Bohemia', 4.00, 'Cerveja Puro Malte'), 6))

cart.list()
