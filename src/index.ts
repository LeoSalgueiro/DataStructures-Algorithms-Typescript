import { HashTable } from './basic-data-structures/hash-tables/hashtable';
import { DoubleLinkedList } from './basic-data-structures/linkedlist/DoubleLinkedList';
import SingleLinkedList from './basic-data-structures/linkedlist/SingleLinkedList';
import Queue from './basic-data-structures/queue/Queue';

import  {bubbleSort}  from './sorting-algorithms/bubble-sort';
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

/*
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
*/
// Test
//console.log(twoSum([2, 7, 11, 15], 13));  // Output: [0, 1]


// Testeamos la HashTable
/*
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 100);
hashTable.set("banana", 200);
hashTable.set("cherry", 300);

console.log(hashTable.get("banana")); // 200
console.log(hashTable.has("cherry")); // true
console.log(hashTable.delete("apple")); // true
console.log(hashTable.get("apple")); // undefined

hashTable.print();
*/

//Complejidad O(n)
function potencia_iter(x:number,  n: number) : number {
    let potencia: number;
    if (n == 0)
        potencia = 1;
    else {
        if (n == 1)
            potencia = x;
        else {
            potencia = x;
            for (let i = 2; i <= n; i++) {
                potencia *= x;
            }
        }
    }
    return potencia;
}

//Complejidad O(log n)
function potencia_rec(x:number,  n: number) : number {
    
    if (n == 0)
        return 1;
    else {
        if (n == 1)
            return x;
        else {
            if (n % 2 == 0)
                return ((x**(n/2)))*((x**(n/2)))
            else
                return x*(x**((n-1)/2))*(x**((n-1)/2))
        }
    }
}

function potencia_rec_optimizada(x: number, n: number): number {
    if (n == 0) return 1;
    if (n == 1) return x;
    
    const mitad = potencia_rec_optimizada(x, Math.floor(n/2));
    
    if (n % 2 == 0) {
        return mitad * mitad;
    } else {
        return x * mitad * mitad;
    }
}

function medirTiempo<T>(fn: () => T): { resultado: T, tiempo: number } {
    const inicio = performance.now();
    const resultado = fn();
    const fin = performance.now();
    return {
        resultado,
        tiempo: Number((fin - inicio).toFixed(4))
    };    
}

// Uso 
const { resultado, tiempo } = medirTiempo(() => potencia_iter(2, 3));
console.log(`Resultado: ${resultado}`);
console.log(`Tiempo de ejecución: ${tiempo} milisegundos`);
 
const { resultado: resultado2, tiempo: tiempo2 } = medirTiempo(() => potencia_rec(2, 3));
console.log(`Resultado: ${resultado2}`);
console.log(`Tiempo de ejecución: ${tiempo2} milisegundos`);

const { resultado: resultado3, tiempo: tiempo3 } = medirTiempo(() => potencia_rec_optimizada(2, 3));
console.log(`Resultado: ${resultado3}`);
console.log(`Tiempo de ejecución: ${tiempo3} milisegundos`);

// Código para comparar tiempos
function compararTiempos(x: number, n: number) {
    console.log(`Comparando potencias con base ${x} y exponente ${n}:`);
    console.log('----------------------------------------');

    const { resultado: r1, tiempo: t1 } = medirTiempo(() => potencia_iter(x, n));
    console.log(`Iterativa:      Resultado = ${r1}, Tiempo = ${t1} ms`);

    const { resultado: r2, tiempo: t2 } = medirTiempo(() => potencia_rec(x, n));
    console.log(`Recursiva:      Resultado = ${r2}, Tiempo = ${t2} ms`);

    const { resultado: r3, tiempo: t3 } = medirTiempo(() => potencia_rec_optimizada(x, n));
    console.log(`Rec Optimizada: Resultado = ${r3}, Tiempo = ${t3} ms`);
}

// Probemos con diferentes valores
compararTiempos(2, 10);
console.log();
compararTiempos(2, 100);
console.log();
compararTiempos(2, 1000);



// Bubble Sort
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));