export namespace observerExample {
  interface Observer {
    notify(message: string): void
  }
  
  interface Observable {
    addObserver(observer: Observer): void
    notifyAll(): void
  }
  
  class SocialNetwork {
    constructor(protected name: string) {}
  }
  
  class FriendSocialNetwork extends SocialNetwork implements Observer {
    constructor(name: string) {
      super(name)
    }
  
    public notify(message: string): void {
      const name: string = this.name
      console.log(`Hello ${name}. Your friend ${message} did one post!`)
    }
  }
  
  class MyAccountSocialNetwork extends SocialNetwork implements Observable {
    private observers: Array<Observer> = new Array<Observer>()
  
    constructor(name: string) { super(name) }
  
    public addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public notifyAll(): void {
      this.observers.forEach(observer => {
        observer.notify(this.name)
      })
    }
  
    public newPost(post: string): void {
      console.log(`creating new post about ${post}`)
      this.notifyAll()
    }
  
    public addFriend(friend: Observer): void {
      console.log('adding new friend...')
      this.addObserver(friend);
    }
  }
  
  const myAccount: MyAccountSocialNetwork = new MyAccountSocialNetwork('Thalyson Rodrigues')
  
  const friend1: FriendSocialNetwork = new FriendSocialNetwork('John')
  const friend2: FriendSocialNetwork = new FriendSocialNetwork('Mike')
  const friend3: FriendSocialNetwork = new FriendSocialNetwork('Billy')
  
  myAccount.addFriend(friend1)
  myAccount.addFriend(friend2)
  myAccount.addFriend(friend3)
  
  myAccount.newPost('TypeScript!')  
}