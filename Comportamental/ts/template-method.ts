abstract class Builder {
  public abstract test(): string
  public abstract lint(): string
  public abstract assemble(): string
  public abstract deploy(): string

  public build(): void {
    console.log(this.test())
    console.log(this.lint())
    console.log(this.assemble())
    console.log(this.deploy())
  }
}

class AndroidBuilder extends Builder {
  public test(): string {
    return `testing Android`
  }

  public lint(): string  {
    return `lint Android`
  }

  public assemble(): string  {
    return `assemple Android`
  }

  public deploy(): string  {
    return `deploy Android`
  }
}

class IOsBuilder extends Builder {
  public test(): string {
    return `testing IOs`
  }

  public lint(): string  {
    return `lint IOs`
  }

  public assemble(): string  {
    return `assemple IOs`
  }

  public deploy(): string  {
    return `deploy IOs`
  }
}

new AndroidBuilder().build()
new IOsBuilder().build()
