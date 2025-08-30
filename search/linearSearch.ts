export function linearSearch(data: string[], search: string): boolean {
  for (const val of data) {
    if (val === search) {
      return true;
    }
  }
  return false;
}
