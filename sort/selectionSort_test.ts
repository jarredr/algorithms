import { assertEquals } from "@std/assert/equals";
import {
  arr1Ascending,
  arr1Descending,
  arr2Ascending,
  arr2Descending,
  getArr1,
  getArr2,
  greaterThan,
  lessThan,
} from "../utils.ts";
import {
  selectionSortImmutable,
  selectionSortInPlace,
} from "./selectionSort.ts";

Deno.test(function selectionSortImmutableTests() {
  assertEquals(selectionSortImmutable(getArr1(), lessThan), arr1Ascending);
  assertEquals(selectionSortImmutable(getArr1(), greaterThan), arr1Descending);
  assertEquals(selectionSortImmutable(getArr2(), lessThan), arr2Ascending);
  assertEquals(selectionSortImmutable(getArr2(), greaterThan), arr2Descending);
});

Deno.test(function selectionSortInPlaceTests() {
  assertEquals(selectionSortInPlace(getArr1(), lessThan), arr1Ascending);
  assertEquals(selectionSortInPlace(getArr1(), greaterThan), arr1Descending);
  assertEquals(selectionSortInPlace(getArr2(), lessThan), arr2Ascending);
  assertEquals(selectionSortInPlace(getArr2(), greaterThan), arr2Descending);
});
