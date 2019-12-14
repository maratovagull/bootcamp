let number = prompt('Введите номер телефона');

function validateNumber(number) {
    var re = /(\+\d{1,4}\s)|(\d+\s?)(\d\s?)/;
    var code=/^\+\d+\s/;
    console.log(re.test(number));
    return number.match(code);
} 
console.log(validateNumber(number));