let x = '';
let y = '';
let finish = false;
document.getElementById("calc_output").innerHTML = '0';
let sign = null;

function getNumber (num) {
    if (y ==='' && sign === null){
        x += num;
        console.log(x)
        document.getElementById("calc_output").innerHTML = x;

    }else if (x !== '' && y !== '' && finish){
        finish = false;

        y = num;
        console.log(y)

        document.getElementById("calc_output").innerHTML = y;
    }else {
        y += num;
        console.log(y)

        document.getElementById("calc_output").innerHTML = y;
    }
}

function getSing (str) {
    sign = str;
    document.getElementById("calc_output").innerHTML = sign;

    if (x !== '' && y !== '' && sign !== null){
        getResult();
        y='';
    }
}

function getResult(){
    if (y === ''){
    y = x;
    x = Number(x) + Number(y)

    if (Number.isInteger(y)) {
    document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
    }
    document.getElementById("calc_output").innerHTML = x;

    }

    finish = true;
    switch(sign){
        case '+':
            x = Number(x) + Number(y);

            if (Number.isInteger(x)) {
                document.getElementById("calc_output").innerHTML = x;
            }

            document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
            break;

        case '-':
            x = Number(x) - Number(y);

            if (Number.isInteger(x)) {
                document.getElementById("calc_output").innerHTML = x;
            }

            document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
            break;


        case '*':
            x = Number(x) * Number(y);

            if (Number.isInteger(x)) {
                document.getElementById("calc_output").innerHTML = x;
            }

            document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
            break;

        case '/':
            if (Number(y) === 0){
            document.getElementById("calc_output").innerHTML = "Err";
            }

            if (Number.isInteger(x)) {
                document.getElementById("calc_output").innerHTML = x;
            }

            x = Number(x) / Number(y);
            document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
            break;

    }
 }

function clearResult(){
    x = '';
    y = '';
    sign =null;
    document.getElementById("calc_output").innerHTML = '0';
}

function toDouble(num) {
    if (y ==='' && sign === null && !x.includes('.')) {
        getNumber(num);
    }

    if (x !=='' && sign !== null && !y.includes('.')){
        getNumber(num);
    }

}

function removeNum() {
    if (x !== '' && sign === null) {
        let removedNumber = x.split('');
        removedNumber.pop();
        x = removedNumber.join('');

        if (x === ''){
            document.getElementById("calc_output").innerHTML = '0';
        }else {
            document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
        }

    } else if (x !== '' && sign !== null && !finish) {
        let removedNumber = y.split('');
        removedNumber.pop();
        y = removedNumber.join('');

        if (y === ''){
            document.getElementById("calc_output").innerHTML = '0';
        }else {
            document.getElementById("calc_output").innerHTML = Number(y).toFixed(8);
        }

    } else if (finish) {
        let removedNumber = x.toString().split('');
        removedNumber.pop();
        x = removedNumber.join('');

        if (x === ''){
            document.getElementById("calc_output").innerHTML = '0';
        }else {
            document.getElementById("calc_output").innerHTML = Number(x).toFixed(8);
        }
    }

}

const buttonNumber = document.querySelectorAll('.number');
const buttonSing = document.querySelectorAll('.sing');
const buttonClear = document.querySelector('.clear');
const buttonDouble = document.querySelector('.double');
const buttonBackspace = document.querySelector('.backspace');

buttonNumber.forEach( item => {
    item.addEventListener('click', (e)=>{
        getNumber(e.currentTarget.value);
    })
});

buttonSing.forEach(item => {
    item.addEventListener('click', (e)=> {
        getSing(e.currentTarget.value);
    })
});

buttonClear.addEventListener('click', ()=>{
    clearResult();
});

buttonDouble.addEventListener('click', (e)=>{
    toDouble(e.currentTarget.value);
});

buttonBackspace.addEventListener('click', () =>{
    removeNum();
});





