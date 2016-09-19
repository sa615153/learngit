https://www.zhihu.com/question/20498721  //push to kindle
好习惯，脚本开始处声明变量

var person = "John Doe", carName = "Volvo", price = 200;

or multiple lines:

var person = "John Doe",
carName = "Volvo",
price = 200;



重定义后，变量值不会丢



The result of adding "5" + 2 + 3:

523


数字和字符串想加，会变成字符串
If you add a number and a string, the result will be a string!
When adding a number and a string, JavaScript will treat the number as a string.



var x = 16 + 4 + "Volvo";
Result:
20Volvo
Try it Yourself »
JavaScript:
var x = "Volvo" + 16 + 4;
Result:
Volvo164



array的类型是object
The typeof operator returns "object" for arrays because in JavaScript arrays are objects.



-------------
函数存储在变量里，作为对象成员
Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

JavaScript objects are containers for named values.
JavaScript objects are containers for named values called properties or methods.
--------------



var person = {
    firstName: "John",
    lastName : "Doe",
    id       :  5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
调用属性 objectName.propertyName or objectName["propertyName"]
document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
调用函数 objectName.methodName()
document.getElementById("demo").innerHTML = person.fullName();






//window object
With JavaScript, the global scope is the complete JavaScript environment.
In HTML, the global scope is the window object. All global variables belong to the window object.
var carName = "Volvo";
// code here can use window.carName
document.getElementById("demo").innerHTML = "I can display " + window.carName;




HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:
<some-HTML-element some-event='some JavaScript'>
With double quotes:
<some-HTML-element some-event="some JavaScript">
Example
<button onclick='document.getElementById("demo").innerHTML=Date()'>The time is?</button>                          /
<button onclick="this.innerHTML=Date()">The time is?</button>                                                     /

//call function
<button onclick="displayDate()">The time is?</button>



Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
The list is much longer: W3Schools JavaScript Reference HTML DOM Events.
http://www.w3schools.com/jsref/dom_obj_event.asp






What can JavaScript Do?
Event handlers can be used to handle, and verify, user input, user actions, and browser actions:

Things that should be done every time a page loads
Things that should be done when the page is closed
Action that should be performed when a user clicks a button
Content that should be verified when a user inputs data
And more ...
Many different methods can be used to let JavaScript work with events:

HTML event attributes can execute JavaScript code directly
HTML event attributes can call JavaScript functions
You can assign your own event handler functions to HTML elements
You can prevent events from being sent or being handled
And more ...




<!DOCTYPE html>
<html>
<body>

<p onclick="this.innerHTML='GOOD JOB!'">Click me.</p>

</body>
</html>
///文字也可以点击， 也有onclick属性







<!DOCTYPE html>
<html>
<body>

<span onmouseover="this.style.color='red'" ,onmouseleave = "this.style.color='black'">Mouse over me!</span>

</body>
</html>                                                                                                   /



String Methods and Properties
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, 
because JavaScript treats primitive values as objects when executing methods and properties.




var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

Both methods accept a second parameter as the starting position for the search.

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");





var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
The result of res will be:
Banana

If a parameter is negative, the position is counted from the end of the string.
This example slices out a portion of a string from position -12 to position -6:
Example
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12,-6);

If you omit the second parameter, the method will slice out the rest of the string:
Example
var res = str.slice(7);

substring() is similar to slice().
The difference is that substring() cannot accept negative indexes.
Example
var str = "Apple, Banana, Kiwi";
var res = str.substring(7,13);

If you omit the second parameter, substring() will slice out the rest of the string.



substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.
Example
var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);
The result of res will be:
Banana



str = "Please visit Microsoft!";
var n = str.replace("Microsoft","W3Schools");
Try it Yourself »
The replace() method can also take a regular expression as the search value.
By default, the replace() 'function' replaces only the first match. 
To replace all matches, use a regular expression with a g flag (for global match):
Example
str = "Please visit Microsoft!";
var n = str.replace(/Microsoft/g,"W3Schools");
The replace() method does not change the string it is called on. It returns a new string.



var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower



concat() joins two or more strings:
Example
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat("	",text2);



var str = "HELLO WORLD";
str.charAt(0);            // returns H
var str = "HELLO WORLD";
str.charCodeAt(0);         //	returns 72



If you want to read a string as an array, convert it to an array first.
Converting a String to an Array
A string can be converted to an array with the split() method:
Example
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe



If the separator is omitted, the returned array will contain the whole string in index [0].
If the separator is "", the returned array will be an array of single characters:
Example
var txt = "Hello";       // String
txt.split("");           // Split in characters



for (i = 0; i < arr.length; i++) {
    text += arr[i] + "<br>"
}



var x = 100 / "Apple";  // x will be NaN (Not a Number)
isNaN(x);               // returns true because x is Not a Number

var x = 100 / "10";     // x will be 10




var x = 123;
var y = new Number(123);
// typeof x returns number
// typeof y returns object



var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123



var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0



The toFixed() method rounds a number to a given number of digits.
For working with money, toFixed(2) is perfect.
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
10
9.66
9.6560
9.656000



var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600



var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
There is no reason to use it in your code.



All JavaScript data types have a valueOf() and a toString() method.



Number()	Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns an integer



