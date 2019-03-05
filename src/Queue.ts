import {LinkedList, ListNode} from './LinkedList';


export class Queue<QueueType> {
    private list: LinkedList<QueueType>;


    constructor() {
        this.list = new LinkedList<QueueType>();
    }


    public add(value: QueueType): void {
        this.list.addNodeToHead(value);
    }


    public remove(): void {
        this.list.removeTailNode();
    }


    public peek(): ListNode<QueueType> {
        return this.list.getTailNode();
    }


    public getLength(): number {
        return this.list.getLength();
    }
}
