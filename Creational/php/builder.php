<?php

/**
 * ----------------------------------------------*
 *                    BUILDER                    |
 * ----------------------------------------------*
 */


declare(strict_types=1);

final class Computer {

    private $boardVideo;
    private $memory;
    private $cooler;
    private $processor;

    public function __construct(BuilderComputer $builder) {
        $this->boardVideo = $builder->getBoardVideo();
        $this->memory     = $builder->getMemory();
        $this->cooler     = $builder->getCooler();
        $this->processor  = $builder->getProcessor();
    }
}

final class BuilderComputer {

    private $boardVideo;
    private $memory;
    private $cooler;
    private $processor;

    public function setBoardVideo(string $boardVideo): self {
        $this->boardVideo = $boardVideo;
        return $this;
    }

    public function getBoardVideo(): string
    {
        return $this->boardVideo;
    }

    public function setMemory(string $memory): self
    {
        $this->memory = $memory;
        return $this;
    }

    public function getMemory(): string
    {
        return $this->memory;
    }

    public function setProcessor(string $processor): self
    {
        $this->processor = $processor;
        return $this;
    }

    public function getProcessor(): string
    {
        return $this->processor;
    }

    public function setCooler(string $cooler): self
    {
        $this->cooler = $cooler;
        return $this;
    }

    public function getCooler(): string
    {
        return $this->cooler;
    }

    public function build(): Computer {
        return new Computer($this);
    }
}

$obj = (new BuilderComputer())
    ->setBoardVideo("GTX 1080 TI")
    ->setMemory("32GB")
    ->setProcessor("i7 6ª generation")
    ->setCooler("Corsair")
    ->build();

var_dump($obj);
