<?php

/**
 * ----------------------------------------------*
 *                   SINGLETON                   |
 * ----------------------------------------------*
 */


declare(strict_types=1);

interface DatabaseInterface {
    public static function connect(string $uri): DatabaseInterface;
    public function disconnect(): void;
}

class MongoODM implements DatabaseInterface {
    static $instance = null;
    private $uriConnection;

    private function __construct(string $uri) {
        $this->uriConnection = $uri;
    }

    public static function connect(string $uri): DatabaseInterface
    {
        if (null === self::$instance) {
            $instance = new MongoODM($uri);
        }

        return $instance;
    }

    public function disconnect(): void
    {
        echo "Disconnect to " . $this->uriConnection . "\n";
    }
}

class PostgresORM implements DatabaseInterface {
    static $instance = null;
    private $uriConnection;

    private function __construct(string $uri)
    {
        $this->uriConnection = $uri;
    }

    public static function connect(string $uri): DatabaseInterface
    {
        if (null === self::$instance) {
            $instance = new PostgresORM($uri);
        }

        return $instance;
    }

    public function disconnect(): void
    {
        echo "Disconnect to " . $this->uriConnection . "\n";
    }
}

class Model {
    private $database;

    protected function __construct(DatabaseInterface $database) {
        $this->database = $database;
    }

    protected function create(array $data): void {
        echo "create user...\n";
        array_map(function ($value) {
            echo " - $value";
        }, $data);
        echo "\n";
    }
}

final class User extends Model {
    private $id;
    private $name;
    private $email;

    public function __construct(DatabaseInterface $database) {
        parent::__construct($database);
    }

    public function create(array $data): void
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->email = $data['email'];
        parent::create($data);
    }
}

$user = new User(MongoODM::connect('mongodb://localhost:27017/mydb'));

$user->create([
    'id'=> 123,
    'name' => 'Thalyson Rodrigues',
    'email' => 'thalysonrodrigues.dev@gmail.com'
]);

$user2 = new User(PostgresORM::connect('postgres://localhost:5432/mydb'));

$user2->create([
    'id'=> 444,
    'name' => 'Rayeli Nascimento',
    'email' => 'rayeli@gmail.com'
]);
