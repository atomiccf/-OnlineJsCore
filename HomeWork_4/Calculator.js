function isValidNumber(number) {
    return typeof number === 'number' && isFinite(number);
}

class Calculator {

    constructor(num_one, num_two) {
    if ( !isValidNumber(num_one) || !isValidNumber(num_two) ){
    throw new Error('Не валидное число ');
    }

    this.x = num_one;
    this.y = num_two;
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);

    }

    setX(num) {

    if (!isValidNumber(num)){
    throw new Error('Не валидное число ');
    }

    this.x= num;
    };

    setY(num) {
    if (!isValidNumber(num)){
    throw new Error('Не валидное число ');
    }

    this.y = num;
    };

    logSum() {
    return this.x + this.y;
    };

    logMul() {
    return this.x * this.y;
    };

    logSub() {
    return this.x - this.y;
    };

    logDiv() {

    if (this.y !== 0) {
     return this.x / this.y;
    } else {
    throw new Error('Ошибка !');
    }


  };
}

const calc = new Calculator()


