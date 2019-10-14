class StackNode {
    value: any;
    next: StackNode;

    constructor(value: any, next: StackNode = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    first: any;
    last: any;
    size: any;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: any) {
        let newNode: StackNode = new StackNode(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }

    pop() {
        let popNode: StackNode = this.first;
        this.first = this.first.next;
        this.size--;
        return popNode;
    }

    peek() {
        return this.first;
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