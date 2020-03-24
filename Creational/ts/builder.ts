export namespace builderExample {
  class Computer {
    constructor(
      builder: BuilderComputer,
      private _boardVideo: string | undefined = builder.boardVideo,
      private _memory: string | undefined = builder.memory,
      private _cooler: string | undefined = builder.cooler,
      private _processor: string | undefined = builder.processor
    ) {}
  
    public details(): void {
      console.log(`Board video: ${this._boardVideo}`)
      console.log(`Memory: ${this._memory}`)
      console.log(`Cooler: ${this._cooler}`)
      console.log(`Processor: ${this._processor}`)
    }
  }
  
  class BuilderComputer {
    public boardVideo?: string
    public memory?: string
    public cooler?: string
    public processor?: string
  
    public setPlacaVideo(boardVideo: string): BuilderComputer {
      this.boardVideo = boardVideo
      return this
    }
  
    public setMemoria(memory: string): BuilderComputer {
      this.memory = memory
      return this
    }
  
    public setCooler(cooler: string): BuilderComputer {
      this.cooler = cooler
      return this
    }
  
    public setProcessador(processor: string): BuilderComputer {
      this.processor = processor
      return this
    }
  
    public build(): Computer {
      return new Computer(this)
    }
  }
  
  const computer: Computer = new BuilderComputer()
    .setPlacaVideo('GTX 1080 TI')
    .setMemoria('32GB')
    .setProcessador('i7 6ª generation')
    .setCooler('Corsair')
    .build()
  
  computer.details()
}