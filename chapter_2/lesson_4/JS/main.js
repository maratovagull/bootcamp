// let firstName = 'Faisal';

// // let result = 'Hello' + firstName;
// let result = `Hello ${firstName}`;

// console.log(result);


// let a = 5;
// let b = 10;

// let result = `${a} + ${b} = ${a+b} `;

// console.log(result);

// function multiplay(a,b) {
//     return a * b
// }

// let result = `2 * 5 ${multiplay(2,5)}`;

// console.log(result);

// let str = 'Hello my name is \'Jack\' \nMy profession is developer';

// // console.log(str);    
  
// let str = 'Name: Fais, Lastname: iraqi   54';
// let newArr = [];

// for (let i = 0; i < str.length; i++) {
//     if(str[i] !== 'a') newArr.push(str[i]) 
//     else newArr.push('*');
// }

// let newStr = newArr.join('');

// console.log(newStr);

// let str = promt('Введите число');
// let pattern = /\D/gi;

// // console.log(str.replace(pattern, '*'));
// console.log(pattern.test(str));

// if(!pattern.test(str)) {
//     alert('Все верно');
// } else {
//     alert('Вводите только числа')
// }

let str = prompt('Введите номер телефона');
let pattern = /^\+?\d+$/gi;

console.log(pattern.test(str));