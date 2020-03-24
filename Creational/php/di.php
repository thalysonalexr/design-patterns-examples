<?php

/**
 * ----------------------------------------------*
 *               DEPENDENCY INJECTION            |
 * ----------------------------------------------*
 */

declare(strict_types=1);

interface AuthInterface {
    public function simpleAuth(): boolean;
}

class Authentication implements AuthInterface {
    public function simpleAuth(): boolean {
        return true;
    }
}

class User {
    private $auth;

    public function __construct(AuthInterface $auth) {
        $this->auth = $auth;
    }

    public function authenticate(): boolean {
        return $this->auth->simpleAuth();
    }
}

class UserFactory {
    public static function create(): User {
        $authentication = new Authentication();
        // inject dependency by constructor
        return new User($authentication);
    }
}

var_dump(UserFactory::create());
