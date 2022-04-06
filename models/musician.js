// Position: Maestros, Biolistis, Pneustos, Tybanos
const Positions = [{ name: 'MAESTROS', index: 0 }, { name: 'VIOLIN', index: 1 }, { name: 'PNEUMATIC', index: 2 }, { name: 'DRUMS', index: 3 }];

const AttributeMetaData = {
    'years_of_experience':  { min: 3,   max: 50 },
    'position':             { min: 0,   max: Positions.length },
    'no_of_concerts':       { min: 1,   max: 200 },
    'age':                  { min: 18,  max: 98 }
};

class Musician {
    constructor(name, age, position, years_of_experience, no_of_concerts) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.years_of_experience = years_of_experience;
        this.no_of_concerts = no_of_concerts;
    }

    positionAsStrOfXChars(x) {
        let text = Positions[this.position.index].name;
        return(text + Array(x - text.length).fill(' ').join(''));
    }

    toString = () => {
        return (`Musician { Name: ${this.name}\tAge: ${this.age.toFixed(2)}\tPosition: ${this.positionAsStrOfXChars(9)}\tYrs Of Exp: ${this.years_of_experience.toFixed(2).toString().padStart(5, '0')}\tNo Of Concerts: ${this.no_of_concerts} }`);
    }
}

module.exports = { Musician, Positions, AttributeMetaData}