class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(head) {
    let result = "";
    let current = head;

    while (current) {
        result += current.data;
        if (current.next) result += " -> ";
        current = current.next;
    }

    console.log(result || "List kosong");
}


function palindromLL(head) {
    let arr = [];
    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}


function hapusNDariAkhir(head, n) {
    let dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}


function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

console.log("=== PALINDROM ===");

let p1 = createLinkedList([1, 2, 3, 2, 1]);
console.log("Kasus 1:", palindromLL(p1)); // true

let p2 = createLinkedList([1, 2, 2, 1]);
console.log("Kasus 2:", palindromLL(p2)); // true

let p3 = createLinkedList([1, 2, 3]);
console.log("Kasus 3:", palindromLL(p3)); // false


console.log("\n=== HAPUS N DARI AKHIR ===");

let h1 = createLinkedList([1, 2, 3, 4, 5]);
h1 = hapusNDariAkhir(h1, 2);
printList(h1); // 1 -> 2 -> 3 -> 5

let h2 = createLinkedList([10, 20, 30, 40]);
h2 = hapusNDariAkhir(h2, 1);
printList(h2); // 10 -> 20 -> 30

let h3 = createLinkedList([7, 8, 9]);
h3 = hapusNDariAkhir(h3, 3);
printList(h3); // 8 -> 9


console.log("\n=== TENGAH LINKED LIST ===");

let t1 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Kasus 1:", tengahLinkedList(t1).data); // 3

let t2 = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log("Kasus 2:", tengahLinkedList(t2).data); // 4

let t3 = createLinkedList([100, 200, 300]);
console.log("Kasus 3:", tengahLinkedList(t3).data); // 200