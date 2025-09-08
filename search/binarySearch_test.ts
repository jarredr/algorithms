import { assertEquals } from "@std/assert";
import { binarySearch } from "./binarySearch.ts";

const data1 = ["a", "b", "c", "d", "e"];
const data2 = ["hello", "world"];
Deno.test(function basicTests() {
  assertEquals(binarySearch(data1, "d"), true);
  assertEquals(binarySearch(data1, "a"), true);
  assertEquals(binarySearch(data1, "c"), true);
  assertEquals(binarySearch(data1, "e"), true);
  assertEquals(binarySearch(data1, "A"), false);
  assertEquals(binarySearch(data1, "aa"), false);
  assertEquals(binarySearch(data1, "hello"), false);
});

Deno.test(function moreTests() {
  assertEquals(binarySearch(data2, "hello"), true);
  assertEquals(binarySearch(data2, "helo"), false);
  assertEquals(binarySearch(data2, "world!"), false);
});