Number() can be used to convert JavaScript variables to numbers:
x = true;
Number(x);        // returns 1
x = false;     
Number(x);        // returns 0
x = new Date();
Number(x);        // returns 1404568027739
Used on Date(), the Number() method returns the number of milliseconds since 1.1.1970.
x = "10"
Number(x);        // returns 10
x = "10 20"
Number(x);        // returns NaN



parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
Example
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 



parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
Example
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN



var x = Number.MAX_VALUE;
Number properties belongs to the JavaScript's number object wrapper called Number.'
These properties can only be accessed as Number.MAX_VALUE.
Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:
http://www.w3schools.com/jsref/jsref_obj_number.asp



Math.random();       // returns a random number
Math.min(0, 150, 30, 20, -8, -200);      // returns -200
Math.max(0, 150, 30, 20, -8, -200);      // returns 150
Math.round(4.7);            // returns 5
Math.round(4.4);            // returns 4
Math.ceil(4.4);             // returns 5
Math.floor(4.7);            // returns 4

Math.floor(Math.random() * 11);   // returns a random number between 0 and 10



Math.E          // returns Euler's number
Math.PI         // returns PI
Math.SQRT2      // returns the square root of 2
Math.SQRT1_2    // returns the square root of 1/2
Math.LN2        // returns the natural logarithm of 2
Math.LN10       // returns the natural logarithm of 10
Math.LOG2E      // returns base 2 logarithm of E
Math.LOG10E     // returns base 10 logarithm of E



Math Object Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
asin(x)	Returns the arcsine of x, in radians
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y,x)	Returns the arctangent of the quotient of its arguments
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x,y,z,...,n)	Returns the number with the highest value
min(x,y,z,...,n)	Returns the number with the lowest value
pow(x,y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sin(x)	Returns the sine of x (x is in radians)
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle



document.getElementById("demo").innerHTML = Date();

new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)



var d = new Date();
document.getElementById("demo").innerHTML = d;
Sat Sep 10 2016 11:59:56 GMT+0800 (China Standard Time)



var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo").innerHTML = d;
Mon Oct 13 2014 11:13:00 GMT+0800 (China Standard Time)



var d = new Date(86400000);
document.getElementById("demo").innerHTML = d;
Fri Jan 02 1970 08:00:00 GMT+0800 (China Standard Time)



var d = new Date(99,5,24,11,33,30,0);
document.getElementById("demo").innerHTML = d;
Thu Jun 24 1999 11:33:30 GMT+0800 (China Standard Time)



Variants of the example above let us omit any of the last 4 parameters:

Example
<script>
var d = new Date(99,5,24);
document.getElementById("demo").innerHTML = d;
</script>
Thu Jun 24 1999 00:00:00 GMT+0800 (China Standard Time)                       /



document.getElementById("demo").innerHTML = d;===document.getElementById("demo").innerHTML = d.toString();




document.getElementById("demo").innerHTML = d.toUTCString();//Sat, 10 Sep 2016 04:04:22 GMT



document.getElementById("demo").innerHTML = d.toDateString();//Sat Sep 10 2016



Date objects are static. The computer time is ticking, but date objects, once created, are not.



In other words: If a date/time is created in GMT (Greenwich Mean Time), 
the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.



There are generally 4 types of JavaScript date input formats:

Type	Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015" or "2015/03/25"
Long Date	"Mar 25 2015" or "25 Mar 2015"
Full Date	"Wednesday March 25 2015"



Independent of input format, JavaScript will (by default) output dates in full text string format:
Wed Mar 25 2015 08:00:00 GMT+0800 (China Standard Time)




The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
Example (Complete date)
var d = new Date("2015-03-25");
The computed date will be relative to your time zone.
Depending on your time zone, the result above will vary between March 24 and March 25.

It can be written without specifying the day (YYYY-MM):
Example (Year and month)
var d = new Date("2015-03");//Sun Mar 01 2015 08:00:00 GMT+0800 (China Standard Time)       
//Time zones will vary the result above between December 31 2014 and January 01 2015.




It can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SS):
Example (Complete date plus hours, minutes, and seconds)
var d = new Date("2015-03-25T12:00:00");



JavaScript Short Dates.
Short dates are most often written with an "MM/DD/YYYY" syntax like this:
Example
var d = new Date("03/25/2015");
JavaScript will also accept "YYYY/MM/DD":
Example
var d = new Date("2015/03/25");
Month is written before day in all short date and ISO date formats.



Leading zeroes can produce unexpected results
document.getElementById("demo1").innerHTML = new Date("2015-3-25");
document.getElementById("demo2").innerHTML = new Date("2015-03-25");
Wed Mar 25 2015 00:00:00 GMT+0800 (China Standard Time)
Wed Mar 25 2015 08:00:00 GMT+0800 (China Standard Time)



JavaScript Long Dates.
Long dates are most often written with a "MMM DD YYYY" syntax like this:
var d = new Date("Mar 25 2015");
Month and day can be in any order:
var d = new Date("25 Mar 2015");
var d = new Date("January 25 2015");
var d = new Date("Jan 25 2015");
Commas are ignored. Names are case insensitive:
var d = new Date("JANUARY, 25, 2015");



Full Date Format
var d = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)");



Date Get Methods
Get methods are used for getting a part of a date. Here are the most common (alphabetically):

