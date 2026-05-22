This lesson we learn two sorting methods: reverse() and sort().

reverse() has only one purpose: reverse the order of the elements. Usage is arrayObject.reverse() and don't need parameters. Example:

var arr1=[1,2,3,4,5]
arr1.reverse()
console.log(arr1)   //output: [ 5, 4, 3, 2, 1 ]
var arr2=['a','b','c']
arr2.reverse()
console.log(arr2)   //output: [ 'c', 'b', 'a' ]
Here we start to learn about the second methods of sorting: sort(). Its usage:

arrayObject.sort([compareFunction])
The parameter compareFunction is optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element. Example:

var arr=['c','a','b'];
arr.sort();
console.log(arr)   //output: [ 'a', 'b', 'c' ]
This is an example of an array of strings, if arr is a number array and the parameter is omitted, sort() will first convert the number into a string, and then sort the array. Example:

var arr=[1,2,3,11,21,31];
arr.sort();
console.log(arr)
//output:
[ 1, 11, 2, 21, 3, 31 ]
This result may not be what we want. If you want to sort the numbers according to the size of their values, you must use a parameter, the parameter is a function. A classic example:

var arr=[1,2,3,11,21,31];
arr.sort((a,b)=>a-b);   //ascending sort
console.log(arr)
//output: [ 1, 2, 3, 11, 21, 31 ]
arr.sort((a,b)=>b-a);   //descending sort
console.log(arr)
//output: [ 31, 21, 11, 3, 2, 1 ]
Usually this is the result we want. (a,b)=>a-b is arrow function. The formal format is: function(a,b){return a-b}. If you forget how to use the arrow function, please refer to:#22: Unlock new skills--Arrow function,spread operator and deconstruction

The principle of sorting is: (Text is too long, if you are not interested in reading please skip)

If compareFunction(a, b) is less than 0, 
sort a to the lower index than b, i.e. a comes first.
If compareFunction(a, b) returns 0,
leave a and b unchanged with respect to each other, 
but sorted with respect to all different elements.
If compareFunction(a, b) is greater than 0, 
sort b to the lower index than a.
compareFunction(a, b) must always return the same value
when given a specific pair of elements a and b as its two arguments. 
If inconsistent results are returned then the sort order is undefined.
If we need to sort by two or more conditions, we need to spend more energy to write a proper comparison function. The following example has two sorting conditions, first according to the classification of odd and even order, and then follow the numbers in ascending order.

var arr=[1,2,3,4,5,6,100,999]
arr.sort((a,b)=>{
  if (a%2==b%2) return a-b;
  if (a%2>b%2) return -1;
  return 1;
})
console.log(arr)

//output: [ 1, 3, 5, 999, 2, 4, 6, 100 ]
Need to pay attention to: reverse() and sort() will modify the original array.

Ok, lesson is over. let's us do some task.

Task

Coding in function sortIt. function accept 1 parameters arr, it's a number array. Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order) for example:

sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
conditions2: If the same number of elements, according to the number values(in descending order) for example:

sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
Comprehensive two conditions should be like this:

sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
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
