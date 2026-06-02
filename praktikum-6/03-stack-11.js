class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        const removed = this.head.data;
        this.head = this.head.next;
        this.length--;

        return removed;
    }

    getHead() {
        return this.head ? this.head.data : null;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }

        console.log(result + "null");
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.getHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");

console.log("Isi Stack:");
stack.print();

console.log("Peek =", stack.peek());
console.log("Size =", stack.size());

console.log("Pop =", stack.pop());
console.log("Setelah Pop:");
stack.print();

console.log("Size =", stack.size());