# Binary Search

Binary search is an efficient searching algorithm that can only be used on sorted data. It can take advantage of the fact that the data is sorted to reduce the time complexity from O(n) of linear search to the log_2 of n. It does this by halving the search area on each iteration.

A logarithm is the inverse of an exponential. A base 2 logarithm of `n` is asking "how many powers of 2 are in `n`".

## Time complexity

- Typical: O(log n)
- Best case: O(1)
- Worst case: O(log n)

## Pseudocode

1. Compare the value in the middle of the array with what you're looking for.
2. If the value matches what you're looking for, you are done. If not, halve the search area and repeat.
