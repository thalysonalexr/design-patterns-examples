class FileText {
  constructor(private _fileName: string) {}

  public get fileName(): string {
    return this._fileName
  }

  public set fileName(value: string) {
    this._fileName = value
  }

  public clone() {
    // {...this} não clona os métodos da classe apenas seus atributes
    // sendo as propriedades definidas por get e set ao atribuir um novo
    // valor para arquivo o mesmo é adicionado uma nova propriedade ao objeto
    // melhor maneira: pegar as propriedades do objeto, cria-lo e copia-lo
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
  }
}

const file: FileText = new FileText('user_clients.json')

const clone: FileText = file.clone()

clone.fileName = 'admin_clients.json'

console.log(file)
console.log(clone)
