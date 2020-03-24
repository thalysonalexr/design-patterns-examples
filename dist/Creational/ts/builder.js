"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builderExample;
(function (builderExample) {
    class Computer {
        constructor(builder, _boardVideo = builder.boardVideo, _memory = builder.memory, _cooler = builder.cooler, _processor = builder.processor) {
            this._boardVideo = _boardVideo;
            this._memory = _memory;
            this._cooler = _cooler;
            this._processor = _processor;
        }
        details() {
            console.log(`Board video: ${this._boardVideo}`);
            console.log(`Memory: ${this._memory}`);
            console.log(`Cooler: ${this._cooler}`);
            console.log(`Processor: ${this._processor}`);
        }
    }
    class BuilderComputer {
        setPlacaVideo(boardVideo) {
            this.boardVideo = boardVideo;
            return this;
        }
        setMemoria(memory) {
            this.memory = memory;
            return this;
        }
        setCooler(cooler) {
            this.cooler = cooler;
            return this;
        }
        setProcessador(processor) {
            this.processor = processor;
            return this;
        }
        build() {
            return new Computer(this);
        }
    }
    const computer = new BuilderComputer()
        .setPlacaVideo('GTX 1080 TI')
        .setMemoria('32GB')
        .setProcessador('i7 6ª generation')
        .setCooler('Corsair')
        .build();
    computer.details();
})(builderExample = exports.builderExample || (exports.builderExample = {}));
//# sourceMappingURL=builder.js.map