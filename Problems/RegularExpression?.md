In this lesson, we learn three special wildcard "?", "*", "+" and curly braces "{}". They are related to the number of matching characters.

First of all, we look at the "{}", and its usage is:{min,[max]}. It means matching a range: at least min characters, up to max characters. Let's see some examples:

var str="aaaabbbb";
console.log( str.match(/a{0,0}b/)+"" );    //output: b      match:aaaa|b|bbb
console.log( str.match(/a{0,1}b/)+"" );    //output: ab     match:aaa|ab|bbb
console.log( str.match(/a{0,2}b/)+"" );    //output: aab    match:aa|aab|bbb
console.log( str.match(/a{0,100}b/)+"" );  //output: aaaab  match:|aaaab|bbb

console.log( str.match(/a{1,1}b/)+"" );    //output: ab     match:aaa|ab|bbb
console.log( str.match(/a{1,2}b/)+"" );    //output: aab    match:aa|aab|bbb
console.log( str.match(/a{2,2}b/)+"" );    //output: aab    match:aa|aab|bbb
console.log( str.match(/a{2,4}b/)+"" );    //output: aaaab  match:|aaaab|bbb
console.log( str.match(/a{100,4}b/)+"" );  
//output: will throw an error, because min must less than or equals to max 
We can see that the regular expression always matches the maximum value in the range. max can be ommited, at this time the regular expression will match the maximum possible number. like this:

var str="aaaabbbb";
console.log( str.match(/a{0,}b/)+"" );    //output: aaaab     match:|aaaab|bbb
console.log( str.match(/a{1,}b/)+"" );    //output: aaaab     match:|aaaab|bbb
console.log( str.match(/a{0,}b{0,}/)+"" ); //output: aaaabbbb match:|aaaabbbb|
If the comma is omitted, the regular expression will match the string that is equal to the number(Equivalent to max and min are equal). like this:

var str="aaaabbbb";
console.log( str.match(/a{1}b{1}/)+"" );  //output: ab       match:aaa|ab|bbb
console.log( str.match(/a{2}b{2}/)+"" );  //output: aabb     match:aa|aabb|bb
console.log( str.match(/a{4}b{4}/)+"" );  //output: aaaabbbb match:|aaaabbbb|
console.log( str.match(/a{5}b{5}/)+"" );  //output: null     no match result
This extended training kata will help you understand the usage of "{}". Coding 3min : Regular expression compression But it may be a little bit difficult ;-)

For "?", "*" and "+", we can understand them as the simplified representation of {}.

"?" equivalent to {0,1}, It matches 0 or 1 characters:

var s="ab";
console.log( /a?b/.test(s) );  //output: true--it matches 1"a" and 1"b"("ab")
console.log( /x?b/.test(s) );  //output: true--it matches 0"x" and 1"b"("b")
console.log( /x?b?/.test(s) ); //output: true--it matches 0"x" and 1"b"("b")
console.log( /x?y?/.test(s) ); //output: true--it matches 0"x" and 0"y"("")
"*" equivalent to {0,}, It matches 0 to infinity characters:

var s="aaaabbbb";
console.log( s.match(/a*b/)+"" );  //output: aaaab
console.log( s.match(/a*b*/)+"" );  //output: aaaabbbb
"+" equivalent to {1,}, It matches 1 to infinity characters:

var s="aaaabbbb";
console.log( s.match(/a+b/)+"" );  //output: aaaab
console.log( s.match(/a+b+/)+"" ); //output: aaaabbbb
console.log( s.match(/ab+/)+"" );  //output: abbbb
console.log( s.match(/x+b+/)+"" ); //output: null  (it matches at least 1 "x")
See the example above, we can conclude that the "personality" of regular expression is "greedy". It always tries to match the longest results. Sometimes we don't get the results we want. Look at the following example:

var s="100001,111,12222221,222,3333,12321,14441";
//Hmm... I wantto write a regular expression match "1xxxx1"
var match1=s.match(/1.*1/g)
var match2=s.match(/1.+1/g)
//the result should be [ '100001', '111', '12222221', '12321', '14441' ]
console.log(match1)  //in fact result is [ '100001,111,12222221,222,3333,12321,14441' ]
console.log(match2)  //in fact result is [ '100001,111,12222221,222,3333,12321,14441' ]
Oh no! This is not what I want. The "greedy" of regular expression is the "original sin". It matches the longest string: the string itself. How to solve this problem? Very simple, another usage of the "?" can make the regular expression become "lazy". See examples:

var s="100001,111,12222221,222,3333,12321,14441";
//Hmm... I wantto write a regular expression match "1xxxx1"
var match=s.match(/1.+?1/g)
//the result should be [ '100001', '111', '12222221', '12321', '14441' ]
console.log(match)  //output: [ '100001', '111', '12222221', '12321', '14441' ]
Wow! We got the desired results. So we should know: "+?" and "*?" can make regular expressions become "lazy". It always matches the shortest string. Of course, the example above uses "*?" Is not suitable. Let's see what results when we use "*?":

var s="100001,111,12222221,222,3333,12321,14441";
//Hmm... I wantto write a regular expression match "1xxxx1"
var match=s.match(/1.*?1/g)
//the result should be [ '100001', '111', '12222221', '12321', '14441' ]
console.log(match)  //output: [ '100001', '11', '1,1', '1,222,3333,1', '1,1' ]
Its match is as follows:

|100001|,|11| |1,1|222222|1,222,3333,1|232|1,1|4441
 match-1  2     3               4           5
The second match is "11", the ".*" is actually matched to the empty string, causing the match to the confusion. So, we choose to use wildcards according to the actual situation. As far as possible to make the regular expression more clear.

Ok, lesson is over. let's us do some task.

Task

This time you do not need coding in function. You just need to write a regular expression that matches the specified numeric string. I've given the regular expression name: "regex", please don't modify the name.

According to the following rules:

The numeric string first digit should be "9".
At the end of the number string there are at least four "0".
It can also be a negative number(This means that the string may be started by "-", maybe not)
Examples

regex.test("90000") should return true
regex.test("-90000") should return true
regex.test("900000000") should return true
regex.test("91230000") should return true
regex.test("-91230000") should return true

regex.test("90001") should return false
regex.test("9000") should return false
regex.test("91230") should return false
regex.test("1-90000") should return false
regex.test("-90000123") should return false
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