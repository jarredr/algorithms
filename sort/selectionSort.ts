// Selection sort
// Time complexity:
// Best case: O(n^2)
// Worst case: O(n^2)
// Typical case: O(n^2)

export function selectionSortImmutable(
  nums: number[],
  comparator: (a: number, b: number) => number,
) {
  const result: number[] = [];
  const selected = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    let nextIndex = -1;
    for (let j = 0; j < nums.length; j++) {
      if (!selected.has(j)) {
        if (nextIndex === -1) nextIndex = j;
        else {
          if ((comparator(nums[j], nums[nextIndex]) < 0)) {
            nextIndex = j;
          }
        }
      }
    }
    selected.add(nextIndex);
    result.push(nums[nextIndex]);
  }
  return result;
}

export function selectionSortInPlace(
  nums: number[],
  comparator: (a: number, b: number) => number,
) {
  for (let i = 0; i < nums.length; i++) {
    let nextIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (comparator(nums[j], nums[nextIndex]) < 0) {
        nextIndex = j;
      }
    }
    const temp = nums[i];
    nums[i] = nums[nextIndex];
    nums[nextIndex] = temp;
  }
  return nums;
}
