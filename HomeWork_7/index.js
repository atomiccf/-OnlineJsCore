import Calculator from './Calculator.js'

const calc = new Calculator();
const numberField = document.getElementById('number_cell');
const signField = document.getElementById('sign_cell');
document.getElementById("calc_output").innerHTML = 0;

numberField.addEventListener("click", (e)=> {
    if (e.target.classList.contains('number')) {
        calc.getNumber(e.target.value);

        if (calc.getY === "" && calc.getSign === null) {
            if (calc.getX === '') {
                document.getElementById("calc_output").innerHTML = 0;
            } else {
                document.getElementById("calc_output").innerHTML = calc.getX;
            }

        } else {
            document.getElementById("calc_output").innerHTML = calc.getY;
        }
    }
});

signField.addEventListener('click', (e)=>{
    if (e.target.classList.contains('sing')) {
        calc.addSign(e.target.value);
        document.getElementById("calc_output").innerHTML = calc.getSign;
    }

    if (e.target.classList.contains('result')) {
        calc.setFinish = true;
        document.getElementById("calc_output").innerHTML = calc.getResult();
    }

    if(e.target.classList.contains('double')) {
        calc.toDouble(e.currentTarget.value);
    }

    if(e.target.classList.contains('clear')) {
        document.getElementById("calc_output").innerHTML = calc.clearResult();
    }

    if(e.target.classList.contains('backspace')) {
        document.getElementById("calc_output").innerHTML = calc.removeNum();
    }

    if(e.target.classList.contains('change')) {
        document.getElementById("calc_output").textContent = calc.changeNumberSign();
    }

});






