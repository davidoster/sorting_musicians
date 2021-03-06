let BubbleSort = require('./services/sorting/bubble_sort');
let QuickSort = require('./services/sorting/quick_sort');
let BucketSort = require('./services/sorting/bucket_sort');
let { Positions, Musician, AttributeMetaData } = require('./models/musician');
let { generateRandomMusicians, randomNameGenerator } = require('./services/random_data');

let n = 10;
let musicians = generateRandomMusicians(n);

musicians.forEach(mus => {
    console.log(mus.toString());
});

let sort_order = 'ASC';
// years_of_experience
// position
// no_of_concerts
let attribute = 'years_of_experience';
let attributes = ['position','years_of_experience'];

// let bubbleSort = new BubbleSort(musicians, sort_order, attribute);
// bubbleSort.printResults(false);

// let quickSort = new QuickSort(musicians, sort_order, attribute);
// quickSort.printResults(false);

// let bucketSort = new BucketSort(musicians, sort_order, attribute);
// bucketSort.printResults(false);


let bucketSortCombined = new BucketSort(musicians, sort_order, attributes);
bucketSortCombined.printResults();
