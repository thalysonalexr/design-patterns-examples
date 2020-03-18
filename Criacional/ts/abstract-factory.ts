interface System {
  description(): void
}

interface Profissional {
  description(): void
}

class Application implements System {
  description(): void {
    console.log('Software')
  }
}

class Hardware implements System {
  description(): void {
    console.log('Hardware')
  }
}

class Developer implements Profissional {
  description(): void {
    console.log('Desenvolvedor de Software')
  }
}

class ComputerScience implements Profissional {
  description(): void {
    console.log('Cientista da computação')
  }
}

abstract class SoftwareFactory {
  public static createSoftware(): System {
    return new Application()
  }

  public static createProfissional(): Profissional {
    return new Developer()
  }
}

abstract class HardwareFactory {
  public static createHardware(): System {
    return new Hardware()
  }

  public static createProfissional(): Profissional {
    return new ComputerScience()
  }
}

const hardware: Hardware = HardwareFactory.createHardware()
const scientist: ComputerScience = HardwareFactory.createProfissional()

const software: Application = SoftwareFactory.createSoftware()
const developer: Developer = SoftwareFactory.createProfissional();

[hardware, scientist, software, developer].forEach(value => {
  value.description()
})
