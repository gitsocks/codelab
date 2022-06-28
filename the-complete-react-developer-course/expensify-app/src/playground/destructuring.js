// const person = {
//     name: 'Billy',
//     age: 32,
//     location: {
//         city: 'Cityville',
//         temp: 32
//     }
// }

// const { name, age } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age} and lives in ${city} with a temperature of ${temp}.`);

const address = ['123 Address Street', 'Centurion', 'Gauteng', 'South Africa', '0172']

const [ street, city, province, country, postalCode ] = address;

console.log(`You are in ${street} in ${province}`)