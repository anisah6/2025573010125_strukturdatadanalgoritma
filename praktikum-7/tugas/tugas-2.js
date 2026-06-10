class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) { // O(1)
        const node = new Node(data);

        node.next = this.top;
        this.top = node;

        this.size++;
    }

    pop() { // O(1)
        if (this.isEmpty()) return null;

        const data = this.top.data;
        this.top = this.top.next;

        this.size--;

        return data;
    }

    peek() { // O(1)
        return this.top ? this.top.data : null;
    }

    isEmpty() { // O(1)
        return this.size === 0;
    }
}

class MinStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
    }

    push(value) { // O(1)
        this.stack.push(value);

        if (
            this.minStack.isEmpty() ||
            value <= this.minStack.peek()
        ) {
            this.minStack.push(value);
        }
    }

    pop() { // O(1)
        const removed = this.stack.pop();

        if (removed === this.minStack.peek()) {
            this.minStack.pop();
        }

        return removed;
    }

    getMin() { // O(1)
        return this.minStack.peek();
    }

    peek() { // O(1)
        return this.stack.peek();
    }
}

const ms = new MinStack();

ms.push(5);
console.log("Push 5");

ms.push(3);
console.log("Push 3");

ms.push(7);
console.log("Push 7");

ms.push(2);
console.log("Push 2");

console.log("getMin() =", ms.getMin());

ms.pop();
console.log("Pop");

console.log("getMin() =", ms.getMin());

ms.pop();
console.log("Pop");

console.log("getMin() =", ms.getMin());