Method	Description
getDate()	Get the day as a number (1-31)
getDay()	Get the weekday as a number (0-6)
//document.getElementById("demo").innerHTML = d.getDay();6
//In JavaScript, the first day of the week (0) means "Sunday",
// even if some countries in the world consider the first day of the week to be "Monday"
getFullYear()	Get the four digit year (yyyy)
//document.getElementById("demo").innerHTML = d.getFullYear();2016
getHours()	Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	Get the minutes (0-59)
getMonth()	Get the month (0-11)
getSeconds()	Get the seconds (0-59)
getTime()	Get the time (milliseconds since January 1, 1970)
//getTime() returns the number of milliseconds since January 1, 1970:



Date Set Methods
Set methods are used for setting a part of a date. Here are the most common (alphabetically):

Method	Description
setDate()	Set the day as a number (1-31)
//var d = new Date();
//d.setDate(20);
//document.getElementById("demo").innerHTML = d;
//Thu Sep 15 2016 12:19:48 GMT+0800 (China Standard Time)
The setDate() method can also be used to add days to a date:
// var d = new Date();
// d.setDate(d.getDate() + 50);
// document.getElementById("demo").innerHTML = d;
setFullYear()	Set the year (optionally month and day)
//d.setFullYear(2020, 0, 14);
//document.getElementById("demo").innerHTML = d;
//Tue Jan 14 2020 12:17:40 GMT+0800 (China Standard Time)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)



d.setFullYear(2020, 0, 14);
document.getElementById("demo").innerHTML = d;



//Date Input - Parsing Dates
var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;
1332259200000



You can then use the number of milliseconds to convert it to a date object:
Example
<script>
var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
document.getElementById("demo").innerHTML = d;
</script>                                                /




Compare Dates
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
document.getElementById("demo").innerHTML = text;



UTC Date Methods
UTC date methods are used for working UTC dates (Univeral Time Zone dates):

Method	Description
getUTCDate()	Same as getDate(), but returns the UTC date
getUTCDay()	Same as getDay(), but returns the UTC day
getUTCFullYear()	Same as getFullYear(), but returns the UTC year
getUTCHours()	Same as getHours(), but returns the UTC hour
getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
getUTCMonth()	Same as getMonth(), but returns the UTC month
getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds




//////////////////////array
var array-name = [item1, item2, ...];       
With JavaScript, the full array can be accessed by referring to the array name

Arrays use numbers to access its "elements". In this example, person[0] returns John:
Objects use names to access its "members". In this example, person.firstName returns John://dict
//var person = {firstName:"John", lastName:"Doe", age:46};
//document.getElementById("demo").innerHTML = person["firstName"];



You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:



var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays


Adding Array Elements
The easiest way to add a new element to an array is using the push method:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");                // adds a new element (Lemon) to fruits

New element can also be added to an array using the length property:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";     // adds a new element (Lemon) to fruits

Adding elements with high indexes can create undefined "holes" in an array:
Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[10] = "Lemon";                // adds a new element (Lemon) to fruits



Looping Array Elements
The best way to loop through an array, is using a "for" loop:
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
//动态加载
-----------------
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;
-----------------



WARNING !!
If you use a named index, JavaScript will redefine the array to a standard object.
After that, all array methods and properties will produce incorrect results.

 Example:
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length will return 0
var y = person[0];             // person[0] will return undefined





The new keyword only complicates the code. It can also produce some unexpected results:

var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
What if I remove one of the elements?

var points = new Array(40);       // Creates an array with 40 undefined elements !!!!!




1Array.isArray(fruits);     // returns true
2To solve this problem you can create your own isArray() function:

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
Solution 3:
The instanceof operator returns true if an object is created by a given constructor:

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array     // returns true



///array method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
Example
var fruits = ["Banana", "Orange","Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Banana * Orange * Apple * Mango



The pop() method removes the last element from an array:
The pop() method returns the value that was "popped out":
Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"



The push() method adds a new element to an array (at the end):
The push() method returns the new array length:
Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5




Shifting Elements
Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.
The shift() method returns the string that was "shifted out".

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
Orange,Apple,Mango



The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The unshift() method returns the new array length.
Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
Lemon,Banana,Orange,Apple,Mango
Note: The unshift() method does not work properly in Internet Explorer 8 and earlier,
 the values will be inserted, but the return value will be undefined.





Deleting Elements
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined

Using delete may leave undefined holes in the array. Use pop() or shift() instead.



The splice() method can be used to add new items to an array:
Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//Banana,Orange,Lemon,Kiwi,Apple,Mango
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.



Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits
//Orange,Apple,Mango



var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];
var myChildren = myGirls.concat(myBoys);     // Concatenates (joins) myGirls and myBoys

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3



The slice() method creates a new array. It does not remove any elements from the source array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
document.getElementById("demo").innerHTML = fruits + "<br>" + citrus;
Banana,Orange,Lemon,Apple,Mango
Orange,Lemon,Apple,Mango

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
document.getElementById("demo").innerHTML = fruits + "<br>" + citrus;
Banana,Orange,Lemon,Apple,Mango
Apple,Mango

The slice() method can take two arguments like slice(1,3).
The method then selects elements from the start argument, and up to (but not including) the end argument.
If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
Example
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
document.getElementById("demo").innerHTML = fruits + "<br>" + citrus;
Banana,Orange,Lemon,Apple,Mango
Orange,Lemon



