


export const bubbleSort = (arr: number[]) => {

    const tiempoInicio = performance.now();
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
    }

    const tiempoFin = performance.now();
    const tiempoTranscurrido = tiempoFin - tiempoInicio;

    return { arr, tiempoTranscurrido };
}


