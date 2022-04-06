const { performance } = require('perf_hooks');
let { AttributeMetaData } = require('../../models/musician');

class QuickSort {
    constructor(array, sort_order, attribute) {
        this.name = 'Quick';
        this.array = array;
        this.low = 0;
        this.high = array.length - 1;
        this.result = [...array];
        this.sort_order = sort_order;
        this.attribute_text = attribute; // 'years_of_experience', 'position', 'no_of_concerts'
        this.attribute = (x) => {
            switch(this.attribute_text) {
                case 'years_of_experience':
                    return(Math.round(x[this.attribute_text]));
                    break;
                case 'position':
                    return(x[this.attribute_text].index);
                    break;
                case 'no_of_concerts':
                    return(x[this.attribute_text]);
                    break;
            }
        }
        this.attributeMeta = AttributeMetaData[this.attribute_text];
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
                if (this.attribute(array[j]) < this.attribute(pivot)) {
                    i++;
                    this.swap(array, i, j);
                }
            }
            else {
                if (this.attribute(array[j]) > this.attribute(pivot)) {
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
        return (`The elapsed time for Quick Sort ${this.sort_order} for ${this.attribute_text} is: ${(this.endTime - this.startTime).toFixed(5)} milliSecs`);
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