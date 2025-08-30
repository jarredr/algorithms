export function binarySearch(data: string[], search: string): boolean {
  let lowIndex = 0;
  let highIndex = data.length;
  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = data[midIndex];
    if (guess === search) {
      return true;
    }
    if (guess < search) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return false;
}
