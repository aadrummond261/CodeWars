From this Kata, I will do some changes: to reduce the description of the text (to provide a reference link). Because I am not good at writing these words of description. Examples and essential points will be retained.

At this lesson, we will learn some methods about add/remove array elements. They are: push(), pop(), shift() and unshift(). Their usage and details please refer to:     pop()     shift()     push()     unshift().

Here are some examples to help us understand their usage:

var arr=[1,2,3,4,5]
arr.push(6)         //use push() add one element to the end of arr
console.log(arr)    //output: [1,2,3,4,5,6]

arr.push(7,8);       //also can add more than one elements to arr
console.log(arr);    //output: [1,2,3,4,5,6,7,8]

//use pop() can remove one element from the end of arr,
//and return the value of this element.
console.log(arr.pop());  //output: 8  (pop() returned a value 8)

//and then arr should left 7 elements
console.log(arr);  //output: [1,2,3,4,5,6,7]

//shift() is similar to pop(),
//but shift() removes the first element of the arr.
console.log(arr.shift());  //output: 1  (shift() returned a value 1)

//and then arr should left 6 elements
console.log(arr);  //output: [2,3,4,5,6,7]

//unshift() is the reverse operation of shift(), 
//it can add one or more elements to the start of arr
arr.unshift(1);
console.log(arr);  //output: [1,2,3,4,5,6,7]

arr.unshift(0,0);
console.log(arr);  //output: [0,0,1,2,3,4,5,6,7]
These four methods are the most basic methods of adding and removing elements. We can choose to use them according to their needs.

Of course, their shortcomings are obvious. First, they can only manipulate the head and tail of the array, not flexible enough. Secondly, their speed is relatively slow. But we usually don't feel it, when you need to deal with big data, you will understand what is slow. For example, in some cases, the direct assignment of the array elements will be faster than the push method:

//push method is slower
var arr1=[];
for (var i=0;i<1000000;i++) arr1.push(i);
//direct assignment will quiker than push()
var arr2=[];
for (var i=0;i<1000000;i++) arr2[i]=i;
Ok, lesson is over. let's us do some task.

Task

Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

Finally, return arr.

Examples

infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]
Series

( ↑↑↑ Click the link above can get my newest kata list. Please add them to your favorites.)

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