function isValidNumber(number) {
return typeof number !== 'number' || isNaN(number) && !isFinite(number);
}

class Stack {
    constructor(size) {
    if (!isValidNumber(size)) {
    throw new Error('Не валидное число');
    }

    if (size === undefined) {
    this.size = 10;
    } else {
    this.size = size;
    }

    this.storage = [];
    }

    isEmpty() {
    return this.storage.length === 0;
    };

    push(elem) {

    if (this.storage.length === this.size) {
    throw new Error('Стек переполнен !');
    } else {
    this.storage.push(elem);
    }
    };

    pop() {

    if (this.storage.length === 0) {
    throw new Error('Стек пуст !');
    } else {
    return this.storage.pop();
    }
    };

    peek() {

    if (this.storage.length === 0) {

    return null;
    } else {

    return this.storage.at(-1);
    }
    };

    toArray() {
    const array = [];

    this.storage.forEach(item => {
    array.push(item);
    });

    return array;
    };

    static fromIterable(object) {

    if (object.length === 0) {
    throw new Error('Не итерируемый объект !');
    } else {

    const stack = new Stack();
    stack.size = object.length;

    for (let item of object) {
    stack.push(item);
    }

    return stack;
    }
    }
}


const myStack = new Stack();



console.log(myStack.isEmpty());
console.log(myStack.toArray())