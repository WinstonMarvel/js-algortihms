class QueueNode {
    value: any;
    next: QueueNode;

    constructor(value: any, next: QueueNode = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    first: any;
    last: any;
    size: any;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: any) {
        let newNode = new QueueNode(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    dequeue() {
        this.first = this.first.next;
        this.size--;
    }

    back() {
        return this.last;
    }

    front() {
        return this.front;
    }

    isEmpty() {
        if (this.size < 1) {
            return true;
        }
        return false;
    }

    toArray() {
        let temp: Array < any > = [];
        let tempNode: StackNode = this.first;
        while (tempNode !== null) {
            temp.push(tempNode.value);
            tempNode = tempNode.next;
        }
        return temp.reverse();
    }
}
