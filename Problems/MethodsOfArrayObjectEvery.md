This lesson we learn two methods of array: every() and some(). The every() method tests whether all elements in the array pass the test implemented by the provided function. The some() method tests whether some element in the array passes the test implemented by the provided function.

For more information, please refer to:

Array.prototype.every()
Array.prototype.some()
Here are some examples to help us understand the use of every() and some():

every() always return a boolean value. It executes the callback function to each element in turn, if one of the returns is false, then every() returns false; if all returns true, then every() returns true.