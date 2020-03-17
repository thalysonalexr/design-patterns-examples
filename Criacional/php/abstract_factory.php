<?php

/**
 * -----------------------------------------------*
 *                ABSTRACT FACTORY               |
 * ----------------------------------------------*
 */

declare(strict_types=1);

interface CarroInterface {
    public function dirigir();
}

class Carro implements CarroInterface {

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function dirigir() {
        return "Vruummmm...";
    }
}

final class Amarok extends Carro {
    public function __construct(string $name) {
        parent::__construct($name);
    }
}

final class HB20 extends Carro {
    public function __construct(string $name) {
        parent::__construct($name);
    }
}

final class Prisma extends Carro {
    public function __construct(string $name) {
        parent::__construct($name);
    }
}

abstract class CarroFactory {
    public static function create(string $name): CarroInterface {
        return new $name($name);
    }
}

$carro1 = CarroFactory::create('Amarok');
$carro2 = CarroFactory::create('HB20');
$carro3 = CarroFactory::create('Prisma');

var_dump($carro1, $carro2, $carro3);
