interface IListError {
    name: String;
    message: String;
}

export default class LinkedList<ListType> {
    private head: ListNode<ListType>;
    private tail: ListNode<ListType>;

    private size: number;

    private errIndexOutOfBounds: IListError;
    private errEmptyList: IListError;

    constructor() {
        this.head = null;
        this.tail = null;

        this.size = 0;

        this.errIndexOutOfBounds = {name: 'IndexOutOfBoundsError', message: 'Index is out of bounds'};
        this.errEmptyList = {name: 'EmptyListError', message: 'Failed to perform operation on empty list'};
    }


    /**
     * Get the node at the head of the Linked List.
     */
    public getHead(): ListType {
        return this.head ? this.head.value : null;
    }


    /**
     * Get the node at the tail of the Linked List.
     */
    public getTail(): ListType {
        return this.tail ? this.tail.value : null;
    }

    
    /**
     * Get the number of items in the Linked List.
     */
    public getSize(): number {
        return this.size;
    }


    /**
     * Add a node to the head of the Linked List.
     * 
     * @param value {ListType} The value and type to be stored.
     */
    public addToHead(value: ListType): void {
        const newHeadNode = new ListNode<ListType>(value);
        
        if (!this.head && !this.tail) {
            this.head = newHeadNode;
            this.tail = newHeadNode;
        } else {
            newHeadNode.nextNode = this.head;
            this.head = newHeadNode;
        }

        this.size++;
    }


    /**
     * Remove the head node from the Linked List.
     */
    public removeHead(): ListType {
        let removedNodeValue;

        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (this.head && this.head.nextNode) {
            removedNodeValue = this.head.value;

            this.head = this.head.nextNode;
            this.size--;
        } else if (this.head == this.tail) {
            removedNodeValue = this.head.value;

            this.head = null;
            this.tail = null;
            this.size = 0;
        }

        return removedNodeValue;
    }


    /**
     * Add a node to the tail of the Linked List.
     * 
     * @param value {ListType} The value and type to be stored.
     */
    public addToTail(value: ListType): void {
        const newTailNode = new ListNode<ListType>(value);

        if (!this.head && !this.tail) {
            this.head = newTailNode;
        } else if (this.tail == this.head) {
            this.head.nextNode = newTailNode;
        } else if (this.tail) {
            this.tail.nextNode = newTailNode;
        }
        
        this.tail = newTailNode;
        this.size++;
    }


    /**
     * Remove the tail node from the Linked List.
     * 
     * @param value {ListType} Add a new value of the given type to the head of the Linked List.
     */
    public removeTail(): ListType {
        let removedNodeValue;

        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (this.head == this.tail) {
            removedNodeValue = this.head.value;

            this.head = null;
            this.tail = null;
            this.size = 0;

        } else {
            removedNodeValue = this.head.value;

            let currentNode = this.head;
            let penultimateNode;

            while (currentNode.nextNode) {
                penultimateNode = currentNode;
                currentNode = currentNode.nextNode;
            }

            penultimateNode.nextNode = null;
            this.tail = penultimateNode;
            this.size--;
        }

        return removedNodeValue;
    }


     /**
     * Add a node containing the given value and type at the given index.
     * 
     * @param value {ListType} The value and type to be stored.
     * @param index {number} The index to store the given value at.
     */
    public insertAtIndex(index: number, value: ListType): void {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (index < 0) {
            throw this.errIndexOutOfBounds;
        } else if (index == 0) {
            this.addToHead(value);
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
            this.size++;
        }
    }


    /**
     * Remove the node from the Linked List at the given index.
     * 
     * @param index {number} The index of the node remove.
     */
    public removeAtIndex(index: number): ListType {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (index < 0) {
            throw this.errIndexOutOfBounds;
        } else if (index == 0) {
            return this.removeHead();
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
    
            let removedNodeValue;
            if (!currentNode.nextNode) {
                removedNodeValue = currentNode.value;

                prevNode.nextNode = null;
                this.tail = prevNode;

                
            } else {
                removedNodeValue = currentNode.nextNode.value;

                removedNodeValue = prevNode.nextNode.value;
                prevNode.nextNode = currentNode.nextNode;
            }

            this.size--;

            return removedNodeValue;
        }
    }


    /**
     * Get the node stored at the given index.
     * 
     * @param index {number} The index of the node to retrieve.
     */
    public getByIndex(index: number): ListType {
        if (!this.head && !this.tail) {
            throw this.errEmptyList;
        } else if (index < 0) {
            throw this.errIndexOutOfBounds;
        } else if (index == 0) {
            return this.head.value;
        } else {
            let currentNode = this.head;
            
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;

                if (!currentNode) {
                    throw this.errIndexOutOfBounds;
                }
            }
    
            return currentNode.value;
        }
    }


    /**
     * Remove all items from the list
     */
    public clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Get a string representation of the current state of the Linked List
     */
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


export class ListNode<ListNodeType> {
    value: ListNodeType;
    nextNode: ListNode<ListNodeType>;

    constructor(value: ListNodeType) {
        this.value = value;
        this.nextNode = null;
    }
}