var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
document.getElementById("demo").innerHTML = fruits.valueOf();
document.getElementById("demo").innerHTML = fruits.toString();
http://www.w3schools.com/jsref/jsref_obj_array.asp


All JavaScript objects have a valueOf() and a toString() method.



///sort array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            // Sorts the elements of fruits 
fruits.reverse();         // Reverses the order of the elements



By default, the sort() 'function' sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare 'function':
Example
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
document.getElementById("demo").innerHTML = points;

Use the same trick to sort an array descending:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});



//
The Compare Function
The purpose of the compare 'function' is to define an alternative sort order.
The compare 'function' should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a-b}
When the sort() 'function' compares two values, it sends the values to the compare 'function', 
and sorts the values according to the returned (negative, zero, positive) value.

When comparing 40 and 100, the sort() method calls the compare 'function(40,100)'.
The 'function' calculates 40-100, and returns -60 (a negative value).
The sort 'function' will sort 40 as a value lower than 100.
You can use this code snippet to experiment with numerically and alphabetically sorting:

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;
function myFunction1() {
    points.sort();
    document.getElementById("demo").innerHTML = points;
    //1,10,100,25,40,5
}
function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
    //1,5,10,25,40,100
}

//比较40，100，时，传入function(a,b)   a=40, b=100  当函数return a-b时，，传入参数a=40，b=100后，return -60，negative, 认为a<b, 将a排在b前边，（总是将被认为小的数排在前边）
//													当函数return b-a时，，传入参数a=40，b=100后，return  60，positive，认为a>b，将a排在b后边，（总是将被认为小的数排在前边）

//排好序后，用func检查，须为negative
//[40，100]， 传参a40b100,(a-b)40-100negative
//[100. 40]， 传参a100b40,(b-a)40-100negative


Sorting an Array in Random Order//无序
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});



var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value



//sort array of objects
var cars = [
{type:"Volvo", year:2016},
{type:"Saab", year:2001},
{type:"BMW", year:2010}]

displayCars();

function myFunction() {
    cars.sort(function(a, b){return a.year - b.year});
    displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}



Comparing string properties is a little more complex::
var cars = [
{type:"Volvo", year:2016},
{type:"Saab", year:2001},
{type:"BMW", year:2010}]

displayCars();

function myFunction() {
    cars.sort(function(a, b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}



Boolean(10 > 9)        // returns true
(10 > 9)              // also returns true
10 > 9                // also returns true

Any (not empty) string is true
Even the string 'false' is true
Any expression (except zero) is true

var x = 0;
Boolean(x);       // returns false

var x = -0;
Boolean(x);       // returns false

var x = "";
Boolean(x);       // returns false

The Boolean value of undefined is false:
var x;
Boolean(x);       // returns false

var x = null;
Boolean(x);       // returns false

var x = false;
Boolean(x);       // returns false

var x = 10 / "H";
Boolean(x);       // returns false

http://www.w3schools.com/jsref/jsref_obj_boolean.asp



variablename = (condition) ? value1:value2 

Case	Value	Try
2 < 12	true	Try it »
2 < "12"	true	Try it »
2 < "John"	false	Try it »
2 > "John"	false	Try it »
2 == "John"	false	Try it »
"2" < "12"	false	Try it »
"2" > "12"	true	Try it »
"2" == "12"	false



Operator	Description	Example	Same as	Result	Decimal
&	AND	x = 5 & 1	0101 & 0001	0001	1
|	OR	x = 5 | 1	0101 | 0001	0101	5
~	NOT	x = ~ 5	 ~0101	1010	10
^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	4
<<	Left shift	x = 5 << 1	0101 << 1	1010	10
>>	Right shift	x = 5 >> 1	0101 >> 1	0010	2



//if
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}



if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}



switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break; 
    case 0:
        text = "Today is Sunday";
        break; 
    default: 
        text = "Looking forward to the Weekend";
}

switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default: // default is still default
        text = "Looking forward to the Weekend";
        break; 
    case 4:
    case 5:
       text = "Soon it is Weekend";
        break; 
    case 0:
    case 6:
       text = "It is Weekend";
}



for (statement 1; statement 2; statement 3) {
    code block to be executed
}
If you omit statement 2, you must provide a break inside the loop. 
Otherwise the loop will never end. This will crash your browser. 
Read about breaks in a later chapter of this tutorial.



The For/In Loop
The JavaScript for/in statement loops through the properties of an object:

Example
var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text += person[x];
}



label:
statements

The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.

The continue statement (with or without a label reference) can only be used to skip one loop iteration.
The break statement, without a label reference, can only be used to jump out of a loop or a switch.
With a label reference, the break statement can be used to jump out of any code block:

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    break list;
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
    text += cars[5] + "<br>";
}
document.getElementById("demo").innerHTML = text;
A code block is a block of code between { and }.



Number() converts to a Number, String() converts to a String, Boolean() converts to a Boolean.
JavaScript Data Types
In JavaScript there are 5 different data types that can contain values:
string
number
boolean
object
'function'
There are 3 types of objects:
Object
Date
Array
And 2 data types that cannot contain values:
null
undefined



typeof "John"                 // Returns "string" 
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"



The constructor Property
The constructor property returns the constructor 'function' for all JavaScript variables.

