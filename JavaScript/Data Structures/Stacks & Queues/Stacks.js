// follows the principle of singly linked lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    return temp.value;
  }
}
