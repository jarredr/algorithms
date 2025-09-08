// An implementation of gcd using a while loop
export function gcd(a: number, b: number) {
  while (true) {
    const remainder = a % b;
    if (remainder === 0) {
      return b;
    }
    a = b;
    b = remainder;
  }
}

// An implementation of gcd using recursion
export function recursive_gcd(a: number, b: number) {
  if (b === 0) {
    return a;
  }
  return recursive_gcd(b, a % b);
}
