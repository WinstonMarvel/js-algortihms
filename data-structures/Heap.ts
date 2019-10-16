// Parent node: arr[i-1]/2
// Left node: arr[(2*i)+1]
// Right node: [(2*i)+2]


class Heap {
    private data: Array < any > ;

    constructor() {
        this.data = [];
    }

    private getParent(elIndex) {
        if (elIndex) {
            return this.data[(2 * elIndex) + 2]
        }
    }

    insert(val: any) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    private bubbleUp(index) {
        let parent = Math.floor( Math.abs(index - 1) / 2);
        if(parent === 0){
            return false;
        } else if (this.data[index] > this.data[parent]) {
            let temp = this.data[index];
            this.data[index] = this.data[parent];
            this.data[parent] = temp;
        } 
        this.bubbleUp(parent)
    }

    isEmpty(): Boolean {
        if (this.data.length < 1) {
            return true;
        }
        return false;
    }

    toArray() {}

}

let hp = new Heap();
hp.insert(5)
hp.insert(15)
hp.insert(51)
hp.insert(25)
hp.insert(7)
hp.insert(77)

console.log(hp)