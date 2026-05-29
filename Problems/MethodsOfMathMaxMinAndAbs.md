In this lesson we learn three methods of Math: max(), min() and abs().

Their definitions and detailed information:

Math.max()
Math.min()
Math.abs()
Their usage is very simple: for the given parameters, return the maximum value, minimum value and absolute value. Here we use some examples to understand their usage:

var a=1,b=2,c=-1
console.log(Math.max(a,b));  //output: 2
console.log(Math.min(a,b));  //output: 1
console.log(Math.abs(c));    //output: 1
abs() can has only one parameter, max() and min() can has more than one parameters. See example:

var a=1,b=2,c=-1
console.log(Math.max(a));      //output: 1
console.log(Math.max(a,b,c));  //output: 2
console.log(Math.min(a));      //output: 1
console.log(Math.min(a,b,c));  //output: -1
console.log(Math.abs(a));      //output: 1
console.log(Math.abs(a,b,c));  //output: 1
console.log(Math.abs(b,a,c));  //output: 2
console.log(Math.abs(c,b,a));  //output: 1
We can see: For max() and min(). If it has only one parameter, method returns the parameter itself; If it has many parameters, method will return the maximum / minimum values; For abs(). No matter how many parameters, it returns only the absolute value of the first parameter.

max() and min() can accept an array as a parameter by using spread operator (...). The following example is a classic usage, to calculate the maximum/minimum values of the array:

var arr=[1,2,3,4,5];
console.log(Math.max(...arr));  //output: 5
console.log(Math.min(...arr));  //output: 1
Ok, lesson is over. let's us do some task.

Task

Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.

First, calculate the difference of the same index of the arr1 and arr2. Like this:

[1,3,5]
 | | |   --->  8, 5, 2
[9,8,7]
Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think abs() can help you get the correct result ;-)

Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

  maxvalue , minvalue
[    8     ,    2     ]
Examples

maxMin([1,3,5],[9,8,7])               should return [8,2]
maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]
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