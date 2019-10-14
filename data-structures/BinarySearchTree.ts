class TreeNode {
    value: any;
    left: TreeNode;
    right: TreeNode;

    constructor(value: any){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    root: TreeNode;

    constructor(){
       this.root = null;
    }

    insert(value: any){
        let newNode = new TreeNode(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode: TreeNode = this.root;
            while(true) {
                if(value < currentNode.value){
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else if(value > currentNode.value){
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                } else {
                    return undefined;
                }
            }
        }
    }

    find(value: any){
        let currentNode = this.root;
        while(currentNode !== null) {
            if(currentNode.value === value) {
                return currentNode;
            } else if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}


export default BinarySearchTree;
