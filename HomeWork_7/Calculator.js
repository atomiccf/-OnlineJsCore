export default class Calculator {
    #x = '';
    #y = '';
    #finish = false;
    #sign = null;
    #endMulti = false

    get getX() {
        return this.#x;
    };

    set setFinish(bool) {
        this.#endMulti = bool
    }

    get getY() {
        return this.#y;
    };

    get getSign() {
        return this.#sign;
    };

    getNumber(num) {
        if (this.#y === '' && this.#sign === null) {
            if (num === '0') {
                this.#x = ''
            } else {
                this.#x += num;
            }

        } else if (this.#x !== '' && this.#y !== '' && this.#finish) {
            this.#finish = false;
            this.#y = num;
        } else {
            this.#y += num;
        }

    };

    addSign(str) {
        this.#sign = str;

        if (this.#x !== '' && this.#y !== '' && !this.#endMulti) {
            this.getResult();
            this.#y = '';
        } else {
            this.#y = '';
        }

    };

    getResult() {
        if (this.#y === '') {
            this.#y = this.#x;
            return this.#x = Number(this.#x) + Number(this.#y);
        }

        this.#finish = true;

        switch (this.#sign) {
            case '+':
                this.#x = Number(this.#x) + Number(this.#y);
                return this.#x;

            case '-':
                this.#x = Number(this.#x) - Number(this.#y);
                return this.#x;

            case '*':
                this.#x = Number(this.#x) * Number(this.#y);
                return this.#x;

            case '/':
                if (Number(this.#y) === 0) {
                    return (this.#x = "Err");
                }

                this.#x = Number(this.#x) / Number(this.#y);
                return this.#x;
        }

    };

    clearResult() {
        this.#x = '';
        this.#y = '';
        this.#sign = null;

        return '0';
    }

    toDouble(num) {
        if ((this.#y === '' && this.#sign === null) || (this.#x !== '' && this.#sign !== null)) {
            this.getNumber(num);
        }
    };

    removeNum() {
        if (this.#x !== '' && this.#sign === null) {
            let removedNumber = this.#x.split('');
            removedNumber.pop();
            this.#x = removedNumber.join('');

            if (this.#x === '') {
                return '0';
            } else {
                return this.getX
            }

        } else if (this.#x !== '' && this.#sign !== null && !this.#finish) {
            let removedNumber = this.#y.split('');
            removedNumber.pop();
            this.#y = removedNumber.join('');

            if (this.#y === '') {
                return '0';
            } else {
                return this.getY;
            }

        } else if (this.#finish) {
            let removedNumber = this.#x.toString().split('');
            removedNumber.pop();
            this.#x = removedNumber.join('');

            if (this.#x === '') {
                return '0';
            } else {
                return this.getX;
            }
        }

    };

    changeNumberSign() {
        if (this.#endMulti) {
            return this.#x = this.#x * -1;
        }

        if (this.#y === '' && this.#sign === null) {
            console.log(1)
            return this.#x = this.#x * -1;
        } else {
            return this.#x = this.#x * -1;
        }

    };
}
