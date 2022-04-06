let { Positions, Musician, AttributeMetaData } = require('../models/musician');

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
         random_age = (Math.random() * (AttributeMetaData['age'].max - AttributeMetaData['age'].min)) + AttributeMetaData['age'].min; // 18 - 98
         random_position = Positions[Math.round(Math.random() * (AttributeMetaData['position'].max - 1))]; // 0 - 3 - PLEASE FIND A WAY TO HAVE ZEROS
         random_years_of_experience = Math.random() * ((AttributeMetaData['years_of_experience'].max - AttributeMetaData['years_of_experience'].min) + AttributeMetaData['years_of_experience'].min); // 3 - 50
         random_no_of_concerts = Math.floor(Math.random() * (AttributeMetaData['no_of_concerts'].max - AttributeMetaData['no_of_concerts'].min)) + AttributeMetaData['no_of_concerts'].min; // 1 - 200
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

 module.exports = { randomNameGenerator, generateRandomMusicians }
 