const { performance } = require('perf_hooks');

class BubbleSort {
    constructor(array, sort_order, attribute) {
        this.name = 'Bubble';
        this.array = array;
        this.result = [...array];
        this.sort_order = sort_order;
        this.attribute = attribute;
        this.startTime = performance.now(); // new Date().now()
        this.sort();
        this.endTime = performance.now();
    }

    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // O() 
    // n = 5
    // n - 1 = 4
    // n - 1 = 4, n - 3, n - 2, n - 1 == (n-1)!
    sort() {
        for (let i = 0; i < this.result.length - 1; i++) {
            for (let j = 0; j < this.result.length - i - 1; j++) {
                if (this.sort_order == 'ASC') {
                    if (this.result[j][this.attribute] > this.result[j + 1][this.attribute]) {
                        let temp = this.result[j];
                        this.result[j] = this.result[j + 1];
                        this.result[j + 1] = temp;
                    }
                } else {
                    if (this.result[j][this.attribute] < this.result[j + 1][this.attribute]) {
                        this.swap(this.result, j, j + 1);
                    }
                }
            }
        }
    }

    showElapsedTime() {
        return(`The elapsed time for Bubble Sort ${this.sort_order} for ${this.attribute} is: ${(this.endTime - this.startTime).toFixed(5)} milliSecs`);
    }

    printResults(showList = true) {
        console.log(`AFTER ${this.name} Sort`);
        if(showList) {
            this.result.forEach(musician => {
                console.log(musician.toString());
            });
        }
        console.log(this.showElapsedTime());
    }
}

module.exports = BubbleSort;