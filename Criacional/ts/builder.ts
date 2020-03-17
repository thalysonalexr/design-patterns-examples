class Computer {
  private placaVideo?: string
  private memoria?: string
  private cooler?: string
  private processador?: string

  constructor(builder: BuilderComputer) {
    this.placaVideo = builder.placaVideo
    this.memoria = builder.memoria
    this.cooler = builder.cooler
    this.processador = builder.processador
  }
}

class BuilderComputer {
  public placaVideo?: string
  public memoria?: string
  public cooler?: string
  public processador?: string

  public setPlacaVideo(placaVideo: string): BuilderComputer {
    this.placaVideo = placaVideo
    return this
  }

  public setMemoria(memoria: string): BuilderComputer {
    this.memoria = memoria
    return this
  }

  public setCooler(cooler: string): BuilderComputer {
    this.cooler = cooler
    return this
  }

  public setProcessador(processador: string): BuilderComputer {
    this.processador = processador
    return this
  }

  public build(): Computer {
    return new Computer(this)
  }
}

const computer: Computer = new BuilderComputer()
  .setPlacaVideo('GTX 1080 TI')
  .setMemoria('32GB')
  .setProcessador('i7 6ª geração')
  .setCooler('Corsair')
  .build()

console.log(computer)