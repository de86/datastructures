import {LinkedList, ListNode} from './LinkedList';


export class Queue<QueueType> {
    private list: LinkedList<QueueType>;


    constructor() {
        this.list = new LinkedList<QueueType>();
    }


    /**
     * Add a node to the front of the Queue.
     * 
     * @param value {ListType} The value and type to be stored.
     */
    public add(value: QueueType): void {
        this.list.addNodeToHead(value);
    }


    /**
     * Remove the node at the end of the Queue.
     */
    public remove(): void {
        this.list.removeTailNode();
    }


    /**
     * Returns the node at the end of the Queue without removing it.
     */
    public peek(): ListNode<QueueType> {
        return this.list.getTailNode();
    }


    /**
     * Get the number of items in the Queue.
     */
    public getCount(): number {
        return this.list.getCount();
    }
}
