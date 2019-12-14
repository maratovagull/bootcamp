                    //Замыкание//

// function sayHello() {
//     var name ='Jack';
//     console.log('Hello ' + name);
//     function sayBye() {
//         console.log('Bye' + name)
//     }
//     sayBye()
// }
// // console.log(name);

// sayHello();

// function sayHello() {
//     let name = 'Jack';
//     return function() {
//         name= 'Hello ' + name;
//         return name
//     }
// }

// let helloFunc = sayHello();


// console.log(sayHello());
// console.log(sayHello());
// console.log(sayHello()); //hello hello hello Jack


// function sumFunc (a) {
//     return function(b) {
//         return a + b 
//     }
// }

// const sum = sumFunc(5);

// console.log(sum(2));


// function incEnw() {
//     let num  = 0;
//     return function() {
//         num++
//         console.log(num);
//     }
// }

// let count = incEnw();


// count(); // здесь будет 1
// count(); // здесть 2 потому что каждый раз увеличивает на 1
// count(); //  а здесть соответсвенно 3!


// function sumFunc(a) {
//     return function(b) { // когда вот так вызывается функция то значение первой функции сохраняется 
//         return a + b
//     }
// }
//  let sum = sumFunc(3) (5);

//  console.log(sum);


                         // Рекурсия//

// let arrNum = [1, 2, 3, 4, 5];

// function checkArr(arr, i = 0 ) {
//     if(i < arr.length) {
//         console.log(arr [i])
//         i++
//         return checkArr(arr , i)
//     }
// }

// checkArr(arrNum);


