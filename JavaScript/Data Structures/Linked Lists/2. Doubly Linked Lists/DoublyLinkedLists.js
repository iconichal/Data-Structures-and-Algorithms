class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return `popped ${poppedNode} from Doubly Linked Lists. New length is ${this.length}`;
  }
  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return `removed ${oldHead} from the beginning. Updated length is ${this.length}`;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);

    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    // let beforeNode = removedNode.prev;
    removedNode.next.prev = removedNode.prev;
    // let afterNode - removedNode.next;

    removedNode.next = removedNode.prev = null;

    this.length--;

    return `removed ${removedNode} from the list`;
  }
}

let list = new DoublyLinkedLists();