Example
"John".constructor                 // Returns "function String()  { [native code] }"
(3.14).constructor                 // Returns "function Number()  { [native code] }"
false.constructor                  // Returns "function Boolean() { [native code] }"
[1,2,3,4].constructor              // Returns "function Array()   { [native code] }"
{name:'John', age:34}.constructor  // Returns" function Object()  { [native code] }"
new Date().constructor             // Returns "function Date()    { [native code] }"
function () {}.constructor         // Returns "function Function(){ [native code] }"

You can check the constructor property to find out if an object is an Array (contains the word "Array"):
Example
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}



//type conversion
The global method String() can convert numbers to strings.
It can be used on any type of numbers, literals, variables, or expressions:
Example
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
The Number method toString() does the same.
Example
x.toString()
(123).toString()
(100 + 23).toString()
toExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length



Converting Strings to Numbers
The global method Number() can convert strings to numbers.

Strings containing numbers (like "3.14") convert to numbers (like 3.14).

Empty strings convert to 0.

Anything else converts to NaN (Not a number).

Number("3.14")    // returns 3.14
Number(" ")       // returns 0 
Number("")        // returns 0
Number("99 88")   // returns NaN

parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer



+ operator can be used to convert a variable to a number:



d = new Date();
Number(d)          // returns 1404568027739
d = new Date();
d.getTime()        // returns 1404568027739



//Automatic String Conversion
JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:'
document.getElementById("demo").innerHTML = myVar;
// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

Numbers and booleans are also converted, but this is not very visible:
// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"



//////JavaScript Regular Expressions
Syntax
/pattern/modifiers;

Example explained:
/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).



The search() method uses an expression to search for a match, and returns the position of the match.
The replace() method returns a modified string where the pattern is replaced.

var str = "Visit W3Schools";
var n = str.search(/w3schools/i);//6

var	str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");//Visit W3Schools!



Modifier	Description
i	Perform case-insensitive matching
g	Perform a global match (find all matches rather than stopping after the first match)
m	Perform multiline matching



var patt = /e/;
patt.test("The best things in life are free!");
Since there is an "e" in the string, the output of the code above will be:
true

You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:'
/e/.test("The best things in life are free!");



Using exec()
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text.
If no match is found, it returns null.
The following example searches a string for the character "e":
Example 1
/e/.exec("The best things in life are free!");
Since there is an "e" in the string, the output of the code above will be:

e

http://www.w3schools.com/jsref/jsref_obj_regexp.asp



//////////JavaScript Errors - Throw and Try to Catch
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>/

<script>
try {
    adddlert("Welcome guest!");//alert
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
</script>

</body>
</html>/

//adddlert is not defined



The throw Statement
The throw statement allows you to create a custom error.

Technically you can raise (throw) an exception.

The exception can be a JavaScript String, a Number, a Boolean or an Object:

throw "Too big";    // throw a text
throw 500;          // throw a number



---------------------
var x = "1"

if(isNaN(x)){
  alert("\"1\"is NaN")
}else{
  alert("\"1\" is a Number")
}
//结果，"1"is a Number
------
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>          /

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>        /
<p id="message"></p>         /

<script>
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        alert(typeof(x))//结果，string,and is a Number（非（isNaN））
        x = Number(x);
        if(x < 5)    throw "too low";
        if(x > 10)   throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
</script>

</body>
</html>        /
--------
HTML Validation
The code above is just an example.

Modern browsers will often use a combination of 'JavaScript' and 'built-in HTML validation', 
using predefined validation rules defined in HTML attributes:

<input id="demo" type="number" min="5" max="10" step="1"
-------------------

//置空
<input id="demo" type="text">
finally {
        document.getElementById("demo").value = "";
    }



/////////////////debugger
Normally, otherwise follow the steps at the bottom of this page, 
you 'activate debugging' in your browser with the F12 key, 
and select "Console" in the debugger menu.and "source" for breakpoint
<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>           /



JavaScript Hoisting



Strict Mode
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. 
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

Using a variable,object without declaring it, is not allowed:

Deleting a variable (or object) is not allowed.
Deleting a 'function' is not allowed.

Duplicating a parameter name is not allowed:

Octal numeric literals are not allowed:
"use strict";
var x = 010;             // This will cause an error

Escape characters are not allowed:
"use strict";
var x = \010;            // This will cause an error


Writing to a read-only property is not allowed:
"use strict";
var obj = {};
----------------
Object.defineProperty(obj, "x", {value:0, writable:false});
----------------
obj.x = 3.14;            // This will cause an error


Writing to a get-only property is not allowed:
"use strict";
----------------
var obj = {get x() {return 0} };
----------------
obj.x = 3.14;            // This will cause an error


Deleting an undeletable property is not allowed:
"use strict";
delete Object.prototype; // This will cause an error


The string "eval" cannot be used as a variable:
"use strict";
var eval = 3.14;         // This will cause an error


The string "arguments" cannot be used as a variable:
"use strict";
var arguments = 3.14;    // This will cause an error


The with statement is not allowed:
"use strict";
with (Math){x = cos(2)}; // This will cause an error


For security reasons, eval() is not allowed to create variables in the scope from which it was called:
"use strict";
eval ("var x = 2");
alert (x);               // This will cause an error


In 'function' calls like f(), the this value was the global object. In strict mode, it is now undefined.


Future Proof!
Future reserved keywords are not allowed in strict mode. These are:

implements
interface
let
package
private
protected
public
static
yield
"use strict";
var public = 1500;      // This will cause an error


The "use strict" directive is only recognized at the beginning of a script or a 'function'.






//////////JavaScript Style Guide and Coding Conventions
Variable Names
At W3schools we use camelCase for identifier names (variables and functions).

All names start with a letter.

firstName = "John";
lastName = "Doe";
price = 19.90;
tax = 0.20;
fullPrice = price + (price * tax);

Spaces Around Operators

var values = ["Volvo", "Saab", "Fiat"];

Conditionals:
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

This happens because closing (ending) statements with semicolon is optional in JavaScript.
JavaScript will close the return statement at the end of the line, because it is a complete statement.

Always end a simple statement with a semicolon.

General rules for complex (compound) statements:
Put the opening bracket at the end of the first line.
Use one space before the opening bracket.
Put the closing bracket on a new line, without leading spaces.
Do not end a complex statement with a semicolon.//func loops conditionals

Object Rules
General rules for object definitions:
Place the opening bracket on the same line as the object name.
Use colon plus one space between each property and its value.
Use quotes around string values, not around numeric values.
Do not add a comma after the last property-value pair.
Place the closing bracket on a new line, without leading spaces.
Always end an object definition with a semicolon.



Line Length < 80
For readability, avoid lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.
document.getElementById("demo").innerHTML =
    "Hello Dolly.";



///Loading JavaScript in HTML
Use simple syntax for loading external scripts (the type attribute is not necessary):
<script src="myscript.js"></script>    /



JavaScript Best Practices

Avoid global variables,  avoid new,  avoid  ==,  avoid eval()

Local variables must be declared with the var keyword, otherwise they will become global variables.
Strict mode does not allow undeclared variables.

Declarations on Top

loop
// Declare at the beginning
var i;
// Use later
for (i = 0; i < 5; i++) 


Initialize Variables
It is a good coding practice to initialize variables when you declare them.

Never Declare Number, String, or Boolean Objects


Don't Use new Object()'
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()

var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var	x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object



Beware of Automatic Type Conversions
JavaScript is 'loosely typed'. A variable can contain different data types, and a variable can 'change' its data type:
Example
var x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number



Use === Comparison



Use Parameter Defaults
If a 'function' is called with a missing argument, the value of the missing argument is set to undefined.
Undefined values can break your code. It is a good habit to assign default values to arguments.
Example
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
}



