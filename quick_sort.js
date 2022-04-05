const { performance } = require('perf_hooks');

class QuickSort {
    constructor(array, sort_order, attribute) {
        this.name = 'Quick';
        this.array = array;
        this.low = 0;
        this.high = array.length - 1;
        this.result = [...array];
        this.sort_order = sort_order;
        this.attribute = attribute;
        this.startTime = performance.now();
        this.sort(this.result, 0, array.length - 1);
        this.endTime = performance.now();
    }

    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    partition(array, low, high) {
        let pivot = array[high];
        let i = (low - 1);

        for (let j = low; j <= high - 1; j++) {
            if(this.sort_order == 'ASC') {
                if (array[j][this.attribute] < pivot[this.attribute]) {
                    i++;
                    this.swap(array, i, j);
                }
            }
            else {
                if (array[j][this.attribute] > pivot[this.attribute]) {
                    i++;
                    this.swap(array, i, j);
                }
            }
        }
        this.swap(array, i + 1, high);
        return(i + 1);
    }

    sort(array, low, high) {
        if (low < high) {
            let pi = this.partition(array, low, high);
            this.sort(array, low, pi - 1);
            this.sort(array, pi + 1, high);
        }    
    }

    showElapsedTime() {
        return (`The elapsed time for Quick Sort ${this.sort_order} for ${this.attribute} is: ${(this.endTime - this.startTime).toFixed(5)} milliSecs`);
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

module.exports = QuickSort;