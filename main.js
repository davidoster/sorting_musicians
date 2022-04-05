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

let musicians = generateRandomMusicians(5);
printMusicians(musicians);
let sort_order = 'DESC';
let attribute = 'years_of_experience';

let bubbleSort = new BubbleSort(musicians, sort_order, attribute);
bubbleSort.printResults();

let quickSort = new QuickSort(musicians, sort_order, attribute);
quickSort.printResults();
