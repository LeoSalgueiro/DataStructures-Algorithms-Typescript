import Queue from './queue/Queue';
console.log('¡Proyecto TypeScript inicializado correctamente!'); 


const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

queue.clear();
queue.print();
