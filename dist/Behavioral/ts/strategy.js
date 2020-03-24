"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strategyExample;
(function (strategyExample) {
    class BubbleSort {
        sort(data) {
            for (let i = 0; i < data.length; i++) {
                let swapped = false;
                for (let j = 0; j < data.length - 1; j++) {
                    if (data[j] > data[j + 1]) {
                        let aux = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = aux;
                        swapped = true;
                    }
                }
                if (!swapped)
                    return data;
            }
            return data;
        }
    }
    class InsertionSort {
        sort(data) {
            for (let i = 1; i < data.length; i++) {
                let element = data[i];
                let j = i;
                while (j > 0 && element < data[j - 1]) {
                    let aux = data[j - 1];
                    data[j - 1] = data[j];
                    data[j] = aux;
                    j -= 1;
                }
            }
            return data;
        }
    }
    class Sorter {
        constructor(sorter) {
            this.sorter = sorter;
        }
        sort(data) {
            return this.sorter.sort(data);
        }
    }
    const data = [4, 3, 10];
    let sorter;
    if (data.length <= 5) {
        console.log('using bubble sort...');
        sorter = new Sorter(new BubbleSort());
    }
    else {
        console.log('using insertion sort...');
        sorter = new Sorter(new InsertionSort());
    }
    console.log(sorter.sort(data));
})(strategyExample = exports.strategyExample || (exports.strategyExample = {}));
//# sourceMappingURL=strategy.js.map