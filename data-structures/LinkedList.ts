class ListNode {
    value: any;
    next: ListNode;
    
    constructor(value: any, next: ListNode = null){
        this.value = value;
        this.next = next;
    }    
}

class LinkedList {
    head: ListNode;
    tail: ListNode;
    length: number;
    
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0;
    }

    push(value: any): LinkedList{
        let newNode = new ListNode(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }    

    pop(): LinkedList{
        let current: ListNode = this.head;
        while(current.next !== this.tail){
            current = current.next;
        }
        this.tail = current; 
        this.tail.next = null;
        this.length--;
        return this;
    }

    shift(): LinkedList{
        let current: ListNode = this.head;
        this.head = current.next;
        this.length--;
        return this;
    }

    unshift(value: any): LinkedList{
        let newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index: number): any{
        let current: ListNode = this.head;
        let currentIndex: number = 0;
        while(current !== null){
            if(currentIndex == index){
                return current;
            }
            current = current.next;
            currentIndex++;
        }
        return -1;
    }

    set(index: number, value: any): LinkedList{
        let node = this.get(index);
        if(node !== -1){
            node.value = value;
        } else {
            throw new Error("Node not found");
        }
        return this;
    }

    insert(value: any, index: number): LinkedList{
        let newNode = new ListNode(value);
        let current: ListNode = this.head;
        let currentIndex: number = 0;
        let prev: ListNode;
        if(index > this.length){
            throw new Error("Attempting to insert beyond List size");
        }
        while(current !== null){
            if(currentIndex === index){
                console.log("at " +index)
                newNode.next = current;
                current = newNode;
                prev.next = current;
                this.length++;
                return this;
            }
            prev = current;
            current = current.next;
            currentIndex++;
        }
        return this;
    }

    remove(index: number): LinkedList{
        let current: ListNode = this.head;
        let currentIndex: number = 0;
        let prev: ListNode;
        if(index > this.length){
            throw new Error("Attempting to insert beyond List size");
        }
        while(current !== null){
            if(currentIndex === index){
                prev.next = current.next;
                this.length--;
                return this;
            }
            prev = current;
            current = current.next;
            currentIndex++;
        }
        return this;
    }

    toArrray(): Array<any>{
        let result = [];
        let current: ListNode = this.head;
        while(current !== null){
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    reverse(): LinkedList{
        let prev:ListNode = null;
        let current: ListNode = this.head;
        let next:ListNode = current.next;

        this.head = this.tail;
        for(var i = 0; i < this.length; i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this; 
    }
}


var list = new LinkedList();
list.push(5);
list.push(15);
list.push(225);
debugger; 
list.push(315);
list.push(515);
list.push(615);
debugger;
list.reverse();
console.log(list.toArrray());

