export function defaultSumFunc(cells: any[]): any {
    const cellsWithValues = cells.filter(cell => !!cell);

    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }

    return cellsWithValues.reduce((res, cell) => res + cell);
}

export function noopSumFunc(cells: any[]): void | null {
    return null;
}