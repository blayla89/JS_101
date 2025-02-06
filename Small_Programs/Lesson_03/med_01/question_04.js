/* =========================================================

Question 4: Alyssa was asked to write an implementation of
a rolling buffer. You can add and remove elements from a
rolling buffer. However, once the buffer becomes full, any
new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements
to the buffer. In presenting the code to her team leader, she
said "Take your pick. Do you prefer push() or concat() for
modifying the buffer?".

Is there a difference between these implementations, other
than the method she used to add an element to the buffer?
You may assume that newElement will always be a primitive value.


========================================================== */
let arr1 = [1,2,3];
let arr2 = [3,4,5];

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

const mutated = addToRollingBuffer1(arr1, 3, 4);
console.log(arr1 === mutated);
console.log({arr1}, {mutated});


function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); // re-assigns buffter to a copy of the concatenated array
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

const copy = addToRollingBuffer2(arr1, 3, 4);
console.log(arr2 === mutated);
console.log({arr1}, {copy});

/* --------------------------------------------------------
  Yes, there is a difference between these implementations.
  The former will mutate the original array while the latter
  preserves the integrity of the original. When function
  arguments passed are object types, they are passed as
  referecences that point to the original value in memory.
  This means that unless we intentionally break the memory
  connection, the original value is vulnerable to mutation.
  The first implementation does not attempt to make a copy
  of the orignal array thus maintaining the connection to
  the original array. The push method is then applied directly,
  which is a mutating operation. Therefore the original array
  is mutated as well. The latter, distinctly re-assigns buffer
  to a copy of the array (concat returns a copy) breaking the
  memory connection. While subsequent operations (e.g. shift())
  are mutating, it is mutating the copy rather than the original.
  Thus, the latter maintains the integrity of the orginal array,
  returning a mutated copy instead.

-------------------------------------------------------- */