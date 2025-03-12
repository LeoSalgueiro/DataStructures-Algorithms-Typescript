import { HashTable } from './basic-data-structures/hash-tables/hashtable';
import { DoubleLinkedList } from './basic-data-structures/linkedlist/DoubleLinkedList';
import SingleLinkedList from './basic-data-structures/linkedlist/SingleLinkedList';
import Queue from './basic-data-structures/queue/Queue';
console.log('¡Proyecto TypeScript inicializado correctamente!'); 



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


function twoSum(nums: number[], target: number): number[] {
    const hashMap: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashMap[target - num] !== undefined) {
            return [hashMap[target - num], i];
        }
        hashMap[num] = i;
    }
    return [];
}

// Test
//console.log(twoSum([2, 7, 11, 15], 13));  // Output: [0, 1]


// Testeamos la HashTable
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 100);
hashTable.set("banana", 200);
hashTable.set("cherry", 300);

console.log(hashTable.get("banana")); // 200
console.log(hashTable.has("cherry")); // true
console.log(hashTable.delete("apple")); // true
console.log(hashTable.get("apple")); // undefined

hashTable.print();