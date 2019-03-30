import LinkedList from '../LinkedList';

describe('src/LinkedList', () => {
    const linkedList = new LinkedList<string>();

    beforeEach(() => linkedList.clear());

    it('should add a new value to the head when addToHead() is called', () => {
        const expectedValue = 'second item';

        linkedList.addToHead('first item');
        linkedList.addToHead(expectedValue);

        expect(linkedList.getHead()).toBe(expectedValue);
    });


    it('should remove the value at the head when removeHead() is called', () => {
        const expectedValue = 'head';

        linkedList.addToHead(expectedValue);
        linkedList.addToHead('other');
        linkedList.removeHead();

        expect(linkedList.getHead()).toBe(expectedValue);
    });


    it('should add a new value to the tail when addToTail() is called', () => {
        const expectedValue = 'second item';

        linkedList.addToTail('first item');
        linkedList.addToTail(expectedValue);

        expect(linkedList.getTail()).toBe(expectedValue);
    });


    it('should remove the value at the tail when removeTail() is called', () => {
        const expectedValue = 'tail';

        linkedList.addToHead('other');
        linkedList.addToHead(expectedValue);
        linkedList.removeTail();

        expect(linkedList.getTail()).toBe(expectedValue);
    });


    it('should clear all items from when clear() is called', () => {
        linkedList.addToHead('A');
        linkedList.addToHead('B');
        linkedList.addToHead('C');
        linkedList.addToHead('D');
        linkedList.addToHead('E');
        
        linkedList.clear();

        expect(linkedList.getHead()).toBe(null);
        expect(linkedList.getTail()).toBe(null);
        expect(linkedList.getSize()).toBe(0);
    });


    it('should insert the given value at the given index when insertAtIndex() is called', () => {
        const expectedValue = 'C';
        const index = 2;

        linkedList.addToHead('A');
        linkedList.addToHead('B');
        linkedList.addToHead('D');
        linkedList.addToHead('E');
        linkedList.insertAtIndex(index, expectedValue)

        expect(linkedList.getByIndex(index)).toBe(expectedValue);
    });


    it('should remove the value at the given index when removeAtIndex() is called', () => {
        const expectedValue = 'C';
        const expectedSize = 4;
        const index = 2;

        linkedList.addToHead('A');
        linkedList.addToHead('B');
        linkedList.addToHead(expectedValue);
        linkedList.addToHead('D');
        linkedList.addToHead('E');

        expect(linkedList.removeAtIndex(index)).toBe(expectedValue);
        expect(linkedList.getSize()).toBe(expectedSize);
    }); 

});
