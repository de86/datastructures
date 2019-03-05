interface listError {
    name: String;
    message: String;
}

class LinkedList<ListType> {
    private head: ListNode<ListType>;
    private tail: ListNode<ListType>;

    private count: number;

    private errIndexOutOfBounds: listError;
    private errEmptyList: listError;

    constructor() {
        this.head = null;
        this.tail = null;

        this.count = 0;

        this.errIndexOutOfBounds = {name: 'IndexOutOfBoundsError', message: 'Index is out of bounds'};
        this.errEmptyList = {name: 'EmptyListError', message: 'Failed to perform operation on empty list'};
    }


    public getHeadNode(): ListNode<ListType> {
        return this.head;
    }


    public getTailNode(): ListNode<ListType> {
        return this.tail;
    }

    
    public getLength(): number {
        return this.count;
    }


    public addNodeToHead(value: ListType): void {
        const newHeadNode = new ListNode<ListType>(value);
        
        if (!this.head && !this.tail) {
            this.head = newHeadNode;
            this.tail = newHeadNode;
        } else {
            newHeadNode.nextNode = this.head;
            this.head = newHeadNode;
        }

        this.count++;
    }


    public removeHeadNode(): void {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (this.head && this.head.nextNode) {
            this.head = this.head.nextNode;
            this.count--;
        } else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.count = 0;
        }
    }


    public addNodeToTail(value: ListType): void {
        const newTailNode = new ListNode<ListType>(value);

        if (!this.head && !this.tail) {
            this.head = newTailNode;
        } else if (this.tail == this.head) {
            this.head.nextNode = newTailNode;
        } else if (this.tail) {
            this.tail.nextNode = newTailNode;
        }
        
        this.tail = newTailNode;
        this.count++;
    }


    public removeTailNode(): void {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.count = 0;
        } else {
            let currentNode = this.head;
            let penultimateNode;

            while (currentNode.nextNode) {
                penultimateNode = currentNode;
                currentNode = currentNode.nextNode;
            }

            penultimateNode.nextNode = null;
            this.tail = penultimateNode;
            this.count--;
        }
    }


    public insertNodeAtIndex(value: ListType, index: number): void {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (index < 0) {
            throw this.errIndexOutOfBounds;
        } else if (index == 0) {
            this.addNodeToHead(value);
        } else {
            let currentNode = this.head;
            let prevNode;
            const newNode = new ListNode<ListType>(value);
            
            for (let i = 0; i < index; i++) {
                if (!currentNode) {
                    throw this.errIndexOutOfBounds;
                }
    
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
    
            prevNode.nextNode = newNode;
            newNode.nextNode = currentNode;
            this.count++;
        }
    }


    public removeNodeAtIndex(index: number): void {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (index < 0) {
            throw this.errIndexOutOfBounds;
        } else if (index == 0) {
            this.removeHeadNode();
        } else {
            let currentNode = this.head;
            let prevNode;
            
            for (let i = 0; i < index; i++) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;

                if (!currentNode) {
                    throw this.errIndexOutOfBounds;
                }
            }
    
            if (!currentNode.nextNode) {
                prevNode.nextNode = null;
                this.tail = prevNode;
            } else {
                prevNode.nextNode = currentNode.nextNode;
            }

            this.count--;
        }
    }


    public getNodeByIndex(index: number): ListNode<ListType> {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (index < 0) {
            throw this.errIndexOutOfBounds;
        } else if (index == 0) {
            return this.head;
        } else {
            let currentNode = this.head;
            
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;

                if (!currentNode) {
                    throw this.errIndexOutOfBounds;
                }
            }
    
            return currentNode;
        }
    }


    public toString(): String {
        let currentNode = this.head;
        let str = ''

        while (currentNode) {
            str += `${currentNode.value} --> ${currentNode.nextNode ? currentNode.nextNode.value : 'end'}\n`;
            currentNode = currentNode.nextNode;
        }

        return str;
    }
}


class ListNode<ListNodeType> {
    value: ListNodeType;
    nextNode: ListNode<ListNodeType>;

    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}


const linkedList = new LinkedList();
linkedList.addNodeToTail('Victor');
linkedList.addNodeToHead('Romelu');
linkedList.addNodeToTail('Paul');
linkedList.addNodeToHead('Marcus');
linkedList.addNodeToHead('David');
linkedList.removeTailNode();
linkedList.insertNodeAtIndex('Jesse', 2);
linkedList.removeHeadNode();
linkedList.insertNodeAtIndex('Juan', 3);
console.log(linkedList.toString());
linkedList.removeNodeAtIndex(4);
console.log(linkedList.toString());
console.log(linkedList.getNodeByIndex(0).value);
