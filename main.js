let BubbleSort = require('./bubble_sort');
let QuickSort = require('./quick_sort');

// Position: Maestros, Biolistis, Pneustos, Tybanos
const Positions = [{ name: 'MAESTROS', index: 0 }, { name: 'VIOLIN', index: 1 }, { name: 'PNEUMATIC', index: 2 }, { name: 'DRUMS', index: 3 }];

function printPositionAsStringOfXCharacters(text, x) {
    return(text + Array(x - text.length).fill(' ').join(''));
}
class Musician {
    constructor(name, age, position, years_of_experience, no_of_concerts) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.years_of_experience = years_of_experience;
        this.no_of_concerts = no_of_concerts;
    }

    toString = () => {
        return (`Musician { Name:${this.name}\tAge:${this.age.toFixed(2)}\tPosition:${printPositionAsStringOfXCharacters(Positions[this.position.index].name, 9)}\tYrs Of Exp:${this.years_of_experience.toFixed(2)}\tNo Of Concerts:${this.no_of_concerts} }`);
    }
}

const randomNameGenerator = (num) => {
   let res = '';
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
   };
   return res;
};

function generateRandomMusicians(count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        random_name = randomNameGenerator(4);
        random_age = Math.random() * 80 + 18; // 18 - 98
        random_position = Positions[Math.round(Math.random() * 3)]; // 0 - 3 - PLEASE FIND A WAY TO HAVE ZEROS
        random_years_of_experience = Math.random() * 47 + 3; // 3 - 50
        random_no_of_concerts = Math.floor(Math.random() * 199) + 1; // 1 - 200
        result.push(new Musician(
            random_name,
            random_age,
            random_position,
            random_years_of_experience,
            random_no_of_concerts
        ));
    }
    return result;
}

function printMusicians(musicians) {
    musicians.forEach(musician => {
        console.log(musician.toString());
    });
}

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
