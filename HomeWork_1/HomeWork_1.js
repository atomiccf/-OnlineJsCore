function convertNumberToNumberSystem() {
    const firstNumber = Number(prompt('Введите число'));
    const secondNumber = Number(prompt('Введите число'));

    return (isNaN(firstNumber) || isNaN(secondNumber)) ? console.log('Некорректный ввод!') : console.log(firstNumber.toString(secondNumber));
}


function calculateStringToNumber() {
    const firstNumber = Number(prompt('Введите число'));

    if (isNaN(firstNumber)){
        console.log('Некорректный ввод!')
        return
    }

    const secondNumber = Number(prompt('Введите число'));

    if (isNaN(secondNumber)){
        console.log('Некорректный ввод!')
        return
    }

    if(typeof firstNumber === 'number' && typeof secondNumber === 'number' ) {
        return  `${firstNumber + secondNumber},${firstNumber / secondNumber}`
    }
}