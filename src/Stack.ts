import {LinkedList} from './LinkedList';


export class Stack<StackType> {
    private list: LinkedList<StackType>;


    constructor() {
        this.list = new LinkedList<StackType>();
    }


    /**
     * Add a value to the top of the Stack.
     * 
     * @param value {ListType} The value to be added to the stack.
     */
    public push(value: StackType): void {
        this.list.addToHead(value);
    }


    /**
     * Remove the value at the top of the stack.
     */
    public pop(): StackType {
        return this.list.removeHead();
    }


    /**
     * Returns the value at the front of the Queue without removing it.
     */
    public peek(): StackType {
        return this.list.getTail();
    }


    /**
     * Get the number of items in the Queue.
     */
    public getSize(): number {
        return this.list.getSize();
    }
}
