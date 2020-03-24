<?php

/**
 * ----------------------------------------------*
 *                 SIMPLE FACTORY                |
 * ----------------------------------------------*
 */

declare(strict_types=1);

interface CarInterface {
    public function drive();
}

class Car implements CarInterface {
    public function __construct(string $name) {
        $this->name = $name;
    }

    public function drive() {
        return "Vruummmm...";
    }
}

final class Amarok extends Car {
    public function __construct(string $name) {
        parent::__construct($name);
    }
}

final class HB20 extends Car {
    public function __construct(string $name) {
        parent::__construct($name);
    }
}

final class Prisma extends Car {
    public function __construct(string $name) {
        parent::__construct($name);
    }
}

abstract class CarFactory {
    public static function create(string $name): CarInterface {
        return new $name($name);
    }
}

$car1 = CarFactory::create('Amarok');
$car2 = CarFactory::create('HB20');
$car3 = CarFactory::create('Prisma');

var_dump($car1, $car2, $car3);
