<?php

/**
 * -----------------------------------------------*
 *                     OBSERVER                  |
 * ----------------------------------------------*
 */

declare(strict_types=1);

interface Observer {
    public function notify(string $message): void;
}

interface Observable {
    public function addObserver(Observer $observer): void;
    public function notifyAll(): void;
}

class SocialNetwork {
    public function __construct(string $name) {
        $this->name = $name;
    }
}

final class FriendInSocialNetwork extends SocialNetwork implements Observer {

    public function __construct(string $name) {
        parent::__construct($name);
    }

    public function notify(string $message): void {
        $name = $this->name;
        echo "Hello! ${name}. Your friend ${message} did one post!\n";
    }
}

final class MyAccountSocialNetwork extends SocialNetwork implements Observable {
    // my friends
    private $observers = [];
    
    public function __construct(string $name) {
        parent::__construct($name);
    }

    public function addObserver(Observer $observer): void {
        $this->observers[] = $observer;
    }

    public function notifyAll(): void {
        foreach ($this->observers as $observer) {
            $observer->notify($this->name);
        }
    }

    public function newPost(string $post) {
        echo "Creating new post..." . $post . "\n";
        $this->notifyAll();
    }

    public function addFriend(Observer $friend) {
        echo "Adding new friend...\n";
        $this->addObserver($friend);
    }
}

// subject observed
$myAccount = new MyAccountSocialNetwork("Thalyson");


// objects observables
$friend1 = new FriendInSocialNetwork("John");
$friend2 = new FriendInSocialNetwork("Mike");
$friend3 = new FriendInSocialNetwork("Billy");

// adding new friends
$myAccount->addFriend($friend1);
$myAccount->addFriend($friend2);
$myAccount->addFriend($friend3);

// all friends are notified of the new post
$myAccount->newPost("Hello World!");

// -- output
// Adding new friend...
// Adding new friend...
// Adding new friend...
// Creating new post...Hello World!
// Hello! John. Your friend Thalyson did one post!
// Hello! Mike. Your friend Thalyson did one post!
// Hello! Billy. Your friend Thalyson did one post!
