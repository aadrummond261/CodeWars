This lesson we learn the last three methods: isArray() indexOf() and toString(). Each of these three methods have their own purpose and put them together just because this is the last lesson of arrayObject ;-)

For more information, please refer to:

Array.prototype.isArray()
Array.prototype.indexOf()
Array.prototype.toString()
Here are some examples to help us understand the use of isArray() indexOf and toString():

isarray() is a static method, its main-body can only be Array. it returns a Boolean value, which means that the parameter is an array or not. See example:

var a=[1], b=1, c="1", d={1:1}, e=true;
console.log(Array.isArray(a)); //true    a is an array
console.log(Array.isArray(b)); //false   b is not an array
console.log(Array.isArray(c)); //false   c is not an array
console.log(Array.isArray(d)); //false   d is not an array
console.log(Array.isArray(e)); //false   e is not an array
It is often used to check the validity of the parameters. There are many other ways to determine the parameter type, and we will learn from the next lesson.

We have seen indexOf() used for stringObject. The array object can also be used. its Usage is basically the same as the string object.

It's usually used to determine whether an array contains an element or not. Its return value is the index of element. If there is no such element in the array, return -1. See example:

var arr=[1,2,3,4,5];
console.log(arr.indexOf(1));             //output: 0  arr[0]=1
console.log(arr.indexOf(5));             //output: 4  arr[4]=5
console.log(arr.indexOf(6));             //output: -1 no 6 in the array
More examples please refer to #17: Methods of String object--indexOf(), lastIndexOf() and search()

All objects in JS have toString() methods. Its function is to return a string representation of an object. Converting an object into a string, toString() is not the easiest way to do it. A lot of ways to do this:

var arr=[1,2,3,4,5];
console.log(arr.toString()); //1,2,3,4,5
console.log(arr+"");         //1,2,3,4,5
console.log(arr.join());     //1,2,3,4,5
Sometimes the performance of toString()' is not satisfactory, JSON.stringify() provides us with a more powerful feature:

var arr1=["1","2","3","4","5"];
console.log(arr1.toString());       //1,2,3,4,5
console.log(JSON.stringify(arr1));  //["1","2","3","4","5"]

var arr2=[[1,2],[3,4],[5]];
console.log(arr2.toString());       //1,2,3,4,5
console.log(JSON.stringify(arr2));  //[[1,2],[3,4],[5]]
Ok, lesson is over. let's us do some task.

Task

Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Examples

blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 
Using string template and ternary operator can make your work easier.

Series

( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

#1: create your first JS function helloWorld
#2: Basic data types--Number
#3: Basic data types--String
#4: Basic data types--Array
#5: Basic data types--Object
#6: Basic data types--Boolean and conditional statements if..else
#7: if..else and ternary operator
#8: Conditional statement--switch
#9: loop statement --while and do..while
#10: loop statement --for
#11: loop statement --break,continue
#12: loop statement --for..in and for..of
#13: Number object and its properties
#14: Methods of Number object--toString() and toLocaleString()
#15: Methods of Number object--toFixed(), toExponential() and toPrecision()
#16: Methods of String object--slice(), substring() and substr()
#17: Methods of String object--indexOf(), lastIndexOf() and search()
#18: Methods of String object--concat() split() and its good friend join()
#19: Methods of String object--toUpperCase() toLowerCase() and replace()
#20: Methods of String object--charAt() charCodeAt() and fromCharCode()
#21: Methods of String object--trim() and the string template
#22: Unlock new skills--Arrow function,spread operator and deconstruction
#23: methods of arrayObject---push(), pop(), shift() and unshift()
#24: methods of arrayObject---splice() and slice()
#25: methods of arrayObject---reverse() and sort()
#26: methods of arrayObject---map()
#27: methods of arrayObject---filter()
#28: methods of arrayObject---every() and some()
#29: methods of arrayObject---concat() and join()
#30: methods of arrayObject---reduce() and reduceRight()
#31: methods of arrayObject---isArray() indexOf() and toString()
#32: methods of Math---round() ceil() and floor()
#33: methods of Math---max() min() and abs()
#34: methods of Math---pow() sqrt() and cbrt()
#35: methods of Math---log() and its family
#36: methods of Math---kata author's lover:random()
#37: Unlock new weapon---RegExp Object
#38: Regular Expression--"^","$", "." and test()
#39: Regular Expression--"?", "*", "+" and "{}"
#40: Regular Expression--"|", "[]" and "()"
#41: Regular Expression--""
#42: Regular Expression--(?:), (?=) and (?!)