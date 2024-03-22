/*
  # Log all odd numbers from 1 to 99, inclusive, to the console,
    with each number on a separate line.

    Problem -----------------
      - Input : Number
      - Output : Number - only odd
      - Details :
        - log each odd number on second line
        - range is inclusive (1 - 99)

    Examples ----------------
    - n/a

    Data Structure ----------
    - n/a

    Algorithm ---------------
    - iterate over the numbers from 1 to 99 inclusive
      - increment the iterator by 2

*/

for (let idx = 1; idx <= 99; idx += 2) {
  console.log(idx);
}