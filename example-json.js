var person = {
    name: 'Andrew',
    age: 24
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

var animal = '{"name": "Alice"}';

var animalObject = JSON.parse(animal);

animalObject.age = 4;

console.log(animalObject);

animal = JSON.stringify(animalObject);

console.log(animal);
