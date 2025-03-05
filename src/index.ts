import SingleLinkedList from './linkedlist/SingleLinkedList';
import Queue from './queue/Queue';
console.log('¡Proyecto TypeScript inicializado correctamente!'); 


const linkedList = new SingleLinkedList<number>();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

linkedList.print();

linkedList.remove(2);

linkedList.print();

linkedList.clear();

linkedList.print();
