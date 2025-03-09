import { DoubleLinkedList } from './linkedlist/DoubleLinkedList';
import SingleLinkedList from './linkedlist/SingleLinkedList';
import Queue from './queue/Queue';
console.log('¡Proyecto TypeScript inicializado correctamente!'); 


const linkedList = new SingleLinkedList<number>();
/*
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

linkedList.add(4);
linkedList.add(18);

linkedList.print();

console.log('--------------------------------TAMAÑO....');
console.log(linkedList.getSize());

console.log('--------------------------------REMOVIENDO....');
linkedList.remove(2);

linkedList.print();

linkedList.clear();

console.log('--------------------------------LIMPIANDO....');
linkedList.print();

*/
const doubleLinkedList = new DoubleLinkedList<number>();

doubleLinkedList.add(1);
doubleLinkedList.add(2);
doubleLinkedList.add(3);


doubleLinkedList.print();

console.log('--------------------------------REMOVIENDO....');
doubleLinkedList.remove(1);

doubleLinkedList.print();

console.log('--------------------------------TAMAÑO....');
console.log(doubleLinkedList.getSize());

console.log('--------------------------------LIMPIANDO....');
doubleLinkedList.clear();
doubleLinkedList.print();