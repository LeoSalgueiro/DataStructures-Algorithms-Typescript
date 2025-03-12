
    // For integer keys, the hashing function returns the integer modulo the size of the hash table.
function hashFunction(key: number, tableSize: number): number {
    return key % tableSize;
  }
  
  // Hashing functions for float keys can convert them to integers.
  function hashFloatKey(key: number, tableSize: number): number {
    return Math.floor(key * 1000) % tableSize; // example
  }
  
  // Strings can be hashed by converting each character to its character code.
  function hashStringKey(key: string, tableSize: number): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % tableSize;
  }


export class HashTable<K, V> {
    private buckets: Map<K, V>[];
    private capacity: number;
    private size: number;

    constructor(capacity: number = 16) {
        this.capacity = capacity;
        this.size = 0;
        this.buckets = new Array(capacity).fill(null).map(() => new Map<K, V>());
    }

    // Función hash: convierte la clave en un índice válido
    private hash(key: K): number {
        const strKey = JSON.stringify(key);  // Convierte la clave en string
        let hash = 0;
        for (let i = 0; i < strKey.length; i++) {
            hash = (hash * 31 + strKey.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }

    // Inserta o actualiza un valor
    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket.has(key)) {
            this.size++;
        }
        bucket.set(key, value);
    }

    // Obtiene un valor dado su clave
    get(key: K): V | undefined {
        const index = this.hash(key);
        return this.buckets[index].get(key);
    }

    // Elimina una clave y su valor
    delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket.has(key)) {
            bucket.delete(key);
            this.size--;
            return true;
        }
        return false;
    }

    // Verifica si una clave existe
    has(key: K): boolean {
        const index = this.hash(key);
        return this.buckets[index].has(key);
    }

    // Obtiene el número de elementos
    getSize(): number {
        return this.size;
    }

    // Muestra el contenido de la tabla
    print(): void {
        console.log(this.buckets);
    }
}


