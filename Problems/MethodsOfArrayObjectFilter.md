This lesson we learn a very useful method of array: filter(). The filter() method creates a new array with all elements that pass the test implemented by the provided function. For more information, please refer to: Array.prototype.filter()

Here are some examples to help us understand the use of filter():

filter() always accept a function as parameter, the function always return boolean value true or false. filter() returns a new array that contains only the elements that meet the conditions(The elements as a parameters of the function, return true value).

var a=[1,2,3,4,5];
var b=a.filter(function(x){return x<3});
console.log(b);   //output: [ 1, 2 ]
The above example can be simplified:

var a=[1,2,3,4,5];
var b=a.filter(x=>x<3);
console.log(b);   //output: [ 1, 2 ]
If the function return value is not a Boolean value, it will be automatically converted:

var a=[1,2,3,4,5];
var b=a.filter(x=>x%2);
console.log(b);   //output: [ 1, 3, 5 ]
The above example x%2 returns a value of 1 or 0, which will automatically be converted to true(1) or false(0).

In many cases, the parameters of the filter() are conditional expressions that are connected by the logical operator(&&,||).

var a=[3,6,9,12,24,36]
var b=a.filter(x=>x%2==0&&x%3==0&&x%4==0)
console.log(b)   //output: [ 12, 24, 36 ]
The example above filter is the number which can be divisible by 2,3,4.

If the function does not return a conditional statement directly, it is made up of a number of statements, then the curly braces must be added.

var a=["","a","ab","aba","abab","ababa"]
var b=a.filter(x=>{
  if (x.length<2) return true;
  var y=x.split("").reverse().join("");
  return x==y;
})
console.log(b)   //output: [ '', 'a', 'aba', 'ababa' ]
The example above retained elements which is the palindrome string.

Filter is often used to count the number of elements in an array:

function count(arr,n){
  return arr.filter(x=>x==n).length;
}
var a=[1,1,1,2,2,3,4,4];
console.log(count(a,1))   //output: 3
console.log(count(a,2))   //output: 2
The last to say is that filter() will be very slow when dealing with large data, if you need to optimize the performance of the code, please consider other methods.

Ok, lesson is over. let's us do some task.

Task

Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example

countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}
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