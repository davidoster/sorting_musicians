const { performance } = require('perf_hooks');
const { runInThisContext } = require('vm');
let { AttributeMetaData } = require('../../models/musician');

class BucketSort {
    constructor(array, sort_order, attribute) {
        this.name = 'Bucket';
        this.array = array;
        this.result = [...array];
        this.sort_order = sort_order;
        this.attribute = (x) => {
            switch (this.attribute_text) {
                case 'years_of_experience':
                    return (Math.round(x[this.attribute_text]));
                    break;
                case 'position':
                    return (x[this.attribute_text].index);
                    break;
                case 'no_of_concerts':
                    return (x[this.attribute_text]);
                    break;
            }
        }
        if (attribute.length && attribute.length > 1) {
            this.attributes_text = attribute;
            // this.attributes_text[0], this.attributes_text[1]
            this.attribute_text = this.attributes_text[0];
            this.attributeMeta = AttributeMetaData[this.attribute_text];
            this.startTime = performance.now();
            this.sort();
            this.sortCombined();
            this.endTime = performance.now();
        } else {
            this.attribute_text = attribute;
            this.attributeMeta = AttributeMetaData[this.attribute_text];
            this.startTime = performance.now(); // new Date().now()
            this.sort();
            this.endTime = performance.now();
        }
    }

    sort() {
        let n = this.attributeMeta.max;
        if (this.attributeMeta.min == 0) n++;

        let buckets = new Array(n).fill().map((value, index) => value = []);
        this.result.forEach((element, index) => {
            // console.log(this.attribute(element));
            if (buckets[this.attribute(element)]) {
                buckets[this.attribute(element)].push(element);
            }
        });

        let xResult = [];
        if (this.sort_order == 'ASC') {
            for (let i = 0; i < buckets.length; i++) {
                if (buckets[i].length > 0) {
                    for (let j = 0; j < buckets[i].length; j++) {
                        xResult.push(buckets[i][j]);
                    }
                }
            }
        } else {
            for (let i = buckets.length - 1; i >= 0; i--) {
                if (buckets[i].length > 0) {
                    for (let j = buckets[i].length - 1; j >= 0; j--) {
                        xResult.push(buckets[i][j]);
                    }
                }
            }
        }
        this.result = xResult;
    }

    sortCombined() {
        let n = this.attributeMeta.max;
        if (this.attributeMeta.min == 0) n++;

        let buckets = new Array(n).fill().map((value, index) => value = []);
        let xResult = Object.assign(new Array(),this.result); // [...this.result]
        xResult.forEach((element, index) => {
            // console.log(this.attribute(element));
            if (buckets[this.attribute(element)]) {
                buckets[this.attribute(element)].push(element);
            }
        });
        this.result = xResult;
        
        // sorting by 2nd attribute
        this.attribute_text = this.attributes_text[1];
        this.attributeMeta = AttributeMetaData[this.attribute_text];
        this.result.forEach(bucket => {
            // console.log(bucket);
            if(bucket && bucket.length) {
                bucket.sort((a, b) => {
                    // console.log(this.attribute(a), this.attribute(b));
                    this.attribute(a) - this.attribute(b);
                });
            }
        });

        // flatten
        let yResult = [];
        if (this.sort_order == 'ASC') {
            for (let i = 0; i < this.result.length; i++) {
                if (this.result[i].length > 0) {
                    for (let j = 0; j < this.result[i].length; j++) {
                        yResult.push(this.result[i][j]);
                    }
                }
            }
        } else {
            for (let i = this.result.length - 1; i >= 0; i--) {
                if (this.result[i].length > 0) {
                    for (let j = this.result[i].length - 1; j >= 0; j--) {
                        yResult.push(this.result[i][j]);
                    }
                }
            }
        }
        this.result = yResult;
    }

    showElapsedTime() {
        return (`The elapsed time for Bucket Sort ${this.sort_order} for ${this.attribute_text} is: ${(this.endTime - this.startTime).toFixed(5)} milliSecs`);
    }

    printResults(showList = true) {
        console.log(`AFTER ${this.name} Sort`);
        if (showList) {
            this.result.forEach(musician => {
                console.log(musician.toString());
            });
        }
        console.log(this.showElapsedTime());
    }
}

module.exports = BucketSort;


// function bucketSort(arr, n) {
//     if (n <= 0)
//         return;

//     // 1) Create n empty buckets
//     let buckets = new Array(n);

//     for (let i = 0; i < n; i++) {
//         buckets[i] = [];
//     }

//     // 2) Put array elements in different buckets
//     for (let i = 0; i < n; i++) {
//         let idx = arr[i] * n;
//         buckets[Math.floor(idx)].push(arr[i]);
//     }

//     // 3) Sort individual buckets
//     for (let i = 0; i < n; i++) {
//         buckets[i].sort(function (a, b) { return a - b; });
//     }

//     // 4) Concatenate all buckets into arr[]
//     let index = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < buckets[i].length; j++) {
//             arr[index++] = buckets[i][j];
//         }
//     }
// }