End Your Switches with Defaults



It is a common mistake to forget that switch statements use strict comparison:

This case switch will display an alert:
var x = 10;
switch(x) {
    case 10: alert("Hello");
}
Try it Yourself »
This case switch will not display an alert:

var x = 10;
switch(x) {
    case "10": alert("Hello");
}



var x = 10 + 5;          // the result in x is 15
var x = 10 + "5";        // the result in x is "105"



JavaScript will allow you to break a statement into two lines:

Example 1
var x =
"Hello World!";
But, breaking a statement in the middle of a string will not work:

Example 2
var x = "Hello
World!";

You must use a "backslash" if you must break a statement in a string:
Example 3
var x = "Hello \
World!";



function myFunction(a) {
    var power = 10  
    return a * power
}
	||
function myFunction(a) {
    var power = 10;
    return a * power;
}
	||
function myFunction(a) {
    var
    power = 10;  
    return a * power;
}
	非||
function myFunction(a) {
    var
    power = 10;  
    return
    a * power;
}



In JavaScript, objects use named indexes.
If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object.
After the automatic redefinition, array methods and properties will produce undefined or incorrect results:
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length will return 0
var y = person[0];             // person[0] will return undefined



Incorrect:
points = [40, 100, 1, 5, 25, 10,];



Incorrect:
person = {firstName:"John", lastName:"Doe", age:46,}



Undefined is Not Null
With JavaScript, null is for objects, undefined is for variables, properties, and methods.

To be null, an object has to be defined, otherwise it will be undefined.

If you want to test if an object exists, this will throw an error if the object is undefined:

Incorrect:
if (myObj !== null && typeof myObj !== "undefined") 
Because of this, you must test typeof() first:

Correct:
if (typeof myObj !== "undefined" && myObj !== null) 



Expecting Block Level Scope
JavaScript does not create a new scope for each code block.

It is true in many programming languages, but not true in JavaScript.

It is a common mistake, among new JavaScript developers, to believe that this code returns undefined:

Example
for (var i = 0; i < 10; i++) {
    // some code
}
return i;//10



