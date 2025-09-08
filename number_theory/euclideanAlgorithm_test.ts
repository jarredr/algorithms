import { assertEquals } from "@std/assert";
import { gcd, recursive_gcd } from "./euclideanAlgorithm.ts";

Deno.test(function whileGCDTests() {
  assertEquals(gcd(1024, 1024), 1024);
  assertEquals(gcd(40, 20), 20);
  assertEquals(gcd(20, 40), 20);
  assertEquals(gcd(10, 1), 1);
  assertEquals(gcd(1071, 462), 21);
});

Deno.test(function recursiveGCDTests() {
  assertEquals(recursive_gcd(1024, 1024), 1024);
  assertEquals(recursive_gcd(40, 20), 20);
  assertEquals(recursive_gcd(20, 40), 20);
  assertEquals(recursive_gcd(10, 1), 1);
  assertEquals(recursive_gcd(1071, 462), 21);
});
