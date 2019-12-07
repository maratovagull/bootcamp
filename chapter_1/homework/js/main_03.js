// var person = {
//     name: 'John',
//     age: 25,
//     haircolor: 'black'
// }

// person.profession = 'developer';
// person.name = 'Sena';

// console.log(person);

// var car = {
//     brand: 'BMW',
//     model: 'm5',
//     maxSpeed: 320,
//     showInfo: function() {
//         console.log( 
//           'Марка:' + car.brand,
//           'Модель:' + car.model, 
//           'Макс.скорость:' + car.maxSpeed
//          )
//     }
// }

// var car2 = {
//     brand: 'Mercedec',
//     model: 'm5',
//     maxSpeed: 320,
//     showInfo: function() {
//         console.log( 
//           'Марка:' + this.brand,
//           'Модель:' + this.model, 
//           'Макс.скорость:' + this.maxSpeed
//          )
//     }
// }

// car2.showInfo();

// var people = ['John', 'Sena',  'Jack', 'Paul' ];

// console.log(people[people.length -1]);

// for(var i = 0; i < people.length; i++) {
//     var hello = 'Hello' + people[i];
//     console.log(hello);
// } 

// for(var i = 0; i < people.length; i++) {
//     if(people[i] === 'Jack') {
//         console.log('hello' +  people[i]);
//     } else {
// console.log('Ty kto takoi?');
//     }
// }

// var car = [
//     {
//         brand: 'BMW',
//         model: 'x5',
//         maxSpeed: 260
//     },
//     {
//         brand: 'Mersedec',
//         model: 'e',
//         maxSpeed: 300
//     },
//     {
//         brand: 'Lada',
//         model: 'priora',
//         maxSpeed: 180
//     },
//     {
//         brand: 'Mersedec',
//         model: 'g',
//         maxSpeed: 260
//     }
// ]

// for(var i = 0; i < car.length; i++){
//     if(car[i].brand === 'Mercedes'){
//         console.log(car[i])
//     }
// }

// for(var i = 0; i < car.length; i++){
//         if(car[i].maxSpeed > 200){
//             console.log(car[i])
//         }
//     }

// var i = 0;
//  while (i < 5) {
//      i++
//      console.log(i)
//  }

// var i = 0;
 
// while(true) {
//     console.log(i++)
// }

// do {
//     console.log(i++)
// } while(false)

// var obj = {
//     name: 'Fais',
//     'last-name' : 'iraqi'
// }

// console.log(obj['last-name'])

// var Targaryen = [
// 'Ta\'Arryn',
// 'Stark',
// 'Lanister',
// 'Baratheon',
// 'Greyjoy'
// ];

// console.log(Targaryen[0]);
// console.log(Targaryen[2]);
// console.log(Targaryen[Targaryen.length-1]);

for(var i=1; i <=100; i+7){
    if(i % 2 === 0 && i % 3 === 0 ){
        console.log('fizzbuzz', i)
    } else if (i% 2 === 0) {

      console.log('fizz', i )
    }else if (i % 3 === 0){
        console.log('buzz',i )
    } else {console.log(i)
    }
}