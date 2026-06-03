Maybe you don't often use random() when you're dealing with Kata, but every qualified Kata can not be missing random(). Because random testcase is the most basic anti cheating measure. A variety of testcases also help authors identify potential problems. If you also want to create a new Kata and become an author, please follow me to learn about random().

The definitions and detailed information:

random()
Let's learn the usage of random() through examples:

random() does not require any parameters, and its return value is a decimal between 0 and 1:

for (var i=0;i<5;i++) console.log(Math.random());
//output:
0.9319351236335933
0.5403203193563968
0.006271821213886142
0.6078395291697234
0.4499389610718936
But we usually want to generate some integers, we can do so:

for (var i=0;i<5;i++) console.log(  ~~(100*Math.random()) );
//output:
19
38
69
85
0
A number multiply with random(), and then use the Math.floor(~~ is a simplified form of math.floor) to get an integer. The range is 0 to number-1.

If we do not want to start from 0, but need a specific range, you can write a function do this:

function rndnum(from,to){
  return ~~((to-from)*Math.random()+from);
}
for (var i=0;i<5;i++) console.log(rndnum(20,30));
//output:
20
23
24
24
22
If we want to generate random characters, we can do this:

for (var i=0;i<5;i++) 
  console.log(String.fromCharCode(~~(127*Math.random())));
//output:
<


#
)
We generated a ASCII character. You tell me second and third characters are not generated successfully? No, they're whitespace. If you only want to generate some lowercase letters, you can do this:

for (var i=0;i<5;i++) 
  console.log(String.fromCharCode(~~(26*Math.random()+97)));
//output:
m
p
a
u
r
What should we do if we want to get a character from some of the characters that do not have a regular character? For example, we want to randomly generate a character from aeiou, we can do this:

var chars="aeiou";
for (var i=0;i<5;i++) 
  console.log(chars[~~(chars.length*Math.random())]);
//output:
u
e
i
o
u
If we want to randomly generate some fixed words, we can use arrays to do:

var names=["John","Tom","Jerry","Minne","Alice","othername..."];
for (var i=0;i<5;i++) 
  console.log(names[~~(names.length*Math.random())]);
//output:
Minne
Alice
Jerry
Minne
othername...
Ok, lesson is over. let's us do some task.

Task

Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

the code length should be 8;

The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

The 3rd-6th characters should be four numbers.

the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:

AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
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