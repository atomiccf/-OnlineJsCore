class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    #top = null;
    #sizeNode = 0;

    constructor(size = 10) {
        if (!Number.isInteger(size) || size <= 0) {
            throw new Error("Не валидный параметр!");
        }

        this.size = size;
    }

    push(data) {
        if (this.#sizeNode >= this.size) {
            throw new Error('Стек переполнен!');
        }

        const newNode = new Node(data);
        newNode.next = this.#top;
        this.#top = newNode
        this.#sizeNode++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Стек пуст !');
        }

        const removedNode = this.#top;
        this.#top = removedNode.next;
        this.#sizeNode--;

        return removedNode.data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.#top.data;
    }

    isEmpty() {
        return this.#sizeNode === 0;
    }

    toArray() {
        const result = [];
        let current = this.#top;

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    }

    static fromIterable(object) {
        if (!object[Symbol.iterator]) {
            throw new Error('Не итерируемый объект !');
        }

        const stack = new Stack();
        stack.size = object.length;

        for (let item of object) {
            stack.push(item);
        }

        return stack;
    }
}




