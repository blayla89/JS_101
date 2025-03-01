/* =========================================================

  Question 3: What will the following code output?

    let str1 = "hello there";
    let str2 = str1;
    str2 = "goodbye!";
    console.log(str1);

  Try to answer without running the code.

========================================================== */

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Solutions =============================================

// Personal : --------------------------------------------

// outputs : hello there

/*
    line 1: creates a variable called `str1` with a string value 'hello there'
    line 2: creates a variable called `str2` with a copy of the value of `str1` ('hello there')
    line 3: re-assigns `str2` to a new string 'goodbye!'
    line 4: logs 'hello there'

    Strings are a primtive type. Primtive types are immutable. Every operation on a primtive results in a new value (copy).
   */


// Book: ------------------------------------------------

// hello there

/*

The output is hello there since we are dealing with strings. In JavaScript,
strings are primitive values and are immutable; they can't be changed.
That also means that JavaScript creates a new copy of the string when
assigning a string to a variable. Thus, line 2 assigns str2 a new string
that happens to be a copy of str1's value. Line 3, in turn, assigns str2
to an entirely new string.

*/