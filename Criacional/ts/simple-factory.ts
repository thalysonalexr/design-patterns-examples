interface CarroInterface {
  dirigir(): string
  getName(): string
}

class Carro implements CarroInterface {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public dirigir() {
    return 'Vrummmmm...'
  }

  public getName(): string {
    return this.name;
  }
}

class Amarok extends Carro {
  constructor(name: string) {
    super(name)
  }
}

class HB20 extends Carro {
  constructor(name: string) {
    super(name)
  }
}

class Prisma extends Carro {
  constructor(name: string) {
    super(name)
  }
}

type CarroType = 'Amarok' | 'HB20' | 'Prisma' | 'Carro';

abstract class CarroFactory {
  public static create(carro: CarroType): CarroInterface {
    let instance: CarroInterface;
    switch (carro) {
      case 'Amarok':
        instance = new Amarok('Amarok');
        break;
      case 'HB20':
        instance = new HB20('HB20');
        break;
      case 'Prisma':
        instance = new Prisma('Prisma');
        break;
      default:
        instance = new Carro('Carro');
        break;
    }

    return instance;
  }
}

const carro1: CarroInterface = CarroFactory.create('Amarok');
const carro2: CarroInterface = CarroFactory.create('HB20');
const carro3: CarroInterface = CarroFactory.create('Prisma');
const carro4: CarroInterface = CarroFactory.create('Carro');

[carro1, carro2, carro3, carro4].forEach(carro => {
  console.log(`Carro ${carro.getName()} - ${carro.dirigir()}`)
});