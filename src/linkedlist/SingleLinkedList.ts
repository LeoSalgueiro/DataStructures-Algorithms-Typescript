class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList<T>{
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
        } else {
                this.tail!.next = node;
                this.tail = node;
        }
        this.size++;
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

    getSize() : number {
        return this.size;
    }

    isEmpty() : boolean {
        return this.size === 0;
    }
    
    clear() : void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    print() : void {
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}

export default SingleLinkedList;    
