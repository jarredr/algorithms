import { assertEquals } from "@std/assert";
import { linearSearch } from "./linearSearch.ts";

const data1 = ["a", "b", "c", "d", "e"];
const data2 = ["hello", "world"];
Deno.test(function basicTests() {
  assertEquals(linearSearch(data1, "d"), true);
  assertEquals(linearSearch(data1, "a"), true);
  assertEquals(linearSearch(data1, "c"), true);
  assertEquals(linearSearch(data1, "e"), true);
  assertEquals(linearSearch(data1, "A"), false);
  assertEquals(linearSearch(data1, "aa"), false);
  assertEquals(linearSearch(data1, "hello"), false);
});

Deno.test(function moreTests() {
  assertEquals(linearSearch(data2, "hello"), true);
  assertEquals(linearSearch(data2, "helo"), false);
  assertEquals(linearSearch(data2, "world!"), false);
});
