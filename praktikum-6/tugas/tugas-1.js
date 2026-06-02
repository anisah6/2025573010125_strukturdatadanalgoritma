class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // akses O(1) ke node terakhir
        this.size = 0;
    }
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // O(1)
    // Menambah node di awal list
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            console.log("Index tidak valid");
            return;
        }

        if (index === 0) {
            this.prepend(data);
            return;
        }

        if (index === this.size) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;

        current.prev.next = newNode;
        current.prev = newNode;

        this.size++;
    }

    delete(data) {
        if (!this.head) return;

        let current = this.head;

        while (current) {
            if (current.data === data) {

                if (current === this.head) {
                    this.head = current.next;

                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                }
                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                this.size--;
                return;
            }

            current = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    printForward() {
        let current = this.head;
        let result = "";

        while (current) {
            result += `[${current.data}] <-> `;
            current = current.next;
        }

        result += "null";
        console.log(result);
    }

    printBackward() {
        let current = this.tail;
        let result = "";

        while (current) {
            result += `[${current.data}] <-> `;
            current = current.prev;
        }

        result += "null";
        console.log(result);
    }
}

const dll = new DoublyLinkedList();

console.log("=== Append ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.printForward();

console.log("\n=== Prepend ===");
dll.prepend(5);
dll.printForward();

console.log("\n=== InsertAt(2,15) ===");
dll.insertAt(2, 15);
dll.printForward();

console.log("\n=== Delete(20) ===");
dll.delete(20);
dll.printForward();

console.log("\n=== Reverse ===");
dll.reverse();
dll.printForward();

console.log("\n=== Print Backward ===");
dll.printBackward();