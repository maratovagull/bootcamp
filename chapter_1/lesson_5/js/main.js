// var seconName = 'secondName';

// let name ='someName';

// const surName = 'surName';

// function example() {
//     var firstName = 'Emir';
//    function example2() {
//     console.log(firstName);
//    }

//    example2();

// }

// example();
//or(var i = 0; i < 3; i++) {

// }

// console.log(i);

// var x = 10;

// var x;

// console.log(x);

// var x = 10;

// console.log(x);


// let emir = 'value';

// console.log(window.emir);


// const obj = {
//     name: 'Fais',
//     lastName:'Iragi'

// };


// obj.name = 'Pipi';
// obj.lastName = 'Sasa';
// console.log(obj);

// const arr = [1, 2, 3]; 

// arr[0] = 'Hello';

// arr.pop();

// console.log(arr);


// let name =' SomeName';


// let secondName = name;

// secondName 


// let obj = {
//     name: 'SomeName'
// }
// let obj2 = obj;

// obj2.name = 'Emir';

// console.log(obj.name);
// console.log(obj2.name);


// const obj = {
//     name: 'Fais',
//     group: 'JS'
// }

// const obj2 = {...obj};

// obj2.group = 'Phyton';

// console.log(obj);
// console.log(obj2);


// const arr = [1, 2, 3, 4, 5];

// const arr2 = [...arr];

// arr2[0] = 'NEW';

// console.log(arr, arr2);


// const obj = {
//     name: 'someName',
//     lastName: 'lastName'
// };

// const obj2 = {
//     ...obj,
//     age: 20,
//     name: Faisal
// }

// console.log(obj2);



const people = ['jack', 'john', 'police', 'bill', ' paul']
const hata = []


for(let i = 0; i < people.length; i++) {
    if(people[i] === 'john') continue;
    if(people[i] === 'police') break;
    hata.push(people[i])
}

console.log(hata);