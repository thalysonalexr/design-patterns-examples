export namespace prototypeExample {
  class FileText {
    constructor(private _fileName: string) {}
  
    public get fileName(): string {
      return this._fileName
    }
  
    public set fileName(value: string) {
      this._fileName = value
    }
  
    public clone() {
      // {...this} does not clone class methods only their attributes the
      // properties being defined by get and set when assigning a new value
      // for file it adds a new property to the object best way: take the
      // properties of the object, create it and copy it
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
    }
  }
  
  const file: FileText = new FileText('user_clients.json')
  
  const clone: FileText = file.clone()
  
  clone.fileName = 'admin_clients.json'
  
  console.log(file)
  console.log(clone)  
}