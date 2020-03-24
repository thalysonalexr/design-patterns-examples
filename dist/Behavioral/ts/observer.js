"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observerExample;
(function (observerExample) {
    class SocialNetwork {
        constructor(name) {
            this.name = name;
        }
    }
    class FriendSocialNetwork extends SocialNetwork {
        constructor(name) {
            super(name);
        }
        notify(message) {
            const name = this.name;
            console.log(`Hello ${name}. Your friend ${message} did one post!`);
        }
    }
    class MyAccountSocialNetwork extends SocialNetwork {
        constructor(name) {
            super(name);
            this.observers = new Array();
        }
        addObserver(observer) {
            this.observers.push(observer);
        }
        notifyAll() {
            this.observers.forEach(observer => {
                observer.notify(this.name);
            });
        }
        newPost(post) {
            console.log(`creating new post about ${post}`);
            this.notifyAll();
        }
        addFriend(friend) {
            console.log('adding new friend...');
            this.addObserver(friend);
        }
    }
    const myAccount = new MyAccountSocialNetwork('Thalyson Rodrigues');
    const friend1 = new FriendSocialNetwork('John');
    const friend2 = new FriendSocialNetwork('Mike');
    const friend3 = new FriendSocialNetwork('Billy');
    myAccount.addFriend(friend1);
    myAccount.addFriend(friend2);
    myAccount.addFriend(friend3);
    myAccount.newPost('TypeScript!');
})(observerExample = exports.observerExample || (exports.observerExample = {}));
//# sourceMappingURL=observer.js.map