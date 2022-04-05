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

module.exports = { Musician, Positions}