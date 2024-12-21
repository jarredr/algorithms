export function lessThan(a: number, b: number) {
  if (a < b) return -1;
  if (a === b) return 0;
  return 1;
}

export function greaterThan(a: number, b: number) {
  if (a > b) return -1;
  if (a === b) return 0;
  return 1;
}

// A new array is created each time this is called for testing in-place algorithms
export function getArr1() {
  return [2, 5, 1, 7, 3, 8];
}
export const arr1Ascending = [1, 2, 3, 5, 7, 8];
export const arr1Descending = [8, 7, 5, 3, 2, 1];

export function getArr2() {
  return [7, 6, 5, 4, 3, 2, 1];
}
export const arr2Ascending = [1, 2, 3, 4, 5, 6, 7];
export const arr2Descending = [7, 6, 5, 4, 3, 2, 1];
