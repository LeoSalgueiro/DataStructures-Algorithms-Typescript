import { Node } from './Node';



export class DoubleLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private prev: Node<T> | null;
    private size: number;
 
    constructor() {
        this.head = null;
        this.tail = null;
        this.prev = null;
        this.size = 0;
    }

    add(value: T) : void {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            
        }
        else {
            this.tail!.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    remove(value: T) : void {
        if (this.head?.value === value) {
            this.head = this.head.next;
            this.head!.prev = null;
            this.size--;
            if (!this.head) {
                this.tail = null;
                this.prev = null;
            }
            return;
        }
        
        let current = this.head;
        while (current?.next) {

            if (current.next.value === value) {
                current.next = current.next.next;
                current.next!.prev = current;

                this.size--;
                if (!current.next) {
                    this.tail = current;
                    this.tail!.next = null;
                }
                return;
            }
            current = current.next;
        }
    }
    
    contains(value: T) : boolean {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    getSize() : number {
        return this.size;
    }

    isEmpty() : boolean {
        return this.size === 0;
    }

    clear() : void {
        this.head = null;
        this.tail = null;
        this.prev = null;
        this.size = 0;
    }

    print() : void {
        let current = this.head;
        while (current) {
            console.log('prev: ',current?.prev?.value); 
            console.log('current: ',current.value);
            console.log('next: ',current?.next?.value); 
            current = current.next;
            console.log('--------------------------------');
        }
    }
}
