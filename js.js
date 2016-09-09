It is a good programming practice to declare all variables at the beginning of a script.

var person = "John Doe", carName = "Volvo", price = 200;

or multiple lines:

var person = "John Doe",
carName = "Volvo",
price = 200;



If you re-declare a JavaScript variable, it will not lose its value.



The result of adding "5" + 2 + 3:

523



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




The typeof operator returns "object" for arrays because in JavaScript arrays are objects.



-------------
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
document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
document.getElementById("demo").innerHTML = person.fullName();



You can access object properties in two ways:

objectName.propertyName
or
objectName["propertyName"]

You access an object method with the following syntax:
objectName.methodName()



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
///文字也可以点击







<!DOCTYPE html>
<html>
<body>

<span onmouseover="this.style.color='red'" ,onmouseleave = "this.style.color='black'">Mouse over me!</span>

</body>
</html>                                                                                                   /



String Methods and Properties
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.




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