/////////////////////JavaScript Performance
Reduce Activity in Loops
Bad Code:
var i;
for (i = 0; i < arr.length; i++) {
Better Code:
var i;
var l = arr.length;
for (i = 0; i < l; i++) {



Reduce DOM Access
Accessing the HTML DOM is very slow, compared to other JavaScript statements.

If you expect to access a DOM element several times, access it once, and use it as a local variable:

Example
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";



Reduce DOM Size
Keep the number of elements in the HTML DOM small.

This will always improve page loading, and speed up rendering (page display), especially on smaller devices.

Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.



Avoid Unnecessary Variables
Don't create new variables if you don't plan to save values.

Often you can replace code like this:

var fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
With this:

document.getElementById("demo").innerHTML = firstName + " " + lastName



Delay JavaScript Loading
Putting your scripts at the bottom of the page body, lets the browser load the page first.
An alternative is to use defer="true" in the script tag. 
The defer attribute specifies that the script should be executed after the page has finished parsing, 
but it only works for external scripts.



If possible, you can add your script to the page by code, after the page has loaded:

Example
<script>
window.onload = downScripts;

function downScripts() {
    var element = document.createElement("script");
    element.src = "myScript.js";
    document.body.appendChild(element);
}
</script>/



////////////////JavaScript Reserved Words
http://www.w3schools.com/js/js_reserved.asp



JSON names require double quotes. JavaScript names do not.



Converting a JSON Text to a JavaScript Object



First, create a JavaScript string containing JSON syntax:

var text = '{ "employees" : [' + \
'{ "firstName":"John" , "lastName":"Doe" },' + \
'{ "firstName":"Anna" , "lastName":"Smith" },' + \
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

var obj = JSON.parse(text);
Finally, use the new JavaScript object in your page:

Example
<p id="demo"></p>     /

<script>
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>         /



-----------------------
|JavaScript Forms     |
-----------------------


JavaScript Form Validation

<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
</script>
</head>
<body>

<form name="myForm" action="demo_form.asp"
onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

</body>
</html>                /




<input id="numb">
x = document.getElementById("numb").value;

Automatic HTML Form Validation
HTML form validation can be performed automatically by the browser:

If a form field (fname) is empty, the required attribute prevents this form from being submitted:

HTML Form Example
<form action="demo_form.asp" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>                                               /
Automatic HTML form validation does not work in Internet Explorer 9 or earlier.


Constraint Validation HTML Input Attributes
Attribute	Description
disabled	Specifies that the input element should be disabled
max	Specifies the maximum value of an input element
min	Specifies the minimum value of an input element
pattern	Specifies the value pattern of an input element
required	Specifies that the input field requires an element
type 	Specifies the type of an input element
http://www.w3schools.com/html/html_form_attributes.asp
Constraint Validation CSS Pseudo Selectors
Selector	Description
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid	Selects input elements with valid values
http://www.w3schools.com/css/css_pseudo_classes.asp




The checkValidity() Method


<!DOCTYPE html>
<html>
<body>

<p>Enter a number and click OK:</p>                                       /

<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>                                /

<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>       

<p id="demo"></p>

<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    }
}
</script>

</body>
</html>                                                                   /



The rangeOverflow Property
<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>

<script>
function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
       txt = "Value too large";
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>                                                                 /




The rangeUnderflow Property
<input id="id1" type="number" min="100">
<button onclick="myFunction()">OK</button>                                /

<p id="demo"></p>                                                         /

<script>
function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeUnderflow) {
       txt = "Value too small";
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>                                                                 /



var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

Using an Object Constructor
The examples above are limited in many situations. They only create a single object.
Sometimes we like to have an "object type" that can be used to create many objects of one type.
The standard way to create an "object type" is to use an object constructor function:

Example
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");


var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array	object
var	x6 = /()/           // new regexp object
var x7 = function(){};  // new function object



Note: JavaScript variables are not mutable. Only JavaScript objects.



The syntax for accessing the property of an object is:

objectName.property          // person.age
or

objectName["property"]       // person["age"]
or

objectName[expression]       // x = "age"; person[x]



JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.

Syntax
for (variable in object) {
    code to be executed
}

Example
var person = {fname:"John", lname:"Doe", age:25}; 

for (x in person) {
    txt += person[x];
}



Adding New Properties
You can add new properties to an existing object by simply giving it a value.

Assume that the person object already exists - you can then give it new properties:

Example
person.nationality = "English";



Deleting Properties
The delete keyword deletes a property from an object:

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"]; 



Adding New Methods
Defining methods to an object is done inside the constructor function:

Example
function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}



Creating a Prototype
The standard way to create an object prototype is to use an object constructor function:

Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
With a constructor 'function', you can use the new keyword to create new objects from the same prototype:

Example
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
Try it Yourself »
The constructor 'function' is the prototype for Person objects.
It is considered good practice to name constructor 'function' with an upper-case first letter.



Adding a Property to an Object
Adding a new property to an existing object is easy:

Example
myFather.nationality = "English";



Adding a Method to an Object
Adding a new method to an existing object is also easy:

Example
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};



Adding Properties to a Prototype
To add a new property to a constructor, you must add it to the constructor function:
Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English"//Prototype properties can have prototype values (default values).
}



Adding Methods to a Prototype
Your constructor function can also define methods:

Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName;};
}



Using the prototype Property
The JavaScript prototype property allows you to add new properties to an existing prototype:

Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
//var myFather = new Person("John", "Doe", 50, "blue");


The JavaScript prototype property also allows you to add new methods to an existing prototype:

Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
//var myFather = new Person("John", "Doe", 50, "blue");



function functionName(parameters) {
  code to be executed
}

Semicolons are used to separate executable JavaScript statements.
Since a 'function' declaration is not an executable statement, it is not common to end it with a semicolon.

A 'function' expression can be stored in a variable:
Example
var x = function (a, b) {return a * b};//name前置，
//The function above ends with a semicolon because it is a part of an executable statement.

Functions can also be defined with a built-in JavaScript 'function' constructor called Function().
Example
var myFunction = new Function("a", "b", "return a * b");//var myFunction = function (a, b) {return a * b};
var x = myFunction(4, 3);

