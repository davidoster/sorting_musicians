let BubbleSort = require('./bubble_sort');
let QuickSort = require('./quick_sort');
let { Positions, Musician } = require('./models/musician');
let { generateRandomMusicians, randomNameGenerator } = require('./services/random_data');

// function sortByIndex(array) {
//     let result = [];
//     result = array.sort((a, b) => {
//         return(a.index - b.index);
//     });
//     return(result);
// }

// let sortedPositions = sortByIndex(Positions);
// console.log(sortedPositions);

// a few == 5
// some == 1000
// too much == 100000
let n = 5;
let musicians = generateRandomMusicians(n);

// console.log("Hello"); // O(1)

musicians.forEach(mus => {
    console.log(mus.toString());
});
// O(n)


let sort_order = 'ASC';
// position
// no_of_concerts
let attribute = 'years_of_experience';

let bubbleSort = new BubbleSort(musicians, sort_order, attribute);
bubbleSort.printResults(false);

let quickSort = new QuickSort(musicians, sort_order, attribute);
quickSort.printResults(false);
