<?php

/**
 * ----------------------------------------------*
 *                    BUILDER                    |
 * ----------------------------------------------*
 */


declare(strict_types=1);

final class Computer {

    private $placaVideo;
    private $memoria;
    private $cooler;
    private $processador;

    public function __construct(BuilderComputer $builder) {
        $this->placaVideo  = $builder->getPlacaVideo();
        $this->memoria     = $builder->getMemoria();
        $this->cooler      = $builder->getCooler();
        $this->processador = $builder->getProcessador();
    }
}

final class BuilderComputer {

    private $placaVideo;
    private $memoria;
    private $cooler;
    private $processador;

    public function setPlacaDeVideo(string $placaVideo): self {
        $this->placaVideo = $placaVideo;
        return $this;
    }

    public function getPlacaVideo(): string
    {
        return $this->placaVideo;
    }

    public function setMemoria(string $memoria): self
    {
        $this->memoria = $memoria;
        return $this;
    }

    public function getMemoria(): string
    {
        return $this->memoria;
    }

    public function setProcessador(string $processador): self
    {
        $this->processador = $processador;
        return $this;
    }

    public function getProcessador(): string
    {
        return $this->processador;
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
              ->setPlacaDeVideo("GTX 1080 TI")
              ->setMemoria("32GB")
              ->setProcessador("i7 6ª geração")
              ->setCooler("Corsair")
              ->build();

var_dump($obj);
