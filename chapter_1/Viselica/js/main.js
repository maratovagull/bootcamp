const words = [
    // 'javascript',
    // 'object',
    // 'python',
    // 'task',
    'makers'
]

let word = words[Math.floor(Math.random()*words.length)]

let answerArr = word.split('').map(function(item){
    return '_'
})
let remainingLetters = word.length;

let attempets = 0;
let trueAttempets = 0;

while(remainingLetters > 0){
    let guess = prompt
    ('Угадайте букву, или нажмите отмена чтобы выйти из игры \n' + answerArr.join())
     if(guess === '' ) continue;

     
     if(guess === null ) break;

    if(guess.length !== 1){
        alert('Пожалуйста, введите только одну букву.');
        continue
    }
     word.split('').map(function(item, index){
       if(guess === item && answerArr[index] === '_'){
        answerArr[index] === guesss
        remainingLetters--;
       } 
    })
}
attempets++;
    if(!remainingLetters){
    alert('Ураа!!!, Вы отгадали слово: \n' + answerArr.join(''))
    alert('кол-во попыток: ')
}
