class FileText {
  public name: string
  
  constructor(fileName: string) {
    this.name = fileName
  }

  public clone() {
    return {...this}
  }
}

const file: FileText = new FileText('user_clients.json')

const clone: FileText = file.clone()

clone.name = 'admin_clients.json'

console.log(file.name)
console.log(clone.name)