myFunction(5);

function myFunction(y) {
    return y * y;
}
Functions defined using an expression are not hoisted.
---------------
Self-Invoking Functions
Function expressions can be made "self-invoking".//没名字

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a 'function' declaration.//有名字

You have to add parentheses around the 'function' to indicate that it is a 'function' expression:
(function () {
    var x = "Hello!!";      // I will invoke myself
})();
---------------



The arguments.length property returns the number of arguments received when the function was invoked:
Example
function myFunction(a, b) {
    return arguments.length;
}



The toString() method returns the function as a string:
Example
function myFunction(a, b) {
    return a * b;
}
var txt = myFunction.toString();



A 'function' defined as the property of an object, is called a method to the object.
A 'function' designed to create new objects, is called an object constructor.



A JavaScript 'function' does not perform any checking on parameter values (arguments).Parameter Rules
JavaScript 'function' definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.



Parameter Defaults
If a function is called with missing arguments (less than declared), the missing values are set to: undefined
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
Example
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } 
}



If a 'function' is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
The Arguments Object
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the 'function' was called (invoked).

This way you can simply use a 'function' to find (for instance) the highest value in a list of numbers:
Example
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

Example
x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}



Arguments are Passed by Value//Changes to arguments are not visible (reflected) outside the function.
Objects are Passed by Reference
In JavaScript, object references are values.
//Changes to object properties are visible (reflected) outside the function.



//JavaScript Function Invocation
Invoking a Function as a Function
Example
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);           // myFunction(10, 2) will return 20

The 'function' above does not belong to any object. But in JavaScript there is always a default global object.
In HTML the default global object is the HTML page itself, so the 'function' above "belongs" to the HTML page.
In a browser the page object is the browser window. The 'function' above automatically becomes a window 'function'.
myFunction() and window.myFunction() is the same 'function':

function myFunction(a, b) {
    return a * b;
}
window.myFunction(10, 2);    // window.myFunction(10, 2) will also return 20

This is a common way to invoke a JavaScript 'function', but not a very good practice.
Global variables, methods, or functions can easily create name conflicts and bugs in the global object.



The Global Object
When a 'function' is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

This example returns the window object as the value of this:

Example
function myFunction() {
    return this;
}
myFunction();                // Will return the window object, [object Window]

Invoking a 'function' as a global 'function', causes the value of this to be the global object.
Using the window object as a variable can easily crash your program.



Invoking a Function as a Method
In JavaScript you can define 'function' as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

Example
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // Will return "John Doe"



var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}//this 指当前对象，函数所属对象The thing called this, is the object that "owns" the JavaScript code. 




Invoking a Function with a Function Constructor
If a 'function' invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

Example
// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

// This	creates a new object
var x = new myFunction("John","Doe");
x.firstName;                             // Will return "John"
Try it Yourself »
A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

The this keyword in the constructor does not have a value.
The value of this will be the new object created when the function is invoked.








Invoking a Function with a Function Method
In JavaScript, functions are objects. JavaScript functions have properties and methods.

call() and apply() are predefined JavaScript 'function' methods. Both methods can be used to invoke a 'function', and both methods must have the owner object as first parameter.

Example
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // Will return 20
Try it Yourself »

Example
function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // Will also return 20
Try it Yourself »
Both methods take an owner object as the first argument. The only difference is that call() takes the 'function' arguments separately, and apply() takes the 'function' arguments in an array.

In JavaScript strict mode, 'the first argument becomes the value of this in the invoked \'function\'', even if the argument is not an object.

In "non-strict" mode, if the value of the first argument is null or undefined, it is replaced with the global object.

With call() or apply() you can set the value of this, and invoke a 'function' as a new method of an existing object.





//closure
global variables belong to the window object.
Variables created without the keyword var, are always global, even if they are created inside a 'function'.

All functions have access to the global scope.  
In fact, in JavaScript, all functions have access to the scope "above" them.
JavaScript supports nested functions. Nested functions have access to the scope "above" them.



JavaScript Closures
Remember self-invoking functions? What does this 'function' do?

Example
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3

Example Explained
The variable add is assigned the return value of a self-invoking 'function'.

The self-invoking 'function' only runs once. It sets the counter to zero (0), and returns a 'function' expression.

This way add becomes a 'function'. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a 'function' to have "private" variables.

The counter is protected by the scope of the anonymous 'function', and can only be changed using the add 'function'.

A closure is a 'function' having access to the parent scope, even after the parent 'function' has closed.




-----------------------
html DOM
-----------------------

var myElement = document.getElementById("intro");

If the element is found, the method will return the element as an object (in myElement).
If the element is not found, myElement will contain null.


var x = document.getElementsByTagName("p");
x[0].innerHTML

/*
<p>Hello World!</p>
<p class="intro">The DOM is very useful.</p>
<p class="intro">This example demonstrates the <b>getElementsByClassName</b> method.</p>
<p id="demo"></p>
<script>
var x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML =
'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
*/

Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by 'class' name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections


<form id="frm1" action="form_action.asp">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form>

<p>Click "Try it" to display the value of each element in the form.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML =text;
}
</script>




//write()
<!DOCTYPE html>
<html>
<body>

<script>
document.write(Date());
</script>

</body>
</html>