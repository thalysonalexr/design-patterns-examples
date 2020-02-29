<?php

/**
 * ----------------------------------------------*
 *        CONTAINER DEPENDENCY INJECTION         |
 * ----------------------------------------------*
 */

declare(strict_types=1);

interface AuthInterface {
    public function simpleAuth(): boolean;
}

interface ContainerDI {
  public static function get(string $className): string;
}

class Authentication implements AuthInterface {
    public function simpleAuth(): boolean
    {
        return true;
    }
}

class User {
    private $auth;

    public function __construct(AuthInterface $auth) {
        $this->auth = $auth;
    }
}

class UserFactory {
    public function __invoke(Container $container) {
        $dependency = $container::get(AuthInterface::class);
        return new User(new $dependency());
    }
}

class Container implements ContainerDI {
    static $dependencies = [
        User::class => UserFactory::class,
        AuthInterface::class => Authentication::class
    ];

    public static function get(string $className): string
    {
        return self::$dependencies[$className];
    }

    public static function start(): void
    {
        foreach (self::$dependencies as $value) {
            $object = new $value();

            if (!!strpos(strtolower($value), "factory")) {
              $object = $object(new Container());
            }

            var_dump($object);
        }
    }
}

Container::start();
