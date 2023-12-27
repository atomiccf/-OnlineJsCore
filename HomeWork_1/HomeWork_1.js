function isValidNumber(value) {
    return value === value.trim().length && !isNaN(value);
}

function isValidRadix (number) {
    return isValidNumber(number) && number >= 2 && number <= 36;
 }


function convertNumberToNumberSystem() {
    const firstNumber = prompt('Введите число');
    const secondNumber = prompt('Введите число');

    if ((!isValidNumber(firstNumber) || !isValidNumber(secondNumber)) && !isValidRadix(secondNumber)) {
    return console.log('Некорректный ввод!');
    } else {
    return console.log(Number(firstNumber).toString(Number(secondNumber)));
    }
}


function calculateStringToNumber() {
    const firstNumber = prompt('Введите число');

    if (!isValidNumber(firstNumber)) {
    return console.log('Некорректный ввод!');
    }

    const secondNumber = prompt('Введите число');

    if (!isValidNumber(secondNumber)) {
    return console.log('Некорректный ввод!');
    }

    return  `${Number(firstNumber) + Number(secondNumber)},${Number(firstNumber) / Number(secondNumber)}`
}

