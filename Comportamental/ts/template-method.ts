interface BuilderInterface {
  test(): string
  lint(): string
  assemble(): string
  deploy(): string
}

class Builder implements BuilderInterface {
  protected device: string

  constructor(device: string) {
    this.device = device
  }

  public build(): void {
    console.log(this.test())
    console.log(this.lint())
    console.log(this.assemble())
    console.log(this.deploy())
  }
  
  public test(): string {
    return `testing ${this.device}`
  }

  public lint(): string  {
    return `lint ${this.device}`
  }

  public assemble(): string  {
    return `assemple ${this.device}`
  }

  public deploy(): string  {
    return `deploy ${this.device}`
  }
}

class AndroidBuilder extends Builder {
  constructor() {
    super('Android')
  }
}

class IOsBuilder extends Builder {
  constructor() {
    super('IOs')
  }
}

new AndroidBuilder().build()
new IOsBuilder().build()
