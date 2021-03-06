import {LinkedList} from './LinkedList';


export class Queue<QueueType> {
    private list: LinkedList<QueueType>;


    constructor() {
        this.list = new LinkedList<QueueType>();
    }


    /**
     * Add a value to the back of the Queue.
     * 
     * @param value {ListType} The value and type to be stored.
     */
    public add(value: QueueType): void {
        this.list.addToHead(value);
    }


    /**
     * Remove the value at the front of the Queue.
     */
    public remove(): QueueType {
        return this.list.removeTail();
    }


    /**
     * Returns the value at the front of the Queue without removing it.
     */
    public peek(): QueueType {
        return this.list.getTail();
    }


    /**
     * Get the number of items in the Queue.
     */
    public getSize(): number {
        return this.list.getSize();
    }
}
