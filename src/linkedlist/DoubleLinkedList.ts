import { Node } from './Node';

class DoubleLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;
 
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value: T) : void {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
    }

    remove(value: T) : void {
        if (this.head?.value === value) {
            this.head = this.head.next;
            this.size--;
            if (!this.head) {
                this.tail = null;
            }
            return;
        }
        
        let current = this.head;
        while (current?.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
                if (!current.next) {
                    this.tail = current;
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
    
}
