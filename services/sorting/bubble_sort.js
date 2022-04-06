const { performance } = require('perf_hooks');
let { AttributeMetaData } = require('../../models/musician');

class BubbleSort {
    constructor(array, sort_order, attribute) {
        this.name = 'Bubble';
        this.array = array;
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
                    if(this.attribute(this.result[j]) > this.attribute(this.result[j+1])) {
                        let temp = this.result[j];
                        this.result[j] = this.result[j + 1];
                        this.result[j + 1] = temp;
                    }
                } else {
                    if(this.attribute(this.result[j]) < this.attribute(this.result[j+1])) {
                        this.swap(this.result, j, j + 1);
                    }
                }
            }
        }
    }

    showElapsedTime() {
        return(`The elapsed time for Bubble Sort ${this.sort_order} for ${this.attribute_text} is: ${(this.endTime - this.startTime).toFixed(5)} milliSecs`);
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