class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let char of ekspresi) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}

const test = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))",
  "(a + b) * (c - d))",
];

console.log("\n=== CEK KURUNG SEIMBANG ===");

test.forEach((exp) => {
  console.log(`${exp} → Seimbang: ${cekKurungSeimbang(exp)}`);
});