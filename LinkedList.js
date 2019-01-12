class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    insertValueAtFront(value) {
        const newHeadNode = new Node(value);
        
        if (!this.head && !this.tail) {
            this.head = newHeadNode;
            this.tail = newHeadNode;
        } else {
            newHeadNode.nextNode = this.head;
            this.head = newHeadNode;
        }
    }


    insertValueAtBack(value) {
        const newTailNode = new Node(value);

        if (!this.head && !this.tail) {
            this.head = newTailNode;
        } else if (this.tail == this.head) {
            this.head.nextNode = newTailNode;
        } else if (this.tail) {
            this.tail.nextNode = newTailNode;
        }
        
        this.tail = newTailNode;
    }


    insertValueAtIndex(value, index) {
        const errIndexOutOfBounds = {name: 'IndexOutOfBoundsError', message: 'Index is out of bounds'};

        if (index < 0) {
            throw errIndexOutOfBounds;
        } else if (index == 0) {
            this.insertValueAtFront(value);
        } else {
            let currentNode = this.head;
            let prevNode;
            const newNode = new Node(value);
            
            for (let i = 0; i < index; i++) {
                if (!currentNode) {
                    throw errIndexOutOfBounds;
                }
    
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
    
            prevNode.nextNode = newNode;
            newNode.nextNode = currentNode;
        }
    }


    removeFirstValue() {
        if (!this.head && !this.tail) {
            throw {name: 'EmptyListError', message: 'Failed to perform operation on empty list'};
        } else if (this.head && this.head.nextNode) {
            this.head = this.head.nextNode;
        } else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        }
    }


    removeLastValue() {
        if (!this.head && !this.tail) {
            throw {name: 'EmptyListError', message: 'Failed to perform operation on empty list'};
        } else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let penultimateNode = this.head;
            let currentNode = this.head;

            while (currentNode.nextNode) {
                penultimateNode = currentNode;
                currentNode = currentNode.nextNode;
            }

            penultimateNode.nextNode = null;
            this.tail = penultimateNode;
        }
    }


    removeValueAtIndex(index) {
        const errIndexOutOfBounds = {name: 'IndexOutOfBoundsError', message: 'Index is out of bounds'};

        if (index < 0) {
            throw errIndexOutOfBounds;
        } else if (index == 0) {
            this.removeFirstValue();
        } else {
            let currentNode = this.head;
            let prevNode;
            
            for (let i = 0; i < index; i++) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;

                if (!currentNode) {
                    throw errIndexOutOfBounds;
                }
            }
    
            if (!currentNode.nextNode) {
                this.removeLastValue();
            } else {
                prevNode.nextNode = currentNode.nextNode;
            }
        }
    }


    getValueByIndex(index) {
        const errIndexOutOfBounds = {name: 'IndexOutOfBoundsError', message: 'Index is out of bounds'};

        if (index < 0) {
            throw errIndexOutOfBounds;
        } else if (index == 0) {
            return this.head;
        } else {
            let currentNode = this.head;
            
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;

                if (!currentNode) {
                    throw errIndexOutOfBounds;
                }
            }
    
            return currentNode;
        }
    }


    toString() {
        let currentNode = this.head;
        let str = ''

        while (currentNode) {
            str += `${currentNode.value} --> ${currentNode.nextNode ? currentNode.nextNode.value : 'end'}\n`;
            currentNode = currentNode.nextNode;
        }

        return str;
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}


const linkedList = new LinkedList();
linkedList.insertValueAtBack('asdf');
linkedList.insertValueAtFront('ydfg');
linkedList.insertValueAtBack('new back');
linkedList.insertValueAtFront('new front');
linkedList.insertValueAtIndex('test', 2);
linkedList.insertValueAtIndex('test 2', 3);
console.log(linkedList.toString());
linkedList.removeValueAtIndex(5);
console.log(linkedList.toString());
console.log(linkedList.getValueByIndex(0).value);
