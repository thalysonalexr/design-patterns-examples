<?php

declare(strict_types=1);

interface Observer {
    public function notify(string $message): void;
}

interface Observable {
    protected function addObserver(Observer $observer): void;
    protected function notifyAll(): void;
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
        echo "Olá! ${name}. Seu amigo ${message} fez uma postagem!";
    }
}

final class MyAccountSocialNetwork extends SocialNetwork implements Observable {
    // my friends
    private $observers = [];
    
    public function __construct(string $name) {
        parent::__construct($name);
    }

    protected function addObserver(Observer $observer): void {
        $this->observers[] = $observer;
    }

    protected function notifyAll(): void {
        foreach ($this->observers as $observer) {
            $observer->notify($this->name);
        }
    }

    public function newPost(string $post) {
        echo "Criando um novo post..." . $post;
        $this->notifyAll();
    }

    public function addFriend(Observer $friend) {
        echo "Adicionando um novo amigo...";
        $this->addObserver($friend);
    }
}

// sujeito observado
$myAccount = new MyAccountSocialNetwork("Thalyson");


// objetos observadores
$friend1 = new FriendInSocialNetwork("John");
$friend2 = new FriendInSocialNetwork("Mike");
$friend3 = new FriendInSocialNetwork("Billy");

// adicionando novos amigos
$myAccount->addFriend($friend1);
$myAccount->addFriend($friend2);
$myAccount->addFriend($friend3);

// todos os amigos são notificados sobre a nova postagem
$myAccount->newPost("Hello World!");
