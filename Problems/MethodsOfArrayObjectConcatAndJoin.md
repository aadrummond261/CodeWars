This lesson we learn two methods of array: concat() and join(). We have seen concat() in the stringObject method, but the method of the arrayObject is different from the stringObject method, so we need to learn again. When studying the stringObject method split(), we have simply learned the join() method. This time we will review and explain it in detail.

Their definitions and syntax please refer to:

Array.prototype.concat()
Array.prototype.join()
(Please forgive me for my laziness;-)

Here are some examples to help us understand the use of concat() and join():

We first learn the concat() method, which can add some elements to the end of the array. concat() can have more and more parameters, and the parameter can be values, array or otherthings. Look this example:

var arr1=[1,2,3],arr2=[4,5,6];
//The following ways can achieve the same purpose:
//It can use an array as parameter
console.log(arr1.concat(arr2));
//also can use some values as parameters
console.log(arr1.concat(4,5,6));
//also can use more than one array as parameters
console.log(arr1.concat([4],[5],[6]));
//use ... accept the value of an enumeration
console.log(arr1.concat(...arr2));
//It can be used continuously
console.log(arr1.concat(4).concat(5).concat(6)); 
//output:
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
concat() can be used for the flat output of two-dimensional or multidimensional arrays. look this example:

var arr=[[1,2],[3,4],[5,6]];
var result=[];
for (var i=0;i<arr.length;i++) 
  result=result.concat(arr[i]);
console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]
This example by traversing the array and concat() method to get a one-dimensional array, which contains all the elements of the two-dimensional array. Or use more simple code:

var arr=[[1,2],[3,4],[5,6]];
var result=[].concat(...arr);
console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]
...arr takes all the elements of arr (some one-dimensional array) as parameters of concat().

Here we look at some examples of join(). Its main purpose is to merge the elements of an array into a string, using a parameter separator to connect each element. If the separator is omitted, the default separator is ",":

var arr=[1,2,3,4,5];
console.log(arr.join());      //output: 1,2,3,4,5
console.log(arr.join(","));   //output: 1,2,3,4,5
console.log(arr.join(" "));   //output: 1 2 3 4 5
console.log(arr.join("and")); //output: 1and2and3and4and5
One of its classic applications is to produce a specified number of repeating characters:

function repeat(s,n){
  return [...Array(n+1)].join(s);
}
console.log(repeat("a",5)); //output: aaaaa
console.log(repeat("abc",5)); //output: abcabcabcabcabc
It is also a good choice to connect multiple strings. When there is a large number of strings that need to be connected to a string, the use of the + operator speed is slow, the correct method should be to put them into the array, and then use the join() method:

//use + operator:
var result="";
for (var i=0;i<26;i++) 
  result+=String.fromCharCode(97+i);
console.log(result)   //output: abcdefghijklmnopqrstuvwxyz
//use join() method:
var cache=[];
for (var i=0;i<26;i++) cache[i]=String.fromCharCode(97+i);
var result=cache.join("");
console.log(result)   //output: abcdefghijklmnopqrstuvwxyz
Of course, when the amount of data is very small, we do not feel the difference in speed.

Ok, lesson is over. let's us do some task.

Task

Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
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