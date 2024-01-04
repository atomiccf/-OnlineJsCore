import Calculator from './Calculator.js'

const calc = new Calculator();
const buttonNumber = document.querySelectorAll('.number');
const buttonSign = document.querySelectorAll('.sing');
const buttonResult = document.querySelector('.result');
const buttonClear = document.querySelector('.clear');
const buttonDouble = document.querySelector('.double');
const buttonBackspace = document.querySelector('.backspace');
const buttonChangeSign = document.querySelector('.change');
document.getElementById("calc_output").innerHTML = 0;

buttonNumber.forEach(item => {
    item.addEventListener('click', (e) => {
        calc.getNumber(e.currentTarget.value);

        if (calc.getY === "" && calc.getSign === null) {
            if (calc.getX === '') {
                document.getElementById("calc_output").innerHTML = 0;
            } else {
                document.getElementById("calc_output").innerHTML = calc.getX;
            }

        } else {
            document.getElementById("calc_output").innerHTML = calc.getY;
        }

    });
});

buttonSign.forEach(item => {
    item.addEventListener('click', (e) => {
        calc.addSign(e.currentTarget.value);
        document.getElementById("calc_output").innerHTML = calc.getSign;
    });
});


buttonResult.addEventListener('click', () => {
    document.getElementById("calc_output").innerHTML = calc.getResult();
});

buttonDouble.addEventListener('click', (e) => {
    calc.toDouble(e.currentTarget.value);
});

buttonClear.addEventListener('click', () => {
    document.getElementById("calc_output").innerHTML = calc.clearResult();
});

buttonBackspace.addEventListener('click', () => {
    document.getElementById("calc_output").innerHTML = calc.removeNum();

});

buttonChangeSign.addEventListener('click', () => {
    document.getElementById("calc_output").innerHTML = calc.changeNumberSign();
})





