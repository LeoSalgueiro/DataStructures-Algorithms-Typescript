
/**
 * Stack class
 * @template T
 */
//A stack is a linear data structure that stores items in a last-in, first-out (LIFO) or first-in, last-out (FILO) manner.
class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T) : void {
        this.items.push(item);
    }

    pop() : T | undefined {
        return this.items.pop();
    }

    peek() : T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty() : boolean {
        return this.items.length === 0;
    }

    size() : number {
        return this.items.length;
    }

    clear() : void {
        this.items = [];
    }

    print() : void {
        console.log(this.items);
    }
}

export default Stack;
