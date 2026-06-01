In this lesson we learn about log() and its family: methods log10() , log2(), log1p(), constants LN2, LN10, LOG2E, LOG10E. They are the different calculation methods of natural logarithm.

Their definitions and detailed information:

methods:

Math.log()
Math.log10()
Math.log2()
Math.log1p()
constants:

Math.LN2
Math.LN10
Math.LOG2E
Math.LN10E
Here we use some examples to understand their usage(because my MATH is poor, so there is not too many examples):

We can use the log() to calculate the power:

var base=2,n1=4,n2=1024,n3=1048576
//Math.pow(base,??)=n1  we need calculate for ??
console.log( Math.log(n1)/Math.log(base) )  //output:2
console.log( Math.log(n1)/Math.LN2 )   //output:2  LN2 equals log(2)

//Math.pow(base,??)=n2  we need calculate for ??
console.log( Math.log(n2)/Math.log(base) )  //output:10
//Math.pow(base,??)=n3  we need calculate for ??
console.log( Math.log(n3)/Math.log(base) )  //output:20

//Verify the result of calculation:
console.log(Math.pow(base,2))  //output:4
console.log(Math.pow(base,10))  //output:1024
console.log(Math.pow(base,20))  //output:1048576
Here's an example of the bank rate. It uses the log1p():

//John saved $1000 in the bank, the annual interest rate is 10%, 
//the question: how many years John's deposits more than 1200, 1500, 1800?
var year1=Math.log1p(0.2)/Math.log1p(0.1)  //or: Math.log(1.2)/Math.log(1.1)
console.log(year1)  //output: 1.9129284738342431

var year2=Math.log1p(0.5)/Math.log1p(0.1)
console.log(year2)  //output: 4.25416370990589

var year3=Math.log1p(0.8)/Math.log1p(0.1)
console.log(year3)  //output: 6.167092183740134

//In fact, we need a integer number of years, so we need to use ceil()
console.log(Math.ceil(year1),Math.ceil(year2),Math.ceil(year3))
//output: 2 5 7

//the answer is need 2 years, 5 years and 7 years.
//Let's see if the answer is correct:
//money  year1  year2  year3  year4   year5    year6    year7
//1000   1100   1210   1321   1453.1  1598.41  1758.25  1934.08

//I am very curious, how many years John's money will be turned into 10000 dollars?
//Let's calculate:
var year4=Math.log1p(9)/Math.log1p(0.1)
console.log(Math.ceil(year4))  //output: 25

//OK, after 25 years, John will have 10000 dollars ;-)
In fact, log1p(x) equals to log(1+x). log() is very useful when we need to calculate the increment or decrement.

Ok, lesson is over. let's us do some task.

Task

Coding in function thinkingAndTesting.

This time I won't explain to you how to do it. You need to look at the test cases. Thinking and testing. solve this kata by yourself ;-)

The only hint is: it is related to power.

If you are interested in this form of kata, I recommend to you my Thinking and Testing Series

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