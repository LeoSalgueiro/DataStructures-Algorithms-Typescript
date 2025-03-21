
class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T) : void {
        this.items.push(item);
    }

    dequeue() : T | undefined {
        return this.items.shift();
    }

    peek() : T | undefined {
        return this.items[0];
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

export default Queue;
